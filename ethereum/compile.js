const path = require('path');
const fs = require('fs');
const solc = require('solc');

const lotteryPath = path.resolve(__dirname, 'contracts', 'Contract.sol');

var input = {
  language: 'Solidity',
  sources: {
    'Contract.sol': {
      content: fs.readFileSync(lotteryPath, 'utf8')
    }
  },
  settings: {
    outputSelection: {
      '*': {
        '*': ['*']
      }
    }
  }
};

var output = JSON.parse(solc.compile(JSON.stringify(input))).contracts['Contract.sol'];
for (let contract in output) {
  module.exports = output[contract];
}
  //console.log(output.contracts['Lottery.sol']['Lottery'].abi);
  //console.log(output.contracts['Lottery.sol']['Lottery']['evm'].bytecode); to get bytecode
