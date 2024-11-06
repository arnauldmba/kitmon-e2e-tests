
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

describe('Kitmon Kontakt Form Test', () => {
    it('should navigate to the Kontakt page, fill the form, and submit', () => {
      cy.visit('/');
  
      cy.get('nav.header-navbar__menu').within(() => {
        cy.get('a').contains('Kontakt').click({ force: true });
      });
  
      cy.url().should('eq', 'https://kitmon360.de/kontakt/');
      cy.contains('Wir freuen uns darauf, von dir zu hören!').should('be.visible');
  
      cy.get('#wpforms-377-field_0').type('Jane Doe');
      cy.get('#wpforms-377-field_1').type('janedoe@example.com');
      cy.get('#wpforms-377-field_2').type('This is a test message from Cypress.');
  
      cy.get('#wpforms-submit-377').click();
  
      cy.get('#wpforms-confirmation-377').within(() => {
        cy.contains('Vielen Dank für deine Kontaktaufnahme mit Kitmon 360!').should('be.visible');
      });
    });
  });
  