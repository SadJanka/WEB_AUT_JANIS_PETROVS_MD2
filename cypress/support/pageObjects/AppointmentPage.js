class AppointmentPage {
  selectFacility(facility) {
  cy.get('#combo_facility').select(facility)
}


  checkReadmission() {
    cy.get('#chk_hospotal_readmission').check()
  }

  selectHealthcareProgram(program) {
    cy.get(`input[name="programs"][value="${program}"]`).check()
  }

  setVisitDate(day) {
  cy.get('#txt_visit_date').click()
  cy.get('#txt_visit_date').clear().type(`30/05/2025`).blur()
  // Click somewhere outside the date picker to close it
  cy.get('body').click(0, 0) 
  }


  enterComment(comment) {
  cy.get('#txt_comment').type(comment)
  }


  bookAppointment() {
    cy.get('#btn-book-appointment').click()
  }
}

export default AppointmentPage
