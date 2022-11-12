export class Interactions{


    clickDroppable(){
        cy.get('.btn.btn-light ')
        .contains('Droppable')
        .click()
    }

    performDragDrop(){

        cy.get('#draggable')
        .trigger('pointerdown', { button: -2 })
        .trigger('dragstart');
        
        cy.get('#droppable')
        .trigger('dragover')
        .trigger('drop');

        // cy.get("#draggable").contains('Drag me')
        // .trigger("mousedown", { button: 0 }, { force: true })
        // .trigger("mousemove", 200, -200, { force: true })
        
        // cy.get("#droppable").contains('Drop here').click()
        // .trigger("mouseup", { force: true });
        

        // cy.dragAndDrop('#draggable', '#droppable', 0, 0);

        // const dataTransfer = new DataTransfer;

        // cy.get('#draggable').contains('Drag me')
        // .trigger('dragstart', {
        //     dataTransfer
        //   });
       
        //   cy.get('#droppable').contains('Drop here')
        //   .trigger('drop', {
        //     dataTransfer
        //   });

        // cy.get('#draggable').contains('Drag me')
        // // .first()
        // // .focus()
        // .trigger('dragstart', { dataTransfer });

        // cy.get('#droppable').contains('Drop here')
        // .trigger('drop', { dataTransfer });

        // cy.get('#draggable').contains('Drag me')
        // // .first()
        // .trigger('dragend');


        // const dataTransfer = new DataTransfer();
 
        // cy.get('#draggable').contains('Drag me').trigger('dragstart', {
        // dataTransfer
        // });
    
        // cy.get('#droppable').contains('Drop here').trigger('drop', {
        // dataTransfer
        // });
    
        // cy.get('#menu-ice-cream').drag('#plate-items');

    }
        
}