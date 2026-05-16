import LoginPage from "../../pages/LoginPage"

describe('login feature', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('should display error message with empty username', () => {
        LoginPage.login(
            '',
            'secret_sauce'
        )
    })

    it('should display error message with empty password', () => {
        LoginPage.login(
            'standard_user',
            ''
        )
    })

    it('should display error message with empty username and password', () => {
        LoginPage.login(
            '',
            ''
        )
    })

    it('should display error message with wrong username', () => {
        LoginPage.login(
            'invalid_user',
            'secret_sauce'
        )
    })

    it('should display error message with wrong password', () => {
        LoginPage.login(
            'standard_user',
            'invalid_password'
        )
    })

    it.only('should login successfully with valid credentials', () => {
        LoginPage.login(
            'standard_user',
            'secret_sauce'
        )
        cy.url().should('include', '/inventory.html')
        cy.get('[data-test="title"]').should('have.text', 'Products')
    })
})

