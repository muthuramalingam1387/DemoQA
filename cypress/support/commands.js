// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// import DatePickerPage from '../e2e/pages/date_picker_page';

// var datePickerPage = new DatePickerPage()


// Cypress.Commands.add('selectYear', (yearName) => {

//     const currentYear = new Date().getFullYear()

//     datePickerPage.getYearName().then(($year) => {

//         if($year.text()==yearName){
//         cy.log(yearName + 'Year is selected')
//         return
//         }
//         else{

//             if(yearName < currentYear){
//                 datePickerPage.getNavigateBack().click()
//             }
//             else if(yearName > currentYear){
//                 datePickerPage.getNavigateForward().click()
//             }

//         }

//         cy.selectYear(yearName)

//     })

// })

