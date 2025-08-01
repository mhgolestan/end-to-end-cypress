describe('Note app', () => {
    beforeEach(function ()  {
        cy.request('POST', 'http://localhost:3001/api/testing/reset')
        const user = {
            name: 'Mohammad',
            username: Cypress.env("USERNAME"),
            password: Cypress.env("PASSWORD"),
        }
        cy.request('POST', 'http://localhost:3001/api/users/', user)
        cy.visit('')
    })
    it('front page can be opened', () => {
        cy.contains('Notes')
        cy.contains('Note app, Department of Computer Science, University of Helsinki 2024')
    })
    it('login fails with wrong password', function() {
        cy.contains('log in').click()
        cy.get('[data-testid="username"]').type(Cypress.env("USERNAME"))
        cy.get('[data-testid="password"]').type('wrong')
        cy.get('form > button').click()

        cy.get(".error")
            .should('contain','wrong credentials')
            .and('have.css', 'color', 'rgb(255, 0, 0)')
            .and('have.css', 'border-style', 'solid')

        cy.get('html').should('not.contain', 'Mohammad logged in')
    })
    it('login form can be opened', function() {
        cy.contains('log in').click()
        cy.get('[data-testid="username"]').type(Cypress.env("USERNAME"))
        cy.get('[data-testid="password"]').type(Cypress.env("PASSWORD"))
        cy.get('form > button').click()
        cy.contains('Mohammad logged in')
    })
    describe('when logged in', function() {
        beforeEach(function() {
            cy.login({
                username: Cypress.env("USERNAME"), password: Cypress.env("PASSWORD")
            })
        })

        it('a new note can be created', function() {
            cy.contains('new note').click()
            cy.get('input').type('a note created by cypress')
            cy.contains('save').click()
            cy.contains('a note created by cypress')
        })

        describe('and a note exists', function () {
            beforeEach(function () {
                cy.createNote({
                    content: 'another note cypress',
                    important: true
                })
            })

            it('it can be made not important', function () {
                cy.contains('another note cypress')
                    .parent()
                    .find('button:contains("make not important")')
                    .click()

                    // .contains('make not important')
                    // .click()

                cy.contains('another note cypress')
                    .parent()
                    .find('button:contains("make important")')
                    // .contains('make important')
            })
        })
    })
})