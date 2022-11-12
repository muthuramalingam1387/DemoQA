class DatePickerPage{

    getDatePicker(){
        return cy.get('#dateOfBirthInput').click()
    }

    getCalander(){
        return cy.get('.react-datepicker')
    }

    getNavigateBack(){
        return cy.get('.react-datepicker__navigation.react-datepicker__navigation--previous')

    }

    getNavigateForward(){
        return cy.get('.react-datepicker__navigation.react-datepicker__navigation--next')

    }

    getMonthName(){
        return cy.get('.react-datepicker__month-select')

    }

    getYearName(){
        return cy.get('.react-datepicker__year-select')

    }
    
    getCalanderDays(){
        return cy.get('.react-datepicker__month')

    }
}

export default DatePickerPage