class CartPage {
    elements = {
        title: () => cy.get('[data-test="title"]'),
        cartItems: () => cy.get('[data-test="cart-item"]'),
        removeFromCartButton: (productName) => cy.contains('[data-test="cart-item"]', productName).find('[data-test="remove-sauce-labs-backpack"]'),
        continueShoppingButton: () => cy.get('[data-test="continue-shopping"]'),
        checkoutButton: () => cy.get('[data-test="checkout"]')
    }

    removeFromCartButton(productName) {
        this.elements.removeFromCartButton(productName).click()
    }

    clickContinueShopping() {
        this.elements.continueShoppingButton().click()
    }

    clickCheckout() {
        this.elements.checkoutButton().click()
    }
}

export default new CartPage()
