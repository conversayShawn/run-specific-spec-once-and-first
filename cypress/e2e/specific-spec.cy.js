it('runs this script before other, but not during test run', () => {
  cy.visit('https://example.cypress.io')
});