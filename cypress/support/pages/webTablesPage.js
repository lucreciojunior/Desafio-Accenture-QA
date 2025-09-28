import { faker } from '@faker-js/faker';


class WebTablesPage {
    visit() {
        cy.intercept('GET', '**/*', { log: false });
        cy.visit('/');
        cy.contains('Elements')
          .scrollIntoView()
          .click({ force: true });
        cy.contains('span', 'Web Tables').click();
      }
      
  openAddRecord() {
    cy.get('#addNewRecordButton').click();
  }

  fillForm({ firstName, lastName, email, age, salary, department }) {
    cy.get('#firstName').clear().type(firstName);
    cy.get('#lastName').clear().type(lastName);
    cy.get('#userEmail').clear().type(email);
    cy.get('#age').clear().type(age);
    cy.get('#salary').clear().type(salary);
    cy.get('#department').clear().type(department);
  }

  submitForm(email) {
    cy.get('#submit').click();
  }

  submitFormAndWait(email) {
    cy.get('#submit').click();
    cy.contains('div.rt-tr-group', email, { timeout: 10000 }).should('exist');
  }
  
  editRecordByEmail(email) {
    cy.contains('div.rt-tr-group', email, { timeout: 10000 })
      .should('exist')
      .within(() => {
        cy.get('#edit-record-4').click({ force: true });
      });
    cy.get('#firstName').should('be.visible'); 
  }
  
deleteRecordByEmail(email) {
    cy.contains('div.rt-tr-group', email, { timeout: 10000 })
      .should('exist')
      .within(() => {
        cy.get('[title="Delete"]').click({ force: true });
      });
  }
  
  generateFakeUser() {
    return {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      age: faker.number.int({ min: 18, max: 60 }),
      salary: faker.number.int({ min: 3000, max: 15000 }),
      department: faker.commerce.department()
    };
  }
}

export default new WebTablesPage();
