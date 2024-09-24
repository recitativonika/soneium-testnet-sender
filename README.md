# Soneium Testnet tool, Automatically send Soneium ETH Minato testnet 

## What needed
- Sepolia ETH on Minato Testnet [List faucet on soneium docs](https://docs.soneium.org/docs/builders/tools/faucets)
- Git
- Node JS

## Features

- Automatically send ETH Minato to wallet address
- Randomize the ETH balance to send
- Randomize the time between sending Minato Sepolia ETH


## Installing and setup

### Install
1. Clone the project and go to project directory
   ```
   git clone https://github.com/recitativonika/soneium-testnet-sender.git
   cd soneium-testnet-sender
   ```
2. Install required package
   ```
   node install
   ```
### Setup and run

1. In `soneium-testnet-sender` directory, navigate to `config` folder
2. Edit and adjust this line in `config.js` 
```
	- ETH_NODE: 'https://rpc.minato.soneium.org/', // Soneium Node URL, leave it default if you dont have any
	- WALLET_ADDRESS: 'your_wallet_address', // Replace with your wallet address
	- PRIVATE_KEY: 'your_private_key', // Replace with your private key
	- BALANCE_MIN: 0.0000001, // Minimum ETH balance to send
	- BALANCE_MAX: 0.0001, // Maximum ETH balance to send
	- INTERVAL_MIN: 30000, // Minimum interval in milliseconds (Example is 30 seconds)
	- INTERVAL_MAX: 120000, // Maximum interval in milliseconds (Example is 120 seconds)
```
4. save it and go back to the original directory (`soneium-testnet-sender`)
5. Run the script to start, use :
    ```
    node main
    ```

This is for testing the Soneium Testnet only.
