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


    // selectYear(){

    //     cy.get('#dateOfBirthInput').click()

    //     cy.get('.react-datepicker__year-select')
    //     .should('be.visible')
    //     .get('.react-datepicker__year-select').select(1990)
    //         // .each(($el,index,$list)=>{
    //         //     var yearName = $el.text()
    //         //     if(yearName == '1990')
    //         //     {
    //         //         cy.wrap($el).click()
    //         //     }
    //         // })        

    // }

    // selectMonth(){

    //     cy.get('.react-datepicker__month-select')
    //     .should('be.visible')
    //     cy.find('.react-datepicker__month-select').select('January')
    //         // .each(($el,index,$list)=>{
    //         //     var monthName = $el.text()
    //         //     if(monthName == 'January')
    //         //     {
    //         //         cy.wrap($el).click()
    //         //     }
    //         // })

    // }

    // selectdate(){

    //     cy.get('.react-datepicker__week')
    //     .should('be.visible')
    //     .find('.react-datepicker__week')
    //     .eq(2).select(15)
    //         // .each(($el,index,$list)=>{
    //         //     var dateName = $el.text()
    //         //     if(dateName == '15')
    //         //     {
    //         //         cy.wrap($el).click()
    //         //     }
    //         // })   

    // }


}