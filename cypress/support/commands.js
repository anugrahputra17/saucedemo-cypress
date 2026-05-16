// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import LoginPage from "../pages/LoginPage"
import InventoryPage from "../pages/InventoryPage"
import CartPage from "../pages/CartPage"

Cypress.Commands.add('loginAsStandard', () => {
  cy.visit('/')
  LoginPage.login(
    'standard_user',
    'secret_sauce'
  )
})

Cypress.Commands.add('loginUntilCart', () => {
  cy.visit('/')
  LoginPage.login(
    'standard_user',
    'secret_sauce'
  )
  InventoryPage.elements.addToCartButton('Sauce Labs Backpack').click()
  InventoryPage.elements.shoppingCartBadge().click()
  CartPage.elements.checkoutButton().should('be.visible')
  CartPage.elements.checkoutButton().click()
  cy.url().should('include', '/checkout-step-one.html')
})