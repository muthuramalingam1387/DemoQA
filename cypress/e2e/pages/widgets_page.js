export class WidgetsPage{


    clickProgressBar(){
        cy.get('.btn.btn-light ')
        .contains('Progress Bar')
        .click()
    }

    clickStartBtn(){
        cy.get('#startStopButton')
        .click()
    }

    verifyProgressBar(){
        cy.get('.progress-bar.bg-success')
        .contains('100%').should('be.visible')
        
        cy.get('.progress-bar.bg-success')
        .should('have.css', 'background-color', 'rgb(40, 167, 69)')

    }

    clickToolTips(){
        cy.get('.btn.btn-light ')
        .contains('Tool Tips')
        .click()
    }

    hoverButton(){
        cy
        .get('#toolTipButton')
        .trigger('mouseover').invoke('show').click()
        // .find('[aria-describedby="buttonToolTip"]')
        // .contains('You hovered over the Button').should('not.be.disabled')
        // .find('[aria-describedby="buttonToolTip"]')
        .contains('Hover me to see').should('not.be.disabled')
        // .should('have.value', 'You hovered over the Button')

    }
}