// cypress/e2e/booking_spec.js
Cypress.on('uncaught:exception', (err, runnable) => {
    // Ignore the error to prevent test failure
    return false;
  });

  
describe('Kitmon Booking Form Test', () => {
    it('should navigate to the booking page, fill the form, and submit', () => {
      // Step 1: Visit the homepage
      cy.visit('/');
  
      // Step 2: Click on the "Buchen" menu item to go to the booking form
      cy.get('nav.header-navbar__menu').within(() => {
        cy.get('a').contains('Buchen').click({ force: true });
      });
  
      // Step 3: Verify that we are on the correct booking page by checking the URL
      cy.url().should('eq', 'https://kitmon360.de/360-photobooth-buchungsanfrageformular/');
  
      // Step 4: Fill in the form fields
      cy.get('#wpforms-352-field_0').type('John Doe'); // Name
      cy.get('#wpforms-352-field_16').type('12/31/2024'); // Date (MM/DD/YYYY)
      cy.get('#wpforms-352-field_21').type('Berlin'); // City
      cy.get('#wpforms-352-field_20').type('Birthday Party'); // Type of event
      cy.get('#wpforms-352-field_4').type('5'); // Duration
      cy.get('#wpforms-352-field_1').type('johndoe@example.com'); // Email
      cy.get('#wpforms-352-field_17').type('1234567890'); // Telephone number
  
      // Step 5: Check the Datenschutz checkbox
      cy.get('#wpforms-352-field_15_1').check();
  
      // Step 6: Submit the form
      cy.get('#wpforms-submit-352').click();
  
      // Step 7: Verify submission success by checking the confirmation message
      cy.get('.wpforms-confirmation-container-full').within(() => {
        cy.contains('Vielen Dank für deine Anfrage bei Kitmon 360!').should('be.visible');
      });
    });
  });
  