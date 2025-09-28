
class ProgressBarPage {
  visit() {
    cy.visit('/progress-bar'); // ajuste se a rota for diferente
  }

  start() {
    cy.get('#startStopButton').click();
  }

  stop() {
    cy.get('#startStopButton').click();
  }

  reset() {
    cy.get('#resetButton').click();
  }

getProgressValue() {
  return cy.get('.progress-bar')
    .invoke('attr', 'style')
    .then(style => {
      const match = style.match(/width:\s*(\d+)%/);
      return match ? match[1] : '0';
    });
}

}

export default new ProgressBarPage();
