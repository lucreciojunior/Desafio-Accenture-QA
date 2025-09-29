import { faker } from '@faker-js/faker';

class PracticeFormPage {

  visit() {
    cy.visit('/');
    cy.contains('Forms').click();
    cy.contains('Practice Form').click();
  }

  fillForm() {
    const firstName = faker.person.firstName();
    const lastName  = faker.person.lastName();
    const email     = faker.internet.email();
    const phone     = faker.number.int({ min: 6000000000, max: 9999999999 }).toString();
    const address   = faker.location.streetAddress();

    cy.get('#firstName').type(firstName);
    cy.get('#lastName').type(lastName);
    cy.get('#userEmail').type(email);

    cy.get('label[for="gender-radio-1"]').click();

    cy.get('#userNumber').type(phone);

    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__year-select').select('1995');
    cy.get('.react-datepicker__month-select').select('March');
    cy.get('.react-datepicker__day--015').click();

    cy.get('.subjects-auto-complete__value-container').type('Maths{enter}');

    cy.get('label[for="hobbies-checkbox-1"]').click();

    cy.get('#uploadPicture').selectFile('cypress/fixtures/teste.txt');

    cy.get('#currentAddress').type(address);

    cy.get('#state').click();
    cy.get('.css-26l3qy-menu').contains('NCR').click();
    cy.get('#city').click();
    cy.get('.css-26l3qy-menu').contains('Delhi').click();
  }

  submit() {
    cy.get('#submit').click({ force: true });
  }

  validateModal() {
    cy.get('.modal-content').should('be.visible');
  }

  closeModal() {
    cy.get('#closeLargeModal').click({ force: true });
    cy.get('.modal-content').should('not.exist');
  }
}

export default new PracticeFormPage();
