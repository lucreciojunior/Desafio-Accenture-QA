import accountApi from '../../support/api/accountApi';
import bookStoreApi from '../../support/api/bookStoreApi';

describe('Fluxo completo DemoQA BookStore', () => {
  before(() => {
    // Cria usuário e token antes de todos os cenários
    accountApi.createUser().then((user) => {
      Cypress.env('user', user);
      return accountApi.generateToken(user.userName, user.password);
    }).then((token) => {
      Cypress.env('token', token);
    });
  });

  it('Criar um usuário', () => {
    const user = Cypress.env('user');
    expect(user).to.have.property('userID');
    cy.log(`Usuário criado: ${user.userName}`);
  });

  it('Gerar um token de acesso', () => {
    const token = Cypress.env('token');
    expect(token).to.be.a('string').and.not.be.empty;
    cy.log(`Token gerado: ${token}`);
  });

  it('Confirmar se o usuário criado está autorizado', () => {
    const { userName, password } = Cypress.env('user');
    accountApi.checkAuthorized(userName, password);
  });

  it('Listar os livros disponíveis', () => {
    bookStoreApi.listBooks().then((books) => {
      expect(books).to.have.length.greaterThan(0);
      Cypress.env('books', books);
    });
  });

  it('Alugar dois livros de livre escolha', () => {
    const { userID } = Cypress.env('user');
    const token = Cypress.env('token');
    const books = Cypress.env('books');
    const selected = [books[0].isbn, books[1].isbn];
    bookStoreApi.rentBooks(userID, token, selected);
    Cypress.env('selectedBooks', selected);
  });

  it('Listar os detalhes do usuário com os livros escolhidos', () => {
    const { userID } = Cypress.env('user');
    const token = Cypress.env('token');
    const selected = Cypress.env('selectedBooks');

    accountApi.getUserDetails(userID, token).then((details) => {
      expect(details.books.map(b => b.isbn))
        .to.include.members(selected);
    });
  });
});
