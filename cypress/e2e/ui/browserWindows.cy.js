import browserWindows from '../../support/pages/browserWindowsPage';

describe('Browser Windows - Nova janela', () => {

  it('Abrir nova janela e validar mensagem', () => {
    browserWindows.visit();

    browserWindows.getNewWindowLink()
      .invoke('attr', 'onclick')
      .then((onClickAttr) => {
        const newPageUrl = `${Cypress.config().baseUrl}/sample`;

        cy.visit(newPageUrl);
      });

    browserWindows.verifySamplePage();

    cy.go('back');

    cy.contains('Browser Windows').should('be.visible');
  });

});
