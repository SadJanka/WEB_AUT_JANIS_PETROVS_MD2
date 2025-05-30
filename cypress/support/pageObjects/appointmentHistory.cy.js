// cypress/e2e/appointmentHistory.cy.js

import LoginPage from '../support/pageObjects/LoginPage'
import HistoryPage from '../support/pageObjects/HistoryPage'

const loginPage = new LoginPage()
const historyPage = new HistoryPage()

describe('Scenario 2 - Appointment History Empty', () => {
  it('should show no appointment message when history is empty', () => {
    cy.visit('https://katalon-demo-cura.herokuapp.com/');
    cy.contains('Make Appointment').click();

    loginPage.login('John Doe', 'ThisIsNotAPassword');

    cy.get('#menu-toggle').click();
    cy.contains('History').click();

    historyPage.verifyNoAppointmentsMessage();
  });
});
