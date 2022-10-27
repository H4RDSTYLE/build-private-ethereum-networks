const Web3 = require("web3")
const web3 = new Web3("http://localhost:9608")

web3.eth.getBalance("0xff21E724B7D483fc93708855AbE6ee4f1eD97BF3")
    .then(console.log)