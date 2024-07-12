describe('Acessar elemento com Cypress', () => {
    it('Deve clicar no link com a classe header__home e aria-label "Tela inicial"', () => {
      // Visite a página alvo
      cy.visit('https://adopet-frontend-cypress.vercel.app/');
      cy.contains('a', 'Ver pets disponíveis para adoção').click();
      cy.get('a[aria-label="Tela inicial"]').click();
    });
  });
  
  