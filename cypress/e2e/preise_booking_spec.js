Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

describe('Kitmon Preise Page Booking Button Test', () => {
    it('should navigate to the Preise page and click on "Jetzt buchen" to go to the booking form', () => {
      cy.visit('/');
  
      cy.get('nav.header-navbar__menu').within(() => {
        cy.get('a').contains('Preise').click({ force: true });
      });
  
      cy.url().should('eq', 'https://kitmon360.de/preise/');
  
      cy.get('#btnButton-6b6ebe82-6').within(() => {
        cy.get('a.btnButton').contains('Jetzt buchen').click();
      });
  
      cy.url().should('eq', 'https://kitmon360.de/360-photobooth-buchungsanfrageformular/');
    });
  });
  