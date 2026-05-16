describe('Inventory / Product List', () => {
  beforeEach(() => {
    cy.loginAsStandard()
  })

    it('display tampil total produk', () => {
        cy.get('[data-test="title"]').should('have.text', 'Products')
        cy.get('[data-test="inventory-item"]').should('have.length', 6)
    })

    it('display produk tampil gambar, nama, deskripsi, dan harga', () => {
        cy.get('[data-test="inventory-item"]').first().within(() => {
            cy.get('[data-test="inventory-item-sauce-labs-backpack-img"]').should('be.visible')
            cy.get('[data-test="inventory-item-name"]').should('have.text', 'Sauce Labs Backpack')
            cy.get('[data-test="inventory-item-desc"]').should('have.text', 'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.')
            cy.get('[data-test="inventory-item-price"]').should('have.text', '$29.99')
            cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').should('be.visible')
        })
    })

    it('sort produk berdasarkan nama A-Z', () => {
        cy.get('[data-test="product-sort-container"]').select('az')
        cy.get('[data-test="inventory-item-name"]').first().should('have.text', 'Sauce Labs Backpack')
    })

    it('sort produk berdasarkan nama Z-A', () => {
        cy.get('[data-test="product-sort-container"]').select('za')
        cy.get('[data-test="inventory-item-name"]').first().should('have.text', 'Test.allTheThings() T-Shirt (Red)')
    })

    it('sort produk berdasarkan harga low to high', () =>{
        cy.get('[data-test="product-sort-container"]').select('lohi')
        cy.get('[data-test="inventory-item-price"]').first().should('have.text','$7.99')
    })

    it('sort produk berdasarkan harga high to low', () =>{
        cy.get('[data-test="product-sort-container"]').select('hilo')
        cy.get('[data-test="inventory-item-price"]').first().should('have.text', '$49.99')
    })

    it('add produk ke cart', () => {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="shopping-cart-link"]').should('have.text', '1')
        cy.get('[data-test="remove-sauce-labs-backpack"]').should('be.visible')
    })

    it('remove produk dari cart', () => {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="remove-sauce-labs-backpack"]').should('be.visible')
        cy.get('[data-test="remove-sauce-labs-backpack"]').click()
        cy.get('[data-test="shopping-cart-link"]').should('not.have.value', '1')
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').should('be.visible')
    })
})


    