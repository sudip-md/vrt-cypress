describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://qualityanalyst.me/');
cy.compareSnapshot('prod-home');

cy.visit('http://qualityanalyst.me/');
cy.compareSnapshot('staging-home');

  })
})