describe('testSuite 3', function(){

    //before
    before(function(){
        //runs once before all test in the block
        cy.fixture('example').then(function(data){
            this.data=data/*'this' make global variable*/
        })
    })

    it('testCase 1', function(){
        cy.visit("https://rahulshettyacademy.com/angularpractice/")

        //verifing
        cy.get(':nth-child(1) > .form-control').type(this.data.name).should('have.attr','minlength',2)
        cy.get('#exampleFormControlSelect1').select(this.data.gender)
        cy.get(':nth-child(4) > .ng-untouched').should('have.value',this.data.name)
        cy.get('#inlineRadio3').should('be.disabled')

        cy.get(':nth-child(2) > .nav-link').click()

        /*this step is moved to commands part*/
        // cy.get('h4.card-title').each((el,index,list) => {
        //     if (el.text().includes('Nokia Edge')){
        //         cy.get('button.btn.btn-info').eq(index).click()
        //     }
        // })

        /*instead of using so many names, we can use in fixures and this.data method used*/
        //cy.selectProduct('iphone X')
        //cy.selectProduct('Blackberry')
        //cy.selectProduct('Nokia Edge')

        this.data.productName.forEach(productName => {
            cy.selectProduct(productName)            
        })

        cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click()
        let sum = 0
        cy.get('tr td:nth-child(4) strong').each((el,index,list) => {
            cy.log(el.text())
            const amount = el.text().split(" ")
            cy.log(amount)
            const total = amount[1].trim()
            cy.log(total)
            sum=Number(sum)+Number(total)
            cy.log(sum)
        })
        cy.get('h3 > strong').then((element) =>{
            let amount= element.text().split(" ")
            const total = amount[1].trim()
            cy.log(total)
            expect(Number(total)).to.equal(sum)


    })


       

        

        






 
})
    })