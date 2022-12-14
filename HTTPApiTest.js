describe('HTTP request',function(){
    it('GET',function(){
        cy.request({
            'method':'GET',
            'url':'https://httpbin.org/get'
        }).then(function(response){
            expect(response.body).have.property('url')
        })
    })

    it('POST',function(){
        cy.request({
            'method':'POST',
            'url':'https://httpbin.org/post',
            'body': {
                'name':'Santhosh',
                'age':31
            }
        }).then(function(response){
            expect(response).have.property('body')
            expect(response.body).have.property('headers')
            expect(response.body.json.name).to.eq('Santhosh')
        })
    })

    it('PUT',function(){
        cy.request({
            'method':'PUT',
            'url':'https://httpbin.org/put',
            'body': {
                'name':'Santhosh',
                'age':31,
                'role':'QA Enggineer',
                'class':'first'
            }
        }).then(function(response){
            expect(response).have.property('body')
            expect(response.body).have.property('headers')
            expect(response.body.json.name).to.eq('Santhosh')
            expect(response.body.json.role).to.eq('QA Enggineer')
            expect(response.body.json.class).to.eq('first')
        })
    })

    it('DELETE',function(){
        cy.request({
            'method':'Delete',
            'url':'https://httpbin.org/delete',
            'body': {
                'class':'first'
            }
        }).then(function(response){
            expect(response).have.property('body')
        })
    })
})