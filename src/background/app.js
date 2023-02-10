import {
  ETHERSCAN_API, 
  ETHERSCAN_MODULES, 
  ETHERSCAN_KEY
} from '../utilities/constants';

const testAddress = '0xDc92f758986cc62A1085319D2038445f3FeEF74b';
const testContract = '0x9231f13343f871B051FA5002E8c04beEd91B4f62';
const testErc1155Contract = '0xfa2ed7ff5f59d4c715d4c5021037d93bc86dcd6c';

function getEtherPrice() {
  fetch(`${ETHERSCAN_API}${ETHERSCAN_MODULES.STATS}&action=ethprice${ETHERSCAN_KEY}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => console.log(error));
}

function getEtherBalance(address) {
  fetch(`${ETHERSCAN_API}${ETHERSCAN_MODULES.ACC}&action=balance&address=${address}&tag=latest${ETHERSCAN_KEY}`)
    .then(response => response.json())
    .then(data => {
      console.log(`Your Eth balance is ${((data.result)/1000000000000000000).toFixed(4)}`);
    })
    .catch(error => console.log(error));
}

function getListOfTransactions(address) {
  fetch(`${ETHERSCAN_API}${ETHERSCAN_MODULES.ACC}&action=txlist&address=${address}&startblock=1000&endblock=99999999&page=1&offset=10
    &sort=desc&tag=latest${ETHERSCAN_KEY}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => console.log(error));
}

function getListOfInternalTransactions(address) {
  fetch(`${ETHERSCAN_API}${ETHERSCAN_MODULES.ACC}&action=txlistinternal&address=${address}&startblock=1000&endblock=99999999&page=1&offset=10
    &sort=desc&tag=latest${ETHERSCAN_KEY}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => console.log(error));
}

function getNftTransfers(address, contract) {
  fetch(`${ETHERSCAN_API}${ETHERSCAN_MODULES.ACC}&action=tokennfttx&contractaddress=${contract}&address=${address}&page=1&offset=100&startblock=0&endblock=27025780&sort=desc${ETHERSCAN_KEY}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => console.log(error));
}

function getERC1155Transfers(address, contract) {
  fetch(`${ETHERSCAN_API}${ETHERSCAN_MODULES.ACC}&action=token1155tx&contractaddress=${contract}&address=${address}&page=1&offset=100&startblock=0&endblock=27025780&sort=desc${ETHERSCAN_KEY}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => console.log(error));
}


getEtherPrice();
getEtherBalance(testAddress);
getListOfTransactions(testAddress);
getListOfInternalTransactions(testAddress);
getNftTransfers(testAddress, testContract);
getERC1155Transfers(testAddress, testErc1155Contract);