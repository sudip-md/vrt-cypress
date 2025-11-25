describe('Prod vs Staging Visual Regression', () => {
  it('should compare prod and staging home pages', () => {
    // Visit and screenshot prod
    cy.visit('http://qualityanalyst.me/');
    cy.screenshot('prod-home');

    // Visit and screenshot staging  
    cy.visit('https://qualityanalyst.me/');
    cy.screenshot('staging-home');

    // Compare the two screenshots
    cy.compareSnapshot('prod-vs-staging-home').then((result) => {
      if (result.mismatchedPixels > 0) {
        cy.log(`❌ MISMATCH DETECTED`);
        cy.log(`Mismatched Pixels: ${result.mismatchedPixels}`);
        cy.log(`Difference Percentage: ${result.percentage}%`);
        cy.log(`Diff image saved to: cypress/snapshots/diff/`);
      } else {
        cy.log(`✅ MATCH - No differences found`);
      }
    });
  });
})