describe('Api Adopet', () => {
    const authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI3OWY1YTI0NC1mYjAxLTQ5ZjYtYTJiNi05ODQyYTEzZGQ1YzIiLCJhZG9wdGVyTmFtZSI6Ikd1aWxoZXJtZSBTYWxtb3JpYSBEaWFzIiwiaWF0IjoxNzIwODI3NjI5LCJleHAiOjE3MjEwODY4Mjl9.e2Ba4UKKfkMgkae06XFRGbrS648MOQozL5Byp-wzORY'


    it('mensagens da api', () => {
        cy.request({
            method: 'GET' ,   
            url: 'https://adopet-api-i8qu.onrender.com/mensagem/79f5a244-fb01-49f6-a2b6-9842a13dd5c2',
            headers:{ authorization }

        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('msg')
        })

    })

})