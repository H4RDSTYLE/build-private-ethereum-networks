const { application } = require("express")
const Web3 = require("Web3")
const exp = require("express")
const cors = require("cors")
const ap = exp()
ap.use(cors())
const URL_INFURA = "https://mainnet.infura.io/v3/383484de7aee48088db56adca8badbfc"

const web3 = new Web3(URL_INFURA)

ap.get("/", async (req, res) => {
    const bloque = await web3.eth.getBlockNumber();
    res.send({ bloque })
})

ap.get("/bloque/:bloque", async (req, res) => {
    try{
        const bloque = await web3.eth.getBlock(req.params.bloque)
        res.send(bloque)
    } catch (error){
        res.status(500).send({mensaje: error.message })
    }    
})

ap.get("/tx/:tx", async (req, res) => {
    try{
        const tx = await web3.eth.getTransaction(req.params.tx)
        res.send(tx)
    } catch (error){
        res.status(500).send({mensaje: error.message })
    }     
})

ap.get("/balance/:address", async (req, res) => {
    try{
    const balance = await web3.eth.getBalance(req.params.address)
    res.send({ balance, ethers: balance / 1e18 , ethers2: web3.utils.fromWei(balance, 'ether')})
} catch (error){
    res.status(500).send({mensaje: error.message })
}   
})

ap.listen(3334)
console.log("listen")