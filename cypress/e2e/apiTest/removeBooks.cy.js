/// <reference types = "Cypress" />

describe('DELETE a added book', () => {

    let accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6Im11dGh1IiwicGFzc3dvcmQiOiJNdXRodUAxMjIzIiwiaWF0IjoxNjY4MjU0NjIyfQ.5gvV639URA4qaZJzDaTARHfO6oCYdDmWGL_N97bQ9tk'
    
        it('Remove one of the added books', () => {
            cy.request({
                method: 'DELETE',
                url : 'https://demoqa.com/swagger/#/BookStore/BookStoreV1BookDelete',
                headers: {
                    'Autorization': accessToken
                },
    
                body: {
                    
                    "isbn": "9781449325862",
                    "userId": "bf386848-1623-48ad-9058-5276472ffa74"
    
                }
    
            }).then((res) => {
    
                cy.log(JSON.stringify(res))
                expect(res.status).to.be.eq(204)
                
            })
        })


        it('Unhappy flow:Remove one of the added books', () => {
            cy.request({
                method: 'DELETE',
                url : 'https://demoqa.com/swagger/#/BookStore/BookStoreV1BookDelete',
                headers: {
                    'Autorization': accessToken
                },
    
                body: {
                    
                    "isbn": "9781449325862",
                    "userId": "bf386848-1623-48ad-9058-5276472ffa74"
    
                }
    
            }).then((res) => {
    
                cy.log(JSON.stringify(res))
                expect(res.body.userId).to.be.eq(bf386848)
                expect(res.status).to.be.eq(204)
                
            })
        })

    })