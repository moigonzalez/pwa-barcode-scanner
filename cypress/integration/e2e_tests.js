describe('Functional test of the app', () => {
  it('Should show the history page', () => {
    cy.visit("/");

    cy.get('[href="/history"]').click();
    cy.url().should('include', '/history');
  });

  it('Should turn on the camera or request access', () => {
    cy.visit("/");

    cy.get('.btn__round').click();
    cy.get('video').should('be.visible');
  });

  it('Should be able to go to a product page', () => {
    cy.visit("/product/3017620422003");

    cy.get('.productDisplay__title').should('be.visible');
  });

  it('Should be able to go to /not-found page', () => {
    cy.visit("/product/not-found?code=barcodetest");

    cy.get('.productNotFound__container').should('be.visible')
  });

  it('Should be able to go to /not-found page AND enter some product barcode', () => {
    cy.visit("/product/not-found");

    cy.get('.textInput').type('3017620422003');
    cy.get('.btn').click();
    cy.url().should('include', '/product/3017620422003');
  });

  it('Should have a history with empty state', () => {
    cy.clearLocalStorage();
    cy.visit("/history");

    cy.get('.history__list').children('.history__listItem').should('have.length', 0);
  });

  it('Should include one item in history after searching for one', () => {
    cy.server();
    cy.visit("/product/3017620422003");
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(500);
    cy.visit("/history");

    cy.get('.history__list').children('.history__listItem').should('have.length', 1);
  });
});
