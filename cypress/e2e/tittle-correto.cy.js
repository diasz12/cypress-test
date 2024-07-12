describe('Página de login', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
    })

    it('Deve conter o title AdoPet no html', () => {
        cy.title().should('eq', 'AdoPet');
    })
})