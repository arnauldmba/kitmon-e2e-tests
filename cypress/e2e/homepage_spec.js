
describe('Kitmon Website Tests', () => {
    it('should navigate to the Preise page and then back to the homepage via the logo', () => {
      cy.visit('/');
  
      cy.get('nav.header-navbar__menu').within(() => {
        cy.get('a').contains('Preise').click({ force: true });
    });
  
      cy.url().should('eq', 'https://kitmon360.de/preise/');
  
      cy.get('a.custom-logo-link').click();
  
      cy.url().should('eq', 'https://kitmon360.de/');
    });
  
    it('should scroll to the footer and verify Impressum and Datenschutzerklärung links', () => {
      cy.visit('/');
  
      cy.scrollTo('bottom');
  
      cy.get('ul#menu-footer').within(() => {
        cy.contains('a', 'Impressum').should('be.visible');
        cy.contains('a', 'Datenschutzerklärung').should('be.visible');
      });
    });
  });
  