///<reference types="cypress"/>
describe('empty spec', () => {

    it('Verify user can enter new data into the table', () => {
        cy.visit('https://demoqa.com/')
        cy
        .get('.avatar.mx-auto.white')
        .eq(0)
        .click()
        
        cy
        .get('.btn.btn-light')
        .eq(3)
        .click()
        
        cy
        .get('#addNewRecordButton')
        .click()


    })
})