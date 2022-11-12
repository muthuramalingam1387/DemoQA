export class Elements{

    clickWebTables(){
        cy
        .get('.btn.btn-light')
        .eq(3)
        .click()
    }

    clickAddButton(){
        cy
        .get('#addNewRecordButton')
        .click()
    }

    clickBrokenImage(){
        cy
        .get('.btn.btn-light')
        .eq(6)
        .click()
    }

    checkBrokenImage(){
        
        cy.get('img[src="/images/Toolsqa_1.jpg"]')
        .should('be.visible')
        .should(([img]) => {
            expect(img.naturalWidth).to.be.greaterThan(0)
            expect(img.naturalHeight).to.be.greaterThan(0)

        });
    }

}