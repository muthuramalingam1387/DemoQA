export class RegistrationPage{

    firstName_id = '#firstName'
    lastName_id = '#lastName'
    userEmail_id = '#userEmail'
    age_id = '#age'
    salary_id = '#salary'
    department_id = '#department'
    submit_id = '#submit'

    firstname = "Alden"
    lastname = "Cantrell"
    email = "test@test.com"
    age = 30
    salary = 12345
    department = "QA"

    updateFName = "Gerimedica"
    updateLName = "BV"


    clearFirstName(){
        cy
        .get(this.firstName_id).clear()
    }

    
    clearLastName(){
        cy
        .get(this.lastName_id).clear()
    }

    updateFirstName(updateFName){
        cy
        .get(this.firstName_id)
        .type(updateFName)
    }
    updateLastName(updateLName){
        cy
        .get(this.lastName_id)
        .type(updateLName)
    }

    enterFirstName(firstname){
        cy
        .get(this.firstName_id)
        .type(firstname)

    }

    enterLastName(lastname){

        cy
        .get(this.lastName_id)
        .type(lastname)

    }

    enterEmail(email){

        cy
        .get(this.userEmail_id)
        .type(email)

    }

    enterAge(age){

        cy
        .get(this.age_id)
        .type(age)

    }

    enterSalary(salary){

        cy
        .get(this.salary_id)
        .type(salary)

    }

    enterDepartment(department){

        cy
        .get(this.department_id)
        .type(department)

    }

    clickSubmit(){

        cy
        .get(this.submit_id)
        .click()

    }

    editRow2(){
        cy.get('.mr-2')
        .eq(1)
        .click()
    }


}