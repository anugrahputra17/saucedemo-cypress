import InventoryPage from "../../pages/InventoryPage"

describe('Inventory / Product List', () => {
  beforeEach(() => {
    cy.loginAsStandard()
  })

    it('display tampil total produk', () => {
        InventoryPage.elements.title().should('have.text', 'Products')
        InventoryPage.elements.productItems().should('have.length', 6)
    })

    it('display produk tampil gambar, nama, deskripsi, dan harga', () => {
        InventoryPage.elements.productItems().first().within(() => {
            InventoryPage.elements.productImage('Sauce Labs Backpack').should('be.visible')
            InventoryPage.elements.productName('Sauce Labs Backpack').should('have.text', 'Sauce Labs Backpack')
            InventoryPage.elements.productDescription('Sauce Labs Backpack').should('have.text', 'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.')
            InventoryPage.elements.productPrice('Sauce Labs Backpack').should('have.text', '$29.99')
            InventoryPage.elements.addToCartButton('Sauce Labs Backpack').should('be.visible')
        })
    })

    it('sort produk berdasarkan nama A-Z', () => {
        InventoryPage.elements.productSortContainer().select('az')
        InventoryPage.elements.productName().first().should('have.text', 'Sauce Labs Backpack')
    })

    it('sort produk berdasarkan nama Z-A', () => {
        InventoryPage.elements.productSortContainer().select('za')
        InventoryPage.elements.productName().first().should('have.text', 'Test.allTheThings() T-Shirt (Red)')
    })

    it('sort produk berdasarkan harga low to high', () =>{
        InventoryPage.elements.productSortContainer().select('lohi')
        InventoryPage.elements.productPrice('Sauce Labs Backpack').first().should('have.text','$7.99')
    })

    it('sort produk berdasarkan harga high to low', () =>{
        InventoryPage.elements.productSortContainer().select('hilo')
        InventoryPage.elements.productPrice('Sauce Labs Backpack').first().should('have.text', '$49.99')
    })

    it('add produk ke cart', () => {
        InventoryPage.elements.addToCartButton('Sauce Labs Backpack').click()
        InventoryPage.elements.shoppingCartBadge().should('have.text', '1')
        InventoryPage.elements.removeButton('Sauce Labs Backpack').should('be.visible')
    })

    it('remove produk', () => {
        InventoryPage.elements.addToCartButton('Sauce Labs Backpack').click()
        InventoryPage.elements.shoppingCartBadge().should('have.text', '1')
        InventoryPage.elements.removeButton('Sauce Labs Backpack').should('be.visible')
        InventoryPage.elements.removeButton('Sauce Labs Backpack').click()
        InventoryPage.elements.shoppingCartBadge().should('not.have.value', '1')
        InventoryPage.elements.addToCartButton('Sauce Labs Backpack').should('be.visible')
    })
})


    