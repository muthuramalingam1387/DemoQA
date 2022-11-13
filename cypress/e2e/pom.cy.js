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


beforeEach(function() {

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


        registrationpage.editRow2()
        registrationpage.clearFirstName()
        registrationpage.updateFirstName(registrationpage.updateFName)
        registrationpage.clearLastName()
        registrationpage.updateLastName(registrationpage.updateLName)
        registrationpage.clickSubmit()
        commonfun.assetionTableUpdate()
    

    })


    it('Verify broken image', function(){

        homepage.clickElements()
        elements.clickBrokenImage()
        elements.checkBrokenImage()


    })

    it('Verify user can submit the form', function(){

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

        homepage.clickWidgets()
        widgetspage.clickProgressBar()
        widgetspage.clickStartBtn()
        widgetspage.verifyProgressBar()

    })

    it('Verify the tooltip', function(){
        
        homepage.clickWidgets()
        widgetspage.clickToolTips()
        widgetspage.hoverButton()
    
    
    })

    it('Verify user can drag and drop', function(){
        
        homepage.clickInteractions()
        interactionspage.clickDroppable()
        interactionspage.performDragDrop()


    })   

})