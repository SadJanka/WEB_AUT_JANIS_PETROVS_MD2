// cypress/support/pageObjects/LoginPage.js

class LoginPage {
  login(username, password) {
    cy.get('#txt-username').type(username);
    cy.get('#txt-password').type(password);
    cy.get('#btn-login').click();
  }
}

export default LoginPage;
