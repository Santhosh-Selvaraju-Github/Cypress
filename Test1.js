/// <reference types="Cypress" />

describe('testSuite 1', function(){
    it('testCase 1', function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.product:visible').should('have.length',4)
        cy.get('.brand').should('have.text','GREENKART')
        cy.get('.products').find('.product').eq(2).contains('+').click()
        cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click()
    })
})