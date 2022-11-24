describe('testSuite 3', function(){
    it('testCase 1', function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //check-box
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        cy.get('[for="honda"]').should('have.text','\n                 Option3\n                ')
        cy.get('input[type=checkbox]').check(['option1','option3'])

        //static dropdown
        cy.get('#dropdown-class-example').select('Option1').should('have.value','option1')

        //dynamic dropdown
        cy.get('#autocomplete').type('ir')

        cy.get('.ui-menu-item').each(($el, index, $list) => {
          if($el.text()==='Iraq'){
            cy.wrap($el).click()
          }
        })
        cy.get('#autocomplete').should('have.value','Iraq')

        //visible or hidden
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click().should('have.value','Hide')
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click().should('have.value','Show')

        //radio
        cy.get('[for="radio3"] > .radioButton').click().should('have.value','radio3')/*or*/
        cy.get('[for="radio2"] > .radioButton').check().should('be.checked')




 
})
    })