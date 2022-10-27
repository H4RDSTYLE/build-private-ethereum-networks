const Web3 = require("web3")
const web3 = new Web3("http://localhost:9606")
async function txs() {
    const r = await web3.eth.sendTransaction({
        from: '0x2e0ba6dbe4d1604cda50da6ff1346a63bdf6a334',
        to: '0xff21E724B7D483fc93708855AbE6ee4f1eD97BF3',
        value: '1000000000000000000'
    })
    console.log(r.blockHash)
    return r;
}

(async () => {

    for (let index = 0; index < 10; index++) {
        const r = await txs()

    }


})()