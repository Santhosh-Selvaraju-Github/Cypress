describe('testSuite 3', function(){
    it('testCase 1', function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //alert
        cy.get('#alertbtn').click()
        cy.on('window:alert',(str)=>
        {
          expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        //confirm
        cy.get('#confirmbtn').click()
        cy.on('window:confirm',(str)=>
        {
          expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })

        //url(new window)
        cy.get('#opentab').invoke('removeAttr','target').click()
        cy.url().should('include','www.rahulshettyacademy.com')
        cy.go('back')

        //mouse hover
        cy.get('.mouse-hover-content').invoke('show').contains('Top').click({force:true})
        cy.url().should('include','top')






 
})
    })