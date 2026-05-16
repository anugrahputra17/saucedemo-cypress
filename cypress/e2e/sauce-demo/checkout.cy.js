describe('checkout produk', () => {
    beforeEach(() =>{
        cy.loginUntilCart()
    })

    context('verify UI - Checkout Page', () => {
    it('display halaman produk tampil', () => {
        cy.get('[data-test="title"]').should('have.text','Checkout: Your Information')
        cy.get('[data-test="cancel"]').should('be.visible')
        cy.get('[data-test="continue"]').should('be.visible')
        cy.get('.checkout_info').should('be.visible')

    })

    it('failed checkout - empty all field', () => {
        cy.get('[data-test="firstName"]').clear()
        cy.get('[data-test="lastName"]').clear()
        cy.get('[data-test="postalCode"]').clear()
    })

    it('failed checkout - empty username', () => {
        cy.get('[data-test="firstName"]').clear()
        cy.get('[data-test="lastName"]').type('putra')
        cy.get('[data-test="postalCode"]').type('171717')
    })

    it('failed checkout - empty last name', () => {
        cy.get('[data-test="firstName"]').type('putra')
        cy.get('[data-test="lastName"]').clear()
        cy.get('[data-test="postalCode"]').type('171717')
    })

    it('failed checkout - empty zip code', () => {
        cy.get('[data-test="firstName"]').type('putra')
        cy.get('[data-test="lastName"]').type('anugrah')
        cy.get('[data-test="postalCode"]').clear()
    })

    it('failed checkout - zip code less than 5 digit', () => {
        cy.get('[data-test="firstName"]').type('putra')
        cy.get('[data-test="lastName"]').type('anugrah')
        cy.get('[data-test="postalCode"]').type('123')
    })

    it('failed checkout - zip code more than 5 digit', () => {
        cy.get('[data-test="firstName"]').type('putra')
        cy.get('[data-test="lastName"]').type('anugrah')
        cy.get('[data-test="postalCode"]').type('123456')
    })
    it('berhasil checkout', () => {
        cy.get('[data-test="firstName"]').type('anugrah')
        cy.get('[data-test="lastName"]').type('putra')
        cy.get('[data-test="postalCode"]').type('171717')
        cy.get('[data-test="continue"]').click()
        cy.url().should('include','/checkout-step-two.html')
        cy.get('[data-test="title"]').should('have.text','Checkout: Overview')
    })
    })
    
    context('halaman review order', () => {
    it('halaman review order berhasil tampil payment, shipping, price total and product detail', () => {
        cy.get('[data-test="firstName"]').type('anugrah')
        cy.get('[data-test="lastName"]').type('putra')
        cy.get('[data-test="postalCode"]').type('171717')
        cy.get('[data-test="continue"]').click()
        cy.url().should('include','/checkout-step-two.html')
        cy.get('[data-test="title"]').should('have.text','Checkout: Overview')
        cy.get('[data-test="inventory-item"]').should('be.visible')
        cy.get('[data-test="payment-info-label"]').should('have.text','Payment Information:')
        cy.get('[data-test="payment-info-value"]').should('be.visible')
        cy.get('[data-test="shipping-info-label"]').should('have.text','Shipping Information:')
        cy.get('[data-test="shipping-info-value"]').should('be.visible')
        cy.get('[data-test="total-info-label"]').should('have.text','Price Total')
        cy.get('[data-test="subtotal-label"]').should('be.visible')
        cy.get('[data-test="tax-label"]').should('be.visible')
        cy.get('[data-test="cancel"]').should('be.visible')
        cy.get('[data-test="finish"]').should('be.visible')
    })

    it.only('cancel review order', () => {
        cy.get('[data-test="firstName"]').type('anugrah')
        cy.get('[data-test="lastName"]').type('putra')
        cy.get('[data-test="postalCode"]').type('171717')
        cy.get('[data-test="continue"]').click()
        cy.url().should('include','/checkout-step-two.html')
        cy.get('[data-test="title"]').should('have.text','Checkout: Overview')
        cy.get('[data-test="cancel"]').click()
        cy.url().should('include','/inventory.html')
        cy.get('[data-test="title"]').should('have.text','Products')
    })
    it.only('finish order', () => {
        cy.get('[data-test="firstName"]').type('anugrah')
        cy.get('[data-test="lastName"]').type('putra')
        cy.get('[data-test="postalCode"]').type('171717')
        cy.get('[data-test="continue"]').click()
        cy.url().should('include','/checkout-step-two.html')
        cy.get('[data-test="title"]').should('have.text','Checkout: Overview')
        cy.get('[data-test="finish"]').click()
        cy.url().should('include','/checkout-complete.html')
        cy.get('[data-test="complete-header"]').should('have.text','Thank you for your order!')
    })

    it.only('back to home', () => {
        cy.get('[data-test="firstName"]').type('anugrah')
        cy.get('[data-test="lastName"]').type('putra')
        cy.get('[data-test="postalCode"]').type('171717')
        cy.get('[data-test="continue"]').click()
        cy.url().should('include','/checkout-step-two.html')
        cy.get('[data-test="title"]').should('have.text','Checkout: Overview')
        cy.get('[data-test="finish"]').click()
        cy.url().should('include','/checkout-complete.html')
        cy.get('[data-test="complete-header"]').should('have.text','Thank you for your order!')
        cy.get('[data-test="back-to-products"]').click()
        cy.url().should('include','/inventory.html')
    })

    })
})