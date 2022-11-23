describe('testSuite 2', function(){
    it('testCase 2', function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        //Parent child chaining
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').should('have.length',4)

        cy.get('@productLocator').find('.product').each(($el, index, $list) => {
          const textVeg=$el.find('h4.product-name').text()
            if(textVeg.includes('Carrot')){
               cy.wrap($el).find('button').click()
            }
        })
        
        cy.get('.tada').click()
        cy.get('.cart-preview > .action-block > button').click()
        cy.contains('Place Order').click()

 
})
    })