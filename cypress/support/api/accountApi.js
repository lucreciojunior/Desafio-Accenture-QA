import { faker } from '@faker-js/faker';

class AccountApi {
  createUser() {
    const userName = `${faker.internet.username()}_${Date.now()}`;
    const password = `Senha@${faker.number.int({ min: 1000, max: 9999 })}`;
    return cy.api({
      method: 'POST',
      url: '/Account/v1/User',
      body: { userName, password }
    }).then((res) => {
      expect(res.status).to.eq(201);
      return { userName, password, userID: res.body.userID };
    });
  }

  generateToken(userName, password) {
    return cy.api({
      method: 'POST',
      url: '/Account/v1/GenerateToken',
      body: { userName, password }
    }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.token).to.exist;
      return res.body.token;
    });
  }

  checkAuthorized(userName, password) {
    return cy.api({
      method: 'POST',
      url: '/Account/v1/Authorized',
      body: { userName, password }
    }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body).to.be.true;
    });
  }

  getUserDetails(userID, token) {
    return cy.api({
      method: 'GET',
      url: `/Account/v1/User/${userID}`,
      headers: { Authorization: `Bearer ${token}` }
    }).then((res) => {
      expect(res.status).to.eq(200);
      return res.body;
    });
  }
}

export default new AccountApi();
