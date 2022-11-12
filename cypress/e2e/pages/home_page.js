export class HomePage{

    clickElements(){
        cy.get('.avatar.mx-auto.white').eq(0)
        .click()
    }

    clickForms(){
        cy.get('.avatar.mx-auto.white').eq(1)
        .click()
    }

    clickWidgets(){
        cy.get('.avatar.mx-auto.white').eq(3)
        .click()
    }

    clickInteractions(){
        cy.get('.avatar.mx-auto.white').eq(4)
        .click()
    }

}