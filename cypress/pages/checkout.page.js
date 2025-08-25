class CheckoutPage {



  startCheckout(firstName, lastName, postalCode) {
    cy.get('[data-test="checkout"]').click();
    cy.get('[data-test="firstName"]').type(firstName);
    cy.get('[data-test="lastName"]').type(lastName);
    cy.get('[data-test="postalCode"]').type(postalCode);
    cy.get('[data-test="continue"]').click();
    cy.get('[data-test="finish"]').click();
  }

  verifyCheckoutComplete() {
    cy.get('.complete-header').should('contain', 'Thank you');
  }
}

export default new  CheckoutPage();