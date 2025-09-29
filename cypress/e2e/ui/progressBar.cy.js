import progressBar from '../../support/pages/progressBarPage';

it('Deve parar antes dos 25% e depois completar até 100%', () => {
  progressBar.visit();
  progressBar.start();

  cy.waitUntil(
    () => progressBar.getProgressValue().then(val => Number(val) >= 20),
    { timeout: 8000, interval: 200 }
  );

  progressBar.stop();
  progressBar.getProgressValue().then(val => {
    expect(Number(val)).to.be.at.most(25);
  });

  progressBar.start();
  cy.waitUntil(
    () => progressBar.getProgressValue().then(val => Number(val) === 100),
    { timeout: 15000, interval: 200 }
  );

  progressBar.getProgressValue().should('eq', '100');

});
