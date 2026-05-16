describe('login', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('should display error message with empty username', () => {
        cy.get('#user-name').clear()
        cy.get('#password').type('invalid_password')
        cy.get('#login-button').click()
        cy.get('[data-test="error"]').should('be.visible')
    })

    it('should display error message with empty password', () => {
        cy.get('#user-name').type('standard_user')
        cy.get('#password').clear()
        cy.get('#login-button').click()
        cy.get('[data-test="error"]').should('be.visible')
    })

    it('should display error message with empty username andpassword', () => {
        cy.get('#user-name').clear()
        cy.get('#password').clear()
        cy.get('#login-button').click()
        cy.get('[data-test="error"]').should('be.visible')
    })

    it('should display error message with wrong username', () => {
        cy.get('#user-name').type('invalid_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('[data-test="error"]').should('be.visible')
    })

    it('should display error message with wrong password', () => {
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('invalid_password')
        cy.get('#login-button').click()
        cy.get('[data-test="error"]').should('be.visible')
    })

    it('should login successfully with valid credentials', () => {
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.url().should('include', '/inventory.html')
    cy.get('[data-test="title"]').should('have.text', 'Products')
})
})

