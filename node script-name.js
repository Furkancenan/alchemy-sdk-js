npm install alchemy-sdk
import { Network, Alchemy } from 'alchemy-sdk';

const settings = {
  apiKey: "Ax8DiiNUKIk42r9Sx1BMG5wQdz7OaBJL",
  network: Network.ARB_MAINNET,
};

const alchemy = new Alchemy(settings);

// get the latest block
const latestBlock = alchemy.core.getBlock("latest").then(console.log);
node script-name.js
