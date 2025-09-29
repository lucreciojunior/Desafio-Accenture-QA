import webTables from '../../support/pages/webTablesPage';

describe('Web Tables - CRUD de registros', () => {
  let user;

  before(() => {
    user = webTables.generateFakeUser();
  });

  it('Criar um novo registro', () => {
    cy.intercept('GET', '/api/**', { log: false })
    webTables.visit();
    webTables.openAddRecord();
    webTables.fillForm(user);
    webTables.submitFormAndWait(user.email);

    cy.contains('div.rt-tr-group', user.email).should('exist');
  });

  it('Editar o novo registro criado', () => {
    const updatedUser = { ...user, department: 'Quality' };
    cy.intercept('GET', '/api/**', { log: false })
    webTables.visit();
    webTables.openAddRecord();
    webTables.fillForm(user);
    webTables.submitFormAndWait(user.email);
    webTables.editRecordByEmail(user.email);
    webTables.fillForm(updatedUser);
    webTables.submitForm();

    cy.contains('div.rt-tr-group', updatedUser.department).should('exist');
    user = updatedUser;
  });

  it('Deletar o novo registro criado', () => {
    cy.intercept('GET', '/api/**', { log: false })
    webTables.visit();
    webTables.openAddRecord();
    webTables.fillForm(user);
    webTables.submitFormAndWait(user.email);
    webTables.deleteRecordByEmail(user.email);
    cy.contains('div.rt-tr-group', user.email).should('not.exist');
  });

  it('Criar e depois deletar 12 registros dinamicamente', () => {
    const users = [];
    webTables.visit();
  
    for (let i = 0; i < 12; i++) {
      const fakeUser = webTables.generateFakeUser();
      users.push(fakeUser);
      cy.get('.-pageSizeOptions select').select('20').should('have.value', '20');
      webTables.openAddRecord();
      webTables.fillForm(fakeUser);
      webTables.submitForm();
    }
  
    users.forEach(u => {
      cy.contains('div.rt-tr-group', u.email).should('exist');
    });
  
    users.forEach(u => {
      webTables.deleteRecordByEmail(u.email);
    });
  
    users.forEach(u => {
      cy.contains('div.rt-tr-group', u.email).should('not.exist');
    });
  });
  
});


