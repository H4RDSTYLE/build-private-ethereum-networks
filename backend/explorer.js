const express = require("express")
const router = express.Router()
const Web3 = require("Web3")

module.exports = router

const culo = "http://localhost:8575"
const web3 = new Web3(culo)

router.get("/", async (req, res) => {
    const bloque = await web3.eth.getBlockNumber();
    res.send({ bloque })
})

router.get("/bloque/:bloque", async (req, res) => {
    try {
        const bloque = await web3.eth.getBlock(req.params.bloque)
        res.send(bloque)
    } catch (error) {
        res.status(500).send({ mensaje: error.message })
    }
})

router.get("/tx/:tx", async (req, res) => {
    try {
        const tx = await web3.eth.getTransaction(req.params.tx)
        res.send(tx)
    } catch (error) {
        res.status(500).send({ mensaje: error.message })
    }
})

router.get("/balance/:address", async (req, res) => {
    try {
        const balance = await web3.eth.getBalance(req.params.address)
        res.send({ balance, ethers: balance / 1e18, ethers2: web3.utils.fromWei(balance, 'ether') })
    } catch (error) {
        res.status(500).send({ mensaje: error.message })
    }
})

router.get("/chainid", async (req, res) => {
    try {
        const chainid = await web3.eth.getChainId()
        res.send({ chainid })
    } catch (error) {
        res.status(500).send({ mensaje: error.message })
    }
})