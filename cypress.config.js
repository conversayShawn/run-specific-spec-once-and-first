const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    supportFile: false,
    fixturesFolder:false,
    setupNodeEvents(on, config) {
      if (!process.env.RUNNING_SPECIFIC_SPEC) {
        config.excludeSpecPattern = ['cypress/e2e/specific-spec.cy.js'];
      }
      return config;
    },
  },
});

