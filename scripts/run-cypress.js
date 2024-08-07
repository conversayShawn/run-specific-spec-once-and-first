const { execSync } = require('child_process');

async function runCypress() {
  try {
    // Run the specific spec first
    execSync('node scripts/run-specific-spec.js --record', { stdio: 'inherit' });

    // Run the rest of the Cypress tests
    execSync('npx cypress run', { stdio: 'inherit' });
  } catch (error) {
    console.error('Error running Cypress tests:', error);
    process.exit(1);
  }
}

runCypress();
