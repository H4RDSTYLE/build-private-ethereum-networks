const express = require("express")
const Web3 = require("web3")
const cors = require("cors")
const app = express()
app.use(cors())
// toma el fichero.env y crea variables accesible por process.env.nombre
require("dotenv").config()
const web3 = new Web3("http://localhost:8545")//Modificar puerto

app.get("/ping", (req, res) => {
    res.send({fecha:new Date().toISOString()})
})

app.get("/balance/:cuenta", async (req, res) => {
    const balance = await web3.eth.getBalance(req.params.cuenta)
    res.send({balance:balance})
});

app.get("/enviar/:cuenta", async (req, res) => {
    //tx desde la cuenta minera 
    const tx = await web3.eth.accounts.signTransaction({
        to: req.params.cuenta,
        from: process.env.ADDRESS,// la cuenta viene desde el archivo .env
        value: 10E18,
        gas: 2000000
    },  process.env.PRIVATE_KEY)// llave privada desde archivo .enc
     //enviar la tx al provider
    const txSended = await web3.eth.sendSignedTransaction(
        tx.rawTransaction
    )
    //enviar el nuevo saldo
    const balance = await web3.eth.getBalance(req.params.cuenta)
    res.send({balance})


})
app.listen(4000, () =>{
    console.log("listen")
})