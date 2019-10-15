describe('Functional test of the app', () => {
  it('Should show the history page', () => {
    cy.visit("https://pwascanit.com/");

    cy.get('[href="/history"]').click();
    cy.url().should('include', '/history');
  });

  it('Should turn on the camera or request access', () => {
    cy.visit("https://pwascanit.com/");

    cy.get('.btn__round').click();
    cy.get('video').should('be.visible');
  });

  it('Should be able to go to a product page', () => {
    cy.visit("https://pwascanit.com/product/3017620422003");

    cy.get('.productDisplay__title').should('be.visible');
  });

  it('Should be able to go to /not-found page', () => {
    cy.visit("https://pwascanit.com/product/not-found?code=barcodetest");

    cy.get('.productNotFound__container').should('be.visible')
  });

  it('Should be able to go to /not-found page AND enter some product barcode', () => {
    cy.visit("https://pwascanit.com/product/not-found");

    cy.get('.textInput').type('3017620422003');
    cy.get('.btn').click();
    cy.url().should('include', '/product/3017620422003');
  });

  it('Should have a history with empty state', () => {
    cy.clearLocalStorage();
    cy.visit("https://pwascanit.com/history");

    cy.get('.history__list').children('.history__listItem').should('have.length', 0);
  });

  it('Should include one item in history after searching for one', () => {
    cy.visit("https://pwascanit.com/product/3017620422003");
    cy.visit("https://pwascanit.com/history");

    cy.get('.history__list').children('.history__listItem').should('have.length', 1);
  });
});
