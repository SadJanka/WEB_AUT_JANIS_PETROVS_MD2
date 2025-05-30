class ConfirmationPage {
  verifyDetails({ facility, readmission, program, date, comment }) {
    cy.contains('Facility')
      .parent()
      .siblings('.col-xs-8')
      .should('contain', facility)

    cy.contains('Apply for hospital readmission')
      .parent()
      .siblings('.col-xs-8')
      .should('contain', readmission)

    cy.contains('Healthcare Program')
      .parent()
      .siblings('.col-xs-8')
      .should('contain', program)

    cy.contains('Visit Date')
      .parent()
      .siblings('.col-xs-8')
      .should('contain', date)

    cy.contains('Comment')
      .parent()
      .siblings('.col-xs-8')
      .should('contain', comment)
  }
}

export default ConfirmationPage
