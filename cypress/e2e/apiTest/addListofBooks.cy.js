/// <reference types = "Cypress" />

describe('Add a list of books', () => {


let accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6Im11dGh1IiwicGFzc3dvcmQiOiJNdXRodUAxMjIzIiwiaWF0IjoxNjY4MjU0NjIyfQ.5gvV639URA4qaZJzDaTARHfO6oCYdDmWGL_N97bQ9tk'

    it('Happflow: Add a list of books', () => {
        cy.request({
            method: 'POST',
            url : 'https://demoqa.com/swagger/#/BookStore/BookStoreV1BooksPost',
            headers: {
                'Autorization': accessToken
            },

            body: {
                "isbn": "9781449325862",
                "title": "Git Pocket Guide",
                "subTitle": "A Working Introduction",
                "author": "Richard E. Silverman",
                "publish_date": "2020-06-04T08:48:39.000Z",
                "publisher": "O'Reilly Media",
                "pages": 234,
                "description": "This pocket guide is the perfect on-the-job companion to Git, the distributed version control system. It provides a compact, readable introduction to Git for new users, as well as a reference to common commands and procedures for those of you with Git exp",
                "website": "http://chimera.labs.oreilly.com/books/1230000000561/index.html"
              },

        }).then((res) => {

            cy.log(JSON.stringify(res))
            expect(res.body.title).to.be.eq("A Working Introduction")
            expect(res.body.author).to.be.eq("Richard E. Silverman")
            expect(res.body.pages).to.be.eq(234)
            expect(res.status).to.be.eq(201)
            
        })

        
    })


    it('UnhappyFlow:Add list of books', () => {
        cy.request({
            method: 'GET',
            url : 'https://demoqa.com/swagger/#/BookStore/BookStoreV1BooksPost',
            headers: {
                'Autorization': accessToken
            },

            body: {
                "isbn": "9781446625862",
                "title": "Git Pocket Guide",
                "subTitle": "A Working Introduction",
                "author": "Richard E. Silverman",
                "publish_date": "2020-06-04T08:48:39.000Z",
                "publisher": "O'Reilly Media",
                "pages": 234,
                "description": "This pocket guide is the perfect on-the-job companion to Git, the distributed version control system. It provides a compact, readable introduction to Git for new users, as well as a reference to common commands and procedures for those of you with Git exp",
                "website": "http://chimera.labs.oreilly.com/books/1230000000561/index.html"
              },

        }).then((res) => {

            cy.log(JSON.stringify(res))
            expect(res.body.title).to.be.eq("A Working Introduction")
            expect(res.body.pages).to.be.eq(234)
            expect(res.status).to.be.eq(201)
            
        })

        
    })


})