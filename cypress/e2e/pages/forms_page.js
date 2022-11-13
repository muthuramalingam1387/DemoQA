import DatePickerPage from "./date_picker_page"


var datePickerPage = new DatePickerPage();

export class FormsPage{


    mobilenumber = "0123456789"
    dob = '15th January 1990'
    subjects = "Cypress Assignment"
    currentAddress = "Netherlands"
    practiceForm = '.btn.btn-light'
    genderSelect = '.custom-control-label'
    mobileNumer = '[placeholder="Mobile Number"]'
    subject = '.subjects-auto-complete__value-container'
    hobbies = '.custom-control.custom-checkbox.custom-control-inline'
    uploadPic = '#uploadPicture'
    imageFile = 'E:/Automation/Cypress/Project1/test-automation.jpg'
    currentAddrs = '#currentAddress'
    state = '.col-md-4.col-sm-12'
    city = '#react-select-4-option-0'
    submit = '#submit'
    closeBtn = '#closeLargeModal'



    clickpracticeform(){
        cy.get(this.practiceForm).contains('Practice Form')
        .should('be.visible')
        .click()
    }

    clickGenderMale(){
        cy.get(this.genderSelect)
        .eq(0)
        .click()
    }

    enterMobileNumber(mobilenumber){
        cy.get(this.mobileNumer)
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
        cy.get(this.subject)
        .type(subjects)
    }

    selectHobbies(){
        cy.get(this.hobbies).eq(1)
        .click()
    }

    uploadPicture(){

        cy.get(this.uploadPic)
        .selectFile(this.imageFile, { force: true })
    }

    enterCurrentAddress(currentAddress){
        cy.get(this.currentAddrs)
        .type(currentAddress)
    }

    
    selectState(){
        cy.get(this.state).eq(0)
        .click()

        
        cy.get(this.state).contains('NCR')
        .then(option => { 
      
            option[0].click(); 
        })

        cy.get(this.state).eq(1)
        .click()

        cy.get(this.city).click()
    
    }

    clickSubmit(){
        
        cy.focused(this.submit).tab()
        .click({force: true})
        

    }

    clickClose(){
        cy.get(this.closeBtn)
        .click()
    }

}