class LoginPage {
    elements = {
        usernameInput: () => cy.get('#user-name'),
        passwordInput: () => cy.get('#password'),
        loginButton: () => cy.get('#login-button'),
        errorMessage: () => cy.get('[data-test="error"]')
    }

    inputUsername(username) {
        if(username){
            this.elements.usernameInput().clear().type(username)
        }
    }
    inputPassword(password) {
        if(password){
            this.elements.passwordInput().clear().type(password)
        }
    }
    clickLoginButton() {
        this.elements.loginButton().click()
    }

    login(username, password) {
        this.inputUsername(username)
        this.inputPassword(password)
        this.clickLoginButton()
    }

    verifyloginerror() {
        this.elements.errorMessage().should('be.visible')
    }
}

export default new LoginPage()