describe('Página de login', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        
    })

    it('Verifica mesensagem de texto', () => {
       
        cy.get('.header__message').click();
        cy.get('[data-test="input-loginEmail"]').type('testeguilherme@email.com');
      cy.get('[data-test="input-loginPassword"]').type('Gui123@');
      cy.get('[data-test="submit-button"]').click();
    })
})