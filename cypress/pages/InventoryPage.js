class InventoryPage {
    elements = {
        title: () => cy.get('[data-test="title"]'),
        productItems: () => cy.get('[data-test="inventory-item"]'),
        addToCartButton: (productName) => cy.contains('[data-test="inventory-item"]', productName).find('button'),
        removeButton: (productName) => cy.get('[data-test="remove-sauce-labs-backpack"]'),
        shoppingCartBadge: () => cy.get('[data-test="shopping-cart-link"]'),
        productImage: (productName) => cy.contains('[data-test="inventory-item"]', productName).find('img'),
        productName: (productName) => cy.get('[data-test="inventory-item-name"]'),
        productDescription: (productName) => cy.get('[data-test="inventory-item-desc"]'),
        productPrice: (productName) => cy.get('[data-test="inventory-item-price"]'),
        productSortContainer: () => cy.get('[data-test="product-sort-container"]')
    }

    addToCartButton(productName) {
        this.elements.addToCartButton(productName).click()
    }

    clickShoppingCart() {
        this.elements.shoppingCartBadge().click()
    }
}

export default new InventoryPage()