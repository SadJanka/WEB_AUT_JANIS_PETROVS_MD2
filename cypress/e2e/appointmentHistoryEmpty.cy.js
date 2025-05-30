describe('Scenario 2 - Appointment History Empty', () => {
  it('should show no appointment message when history is empty', () => {
    cy.visit('https://katalon-demo-cura.herokuapp.com/')

    cy.contains('Make Appointment').click()

    // Login
    cy.get('#txt-username').type('John Doe')       // your demo user
    cy.get('#txt-password').type('ThisIsNotAPassword')
    cy.get('#btn-login').click()

    // Open menu/sidebar
    cy.get('#menu-toggle').click()                  // or whatever the burger/menu button id is

    // Click History
    cy.contains('History').click()

    // Validate no appointment message
    cy.contains('No appointment').should('be.visible')
  })
})
