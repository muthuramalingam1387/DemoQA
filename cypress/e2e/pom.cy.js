import {HomePage} from "./pages/home_page"
import { RegistrationPage } from "./pages/registration_page"
import {Elements} from "./pages/elements_category"
import { Common } from "./common"
import { FormsPage } from "./pages/forms_page"
import { WidgetsPage } from "./pages/widgets_page"
import { Interactions } from "./pages/interactions_page"




const homepage = new HomePage()
const elements = new Elements()
const registrationpage = new RegistrationPage()
const commonfun = new Common()
const formspage = new FormsPage()
const widgetspage = new WidgetsPage()
const interactionspage = new Interactions()


before(function() {

    commonfun.homePage()

})
describe('DemoQA', function(){



    it('Verify user can enter new data into the table', function() {

        
        homepage.clickElements()
        elements.clickWebTables()
        elements.clickAddButton()

        registrationpage.enterFirstName(registrationpage.firstname)
        registrationpage.enterLastName(registrationpage.lastname)
        registrationpage.enterEmail(registrationpage.email)
        registrationpage.enterAge(registrationpage.age)
        registrationpage.enterSalary(registrationpage.salary)
        registrationpage.enterDepartment(registrationpage.department)
        registrationpage.clickSubmit()
        commonfun.assetionTableNew()

    })

    it('Verify user can edit the row in a table', function(){
        
        registrationpage.editRow2()

        registrationpage.clearFirstName()
        registrationpage.updateFirstName(registrationpage.updateFName)
        registrationpage.clearLastName()
        registrationpage.updateLastName(registrationpage.updateLName)
        registrationpage.clickSubmit()
        commonfun.assetionTableUpdate()


    })


    it('Verify broken image', function(){

        commonfun.homePage()
        homepage.clickElements()
        elements.clickBrokenImage()
        elements.checkBrokenImage()


    })


    it('Verify user can submit the form', function(){

        commonfun.homePage()
        homepage.clickForms()
        formspage.clickpracticeform()
        registrationpage.updateFirstName(registrationpage.updateFName)
        registrationpage.updateLastName(registrationpage.updateLName)
        registrationpage.enterEmail(registrationpage.email)
        formspage.clickGenderMale()
        formspage.enterMobileNumber(formspage.mobilenumber)
        formspage.openDatePicker()
        formspage.selectDate()
        formspage.enterSubject(formspage.subjects)
        formspage.selectHobbies()
        formspage.uploadPicture()
        formspage.enterCurrentAddress(formspage.currentAddress)
        formspage.selectState()
        formspage.clickSubmit()
        formspage.clickClose()
        
    })


    it('Verify the progress bar', function(){

        commonfun.homePage()
        homepage.clickWidgets()
        widgetspage.clickProgressBar()
        widgetspage.clickStartBtn()
        widgetspage.verifyProgressBar()

    })

    it('Verify the tooltip', function(){
        
        commonfun.homePage()
        homepage.clickWidgets()
        widgetspage.clickToolTips()
        widgetspage.hoverButton()
    
    
    })

    it('Verify user can drag and drop', function(){
        
        commonfun.homePage()
        homepage.clickInteractions()
        interactionspage.clickDroppable()
        interactionspage.performDragDrop()


    })
        



// ###################################
        // cy
        // .get('.modal-body').find('#firstName')
        // .invoke('text')
        // .then((text) => {
        //     cy.log(text)
          
        //   if (text.includes('Alden')) {
            // cy.get('.btn.btn-xs.btn-edit').click()
            // cy.log(text)
        //   }




        // .then((fn) => {
        //         // console.log('name is:', $form)
        //         cy.log(fn)
        //         var name = fn.text()
        //             cy.log(name)

        // cy
        // .get('#firstName-wrapper')
        // .invoke('attr', 'value')
        // .should('equal', 'Alden')

        // cy.get('#firstName')
        // .invoke('show')
        // .then((fn) => {
        //     // console.log('name is:', $form)
        //     cy.log(fn)
        //     var name = fn.text()
        //     cy.log(name)

        // })
        // .find('#firstName')
        // .contains("Alden")
        // .find('[value="Alden"]')
        // .contains(registrationpage.firstname)
        // .should('be.visible')
        // .then((fn) => {

        //     cy
        //     .expect(fn).to.equal(registrationpage.firstname)

        // })
        
        

        // cy


// ######################################

        


})