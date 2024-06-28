// const cypress = require('cypress');

// process.env.RUNNING_SPECIFIC_SPEC = 'true';

// cypress.run({
//   spec: 'cypress/e2e/specific-spec.cy.js',
//   record: true, 
//   parallel: true, 
// }).then((results) => {
//   if (results.totalFailed > 0) {
//     console.error('Specific spec failed');
//     process.exit(results.totalFailed);
//   } else {
//     process.exit(0);
//   }
// }).catch((err) => {
//   console.error('Error running the specific spec:', err);
//   process.exit(1);
// });

const { execSync } = require('child_process');

process.env.RUNNING_SPECIFIC_SPEC = 'true';

// Get the GitHub Actions token from environment variables
const ciBuildId = process.env.GITHUB_TOKEN ? `${process.env.GITHUB_TOKEN}-specific` : 'local-specific';

try {
  // Use execSync to run Cypress with the ci-build-id
  execSync(`npx cypress run --spec cypress/e2e/specific-spec.cy.js --record --parallel --ci-build-id ${ciBuildId}`, { stdio: 'inherit' });
  process.exit(0);
} catch (error) {
  console.error('Error running the specific spec:', error);
  process.exit(1);
}

