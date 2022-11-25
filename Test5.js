import "cypress-iframe"

describe('testSuite 3', function(){
    it('testCase 1', function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //handling frames
        cy.frameLoaded("#courses-iframe")
        cy.iframe().find("a[href='mentorship']").eq(0).click()

        






 
})
    })