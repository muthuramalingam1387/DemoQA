/// <reference types = "Cypress" />

describe('Creation of user account', () => {

let accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6Im11dGh1IiwicGFzc3dvcmQiOiJNdXRodUAxMjIzIiwiaWF0IjoxNjY4MjU0NjIyfQ.5gvV639URA4qaZJzDaTARHfO6oCYdDmWGL_N97bQ9tk'
let InvalidaccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
    it('create user test', () => {
        cy.request({
            method: 'POST',
            url : 'https://demoqa.com/swagger/#/Account/AccountV1UserPost',
            headers: {
                'Autorization': accessToken
            },

            body: {
                
                "userName": "muthuNew1",
                "password": "muthuNew@1223"

            }

        }).then((res) => {

            cy.log(JSON.stringify(res))
            expect(res.status).to.be.eq(201)
            
        })
    })


    it('Unhappy flow : create user test', () => {
        cy.request({
            method: 'POST',
            url : 'https://demoqa.com/swagger/#/Account/AccountV1UserPost',
            headers: {
                'Autorization': InvalidaccessToken
            },

            body: {
                
                "userName": "muthura",
                "password": "muth1223"

            }

        }).then((res) => {

            expect(res.status).to.be.eq(201)
            
        })
    })


})