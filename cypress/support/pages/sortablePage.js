
class SortablePage {
  visit() {
    cy.visit('/');
    cy.contains('Interactions').click();
    cy.contains('Sortable').click();
  }

  getListItems() {
    return cy.get('#demo-tabpane-list .list-group-item');
  }

  asyncDrag(sourceIndex, targetIndex) {
    this.getListItems().eq(sourceIndex).realMouseDown();
    this.getListItems().eq(targetIndex).realMouseMove(10, 10).realMouseUp();
  }

  getListTexts() {
    return this.getListItems().then($els =>
      Cypress._.map($els, 'innerText')
    );
  }
}

export default new SortablePage();
