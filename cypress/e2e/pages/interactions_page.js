export class Interactions{


    clickDroppable(){
        cy.get('.btn.btn-light ')
        .contains('Droppable')
        .click()
    }

    performDragDrop(){


        cy.get('#draggable').contains('Drag me')
        // cy.get('.list .item').contains('#draggable')
        .trigger('dragstart', { dataTransfer: new DataTransfer });
        
        cy.get('#droppable').contains('Drop here')
        // cy.get('.list .item').eq('#droppable')
        .trigger('drop')
        .trigger('dragend');


    }
        
}