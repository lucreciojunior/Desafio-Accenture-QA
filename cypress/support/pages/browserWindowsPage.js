
class BrowserWindowsPage {
    visit() {
      cy.visit('/');
      cy.contains('Alerts, Frame & Windows').click();
      cy.contains('Browser Windows').click();
    }
  
    getNewWindowLink() {
      return cy.get('#windowButton');
    }
  
    verifySamplePage() {
      cy.contains('This is a sample page').should('be.visible');
    }
  }
  
  export default new BrowserWindowsPage();
  