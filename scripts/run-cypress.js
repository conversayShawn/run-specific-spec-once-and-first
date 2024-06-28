// const { execSync } = require('child_process');

// async function runCypress() {
//   try {
//     // Run the specific spec first
//     execSync('node scripts/run-specific-spec.js', { stdio: 'inherit' });

//     // Run the rest of the Cypress tests
//     execSync('npx cypress run', { stdio: 'inherit' });
//   } catch (error) {
//     console.error('Error running Cypress tests:', error);
//     process.exit(1);
//   }
// }

// runCypress();

const { execSync } = require('child_process');

// Get the GitHub Actions token from environment variables
const ciBuildId = process.env.GITHUB_TOKEN || 'local';

async function runCypress() {
  try {
    // Run the specific spec first with parallelization
    execSync('node scripts/run-specific-spec.js', { stdio: 'inherit' });

    // Run the rest of the Cypress tests in parallel with the same build ID
    execSync(`npx cypress run --record --parallel --ci-build-id ${ciBuildId}`, { stdio: 'inherit' });
  } catch (error) {
    console.error('Error running Cypress tests:', error);
    process.exit(1);
  }
}

runCypress();


