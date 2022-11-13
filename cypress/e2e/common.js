import { RegistrationPage } from "./pages/registration_page"
const registrationpage = new RegistrationPage() 


export class Common{

    assetionTableNew(){

        cy.get('.ReactTable').contains(registrationpage.firstname).should('be.visible')
        cy.get('.ReactTable').contains(registrationpage.lastname).should('be.visible')
        cy.get('.ReactTable').contains(registrationpage.email).should('be.visible')
        cy.get('.ReactTable').contains(registrationpage.age).should('be.visible')
        cy.get('.ReactTable').contains(registrationpage.salary).should('be.visible')
        cy.get('.ReactTable').contains(registrationpage.department).should('be.visible')

    }

    assetionTableUpdate(){

        cy.get('.ReactTable').contains(registrationpage.updateFName).should('be.visible')
        cy.get('.ReactTable').contains(registrationpage.updateLName).should('be.visible')

    }

    homePage(){
        cy.visit('https://demoqa.com/')
    }



}