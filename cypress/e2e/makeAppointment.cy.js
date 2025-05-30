import LoginPage from '../support/pageObjects/LoginPage'
import AppointmentPage from '../support/pageObjects/AppointmentPage'
import ConfirmationPage from '../support/pageObjects/ConfirmationPage'

describe('Scenario 1 - Make an Appointment', () => {
  const loginPage = new LoginPage()
  const appointmentPage = new AppointmentPage()
  const confirmationPage = new ConfirmationPage()

  it('should book an appointment successfully', () => {
    loginPage.visit()
    loginPage.clickMakeAppointment()
    loginPage.enterUsername('John Doe')
    loginPage.enterPassword('ThisIsNotAPassword')
    loginPage.clickLogin()

    appointmentPage.selectFacility('Seoul CURA Healthcare Center')
    appointmentPage.checkReadmission()
    appointmentPage.selectHealthcareProgram('Medicaid')
    appointmentPage.setVisitDate('30')
    appointmentPage.enterComment('CURA Healthcare Service')
    appointmentPage.bookAppointment()

    confirmationPage.verifyDetails({
      facility: 'Seoul CURA Healthcare Center',
      readmission: 'Yes',
      program: 'Medicaid',
      date: '30/05/2025',
      comment: 'CURA Healthcare Service'
    })
  })
})
