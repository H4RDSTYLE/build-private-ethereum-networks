const express = require("express")
const router = express.Router()
const fs = require("fs")

module.exports =  router

router.post("/add/:network", (req, res) => {
    res.status(500).send("Not implemented ")
})

router.delete("/:network/:node", (req, res) => {
    const NUMERO_NETWORK = parseInt(req.params.network)
    const NUMERO_NODO = parseInt(req.params.node)
    const NODO = `nodo${NUMERO_NODO}`
    const NETWORK_DIR = `ETH/eth${NUMERO_NETWORK}`
    const DIR_NODE = `${NETWORK_DIR}/${NODO}`

    const pid = JSON.parse(fs.readFileSync(`${DIR_NODE}/paramsNodo.json`)).pid
    try {
        process.kill(pid)    
    } catch (error) {
        
    }
    if (fs.existsSync(`${DIR_NODE}`))
        fs.rmSync(`${DIR_NODE}`, { recursive: true, })

    res.send({pid})
})

router.get("/:network/:node", (req, res) => {
    res.status(500).send("Not implemented ")
})

router.get("/:network/:node/block/:block", (req, res) => {
    res.status(500).send("Not implemented ")
})

router.get("/:network/:node/tx/:tx", (req, res) => {
    res.status(500).send("Not implemented ")
})

router.get("/:network/:node/balance/:address", (req, res) => {
    res.status(500).send("Not implemented ")
})
