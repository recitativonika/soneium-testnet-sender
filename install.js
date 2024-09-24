const { execSync } = require('child_process');

const requiredModule = 'web3';

try {
  // Attempt to require the Web3 module
  require(requiredModule);
} catch (e) {
  console.log(`Installing ${requiredModule}...`);
  // Install the Web3 module if it's not found
  execSync(`npm install ${requiredModule}`, { stdio: 'inherit' });
}