describe('Página de login', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
    })

    it('Deve conter o Quem ama adota! no html', () => {
        cy.contains('Quem ama adota!').should('be.visible');

    })
})