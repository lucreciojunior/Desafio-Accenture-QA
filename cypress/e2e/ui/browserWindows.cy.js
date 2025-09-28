import browserWindows from '../../support/pages/browserWindowsPage';

describe('Browser Windows - Nova janela', () => {

  it('Abrir nova janela e validar mensagem', () => {
    browserWindows.visit();

    // Intercepta a URL da nova janela
    browserWindows.getNewWindowLink()
      .invoke('attr', 'onclick')
      .then((onClickAttr) => {
        const newPageUrl = `${Cypress.config().baseUrl}/sample`;

        cy.visit(newPageUrl);
      });

    // Valida o texto esperado
    browserWindows.verifySamplePage();

    // Fechar a aba 
    cy.go('back');

    // Verifica que voltou para Browser Windows
    cy.contains('Browser Windows').should('be.visible');
  });

});
