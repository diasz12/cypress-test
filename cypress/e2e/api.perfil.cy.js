describe( 'api adopet perfil', () => {
    const authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI3OWY1YTI0NC1mYjAxLTQ5ZjYtYTJiNi05ODQyYTEzZGQ1YzIiLCJhZG9wdGVyTmFtZSI6Ikd1aWxoZXJtZSBTYWxtb3JpYSBEaWFzIiwiaWF0IjoxNzIxMTY5MDUzLCJleHAiOjE3MjE0MjgyNTN9.YP1GnbHGJfpI6d8nvXGdHzr_HWBmcB2P9YAfCAwN17k'

    it('perfil api', () => {
        cy.request({
            method: 'GET' ,   
            url: 'https://adopet-api-i8qu.onrender.com/adotante/perfil/79f5a244-fb01-49f6-a2b6-9842a13dd5c2',
            headers:{ authorization }

        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('perfil')
            expect(res.body.perfil.nome).to.be.equal('Guilherme Salmoria Dias')
        })

    })

})
