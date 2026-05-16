describe('cart produk list', () => {
    beforeEach(() => {
        cy.loginAsStandard()
    })

    it('display cart produk tampil gambar, nama, deskripsi, dan harga', () => {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.get('[data-test="inventory-item-name"]').should('have.text', 'Sauce Labs Backpack')
        cy.get('[data-test="inventory-item-desc"]').should('have.text', 'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.')
        cy.get('[data-test="inventory-item-price"]').should('have.text', '$29.99')
        cy.get('[data-test="item-quantity"]').should('have.text', '1').and('be.visible')
        cy.get('[data-test="checkout"]').should('be.visible')
        cy.get('[data-test="continue-shopping"]').should('be.visible')
        cy.get('[data-test="shopping-cart-link"]').should('have.text', '1').and('be.visible')
        cy.get('[data-test="remove-sauce-labs-backpack"]').should('be.visible')
    })

    it('remove produk dari cart', () => {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.get('[data-test="remove-sauce-labs-backpack"]').should('be.visible')
        cy.get('[data-test="remove-sauce-labs-backpack"]').click()
        cy.get('[data-test="shopping-cart-link"]').should('not.have.value', '1')
        cy.get('[data-test="inventory-item"]').should('not.exist')
    })

    it('continue shopping dari cart', () => {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.get('[data-test="continue-shopping"]').should('be.visible')
        cy.get('[data-test="continue-shopping"]').click()
        cy.url().should('include', '/inventory.html')
        cy.get('[data-test="title"]').should('have.text', 'Products')
        cy.get('[data-test="shopping-cart-link"]').should('have.text', '1').and('be.visible')
        cy.get('[data-test="remove-sauce-labs-backpack"]').should('be.visible')
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        cy.get('[data-test="shopping-cart-link"]').should('have.text', '2').and('be.visible')
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.url().should('include','/cart.html')
        cy.get('.cart_item').should('have.length', 2)
    })

    it('checkout produk dari cart', () => {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.get('[data-test="checkout"]').should('be.visible')
        cy.get('[data-test="checkout"]').click()
        cy.url().should('include', '/checkout-step-one.html')
        cy.get('[data-test="title"]').should('have.text', 'Checkout: Your Information')
    })
})