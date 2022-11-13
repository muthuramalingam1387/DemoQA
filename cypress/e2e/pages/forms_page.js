import DatePickerPage from "./date_picker_page"


var datePickerPage = new DatePickerPage();

export class FormsPage{


    mobilenumber = "0123456789"
    dob = '15th January 1990'
    subjects = "Cypress Assignment"
    currentAddress = "Netherlands"

    practiceForm = '.btn.btn-light'

    clickpracticeform(){
        cy.get(this.practiceForm).contains('Practice Form')
        .should('be.visible')
        .click()
    }

    clickGenderMale(){
        cy.get('.custom-control-label')
        .eq(0)
        .click()
    }

    enterMobileNumber(mobilenumber){
        cy.get('[placeholder="Mobile Number"]')
        .type(mobilenumber)
    }
    

    openDatePicker(){

        datePickerPage.getDatePicker().click()
        datePickerPage.getCalander().should('be.visible');

    }

    selectDate(){

        cy.get('.react-datepicker__year-select').select('1900').should('have.value','1900')

        cy.get('.react-datepicker__month-select').select('January').should('have.value','0')

        cy.get('.react-datepicker__month').find('.react-datepicker__week').eq(2).click()
            .each(($el,index,$list)=>{
                var dayName = $el.text().split(' ')
                if(dayName=='15'){
                    cy.wrap($el).click()
                }       
        })

    }

    enterSubject(subjects){
        cy.get('.subjects-auto-complete__value-container')
        .type(subjects)
    }Netherlands

    selectHobbies(){
        cy.get('.custom-control.custom-checkbox.custom-control-inline').eq(1)
        .click()
    }

    uploadPicture(){

        cy.get('#uploadPicture')
        .selectFile('E:/Automation/Cypress/Project1/test-automation.jpg', { force: true })
    }

    enterCurrentAddress(currentAddress){
        cy.get('#currentAddress')
        .type(currentAddress)
    }

    
    selectState(){
        cy.get('.col-md-4.col-sm-12').eq(0)
        .click()

        
        cy.get('.col-md-4.col-sm-12').contains('NCR')
        .then(option => { 
      
            option[0].click(); 
        })

        cy.get('.col-md-4.col-sm-12').eq(1)
        .click()

        cy.get('#react-select-4-option-0').click()
    
    }

    clickSubmit(){
        
        cy.focused('#submit').tab()
        .click({force: true})
        

    }

    clickClose(){
        cy.get('#closeLargeModal')
        .click()
    }

}