// cypress/support/pageObjects/HistoryPage.js

class HistoryPage {
  verifyNoAppointmentsMessage() {
    cy.contains('No appointment').should('be.visible');
  }
}

export default HistoryPage;
