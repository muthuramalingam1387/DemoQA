export class Elements{

    webTable = '.btn.btn-light'
    addButton = '#addNewRecordButton'
    clickbrokenImage = '.btn.btn-light'
    brokenImage = 'img[src="/images/Toolsqa_1.jpg"]'


    clickWebTables(){
        cy
        .get(this.webTable)
        .eq(3)
        .click()
    }

    clickAddButton(){
        cy
        .get(this.addButton)
        .click()
    }

    clickBrokenImage(){
        cy
        .get(this.clickbrokenImage)
        .eq(6)
        .click()
    }

    checkBrokenImage(){

        cy.get(this.brokenImage)
        .should('be.visible')
        .should(([img]) => {
            // expect(img.naturalWidth).to.be.greaterThan(0)
            expect(img.naturalWidth).to.be.eq(0)
            // expect(img.naturalHeight).to.be.greaterThan(0)

        });
    }

}