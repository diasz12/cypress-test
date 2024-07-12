describe('Acessar elemento com Cypress', () => {
    it('acessar elementos"', () => {
      // Visite a página alvo
      cy.visit('https://adopet-frontend-cypress.vercel.app/');
      cy.contains('a', 'Ver pets disponíveis para adoção').click();
      cy.get('a[aria-label="Tela inicial"]').click();
      cy.contains('a', 'login').click();
      cy.get('a[aria-label="Tela inicial"]').click();
      cy.get('.header__message').click() 
    });
  });