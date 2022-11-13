export class Interactions{

    clickDroppableBtn = '.btn.btn-light '
    droppableText = 'Droppable'
    draggable = '#draggable'
    dragMe = 'Drag me'
    droppable = '#droppable'
    dropHere = 'Drop here'

    clickDroppable(){
        cy.get(this.clickDroppableBtn)
        .contains(this.droppableText)
        .click()
    }

    performDragDrop(){

        cy.get(this.draggable).contains(this.dragMe)
        .trigger('dragstart', { dataTransfer: new DataTransfer });
        
        cy.get(this.droppable).contains(this.dropHere)
        .trigger('drop')
        .trigger('dragend');

    }
        
}