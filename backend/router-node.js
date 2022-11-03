const express = require("express")
const router = express.Router()
const fs = require("fs")
const { send } = require("process");
const { exec, execSync, spawn, spawnSync } = require("child_process");

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

router.get("/:network", async (req, res) => {
    const redes = fs.readdirSync("ETH", { withFileTypes: true }).filter(i => !i.isFile())
    const output = redes.map(i => {
        const genesis = JSON.parse(fs.readFileSync(`ETH/${i.name}/genesis.json`))
        const cuentas = Object.keys(genesis.alloc)
        return { numero: i.name, chainid: genesis.config.chainId, cuentas: cuentas }
    }
    )
    res.send(output)
})

router.get("/", async (req, res) => {

    const redes = fs.readdirSync("ETH", { withFileTypes: true }).filter(i => !i.isFile())
    const output = redes.map(i => {
        const genesis = JSON.parse(fs.readFileSync(`ETH/${i.name}/genesis.json`))
        const cuentas = Object.keys(genesis.alloc)
        return { numero: i.name, chainid: genesis.config.chainId, cuentas: cuentas }
    }
    )
    res.send(output)
})

router.post("/launch/:network", (req, res) => {
    console.log("HA ENTRADO");
    const NUMERO_NETWORK = parseInt(req.params.network)
    const NUMERO_NODO = 1
    const parametros = generateParameter(NUMERO_NETWORK, NUMERO_NODO)

    const { NETWORK_DIR, DIR_NODE, NETWORK_CHAINID, AUTHRPC_PORT, HTTP_PORT, PORT, IPCPATH } = parametros

    const comando = `geth --datadir ${DIR_NODE} --http --http.port ${HTTP_PORT} --http.api admin,eth,miner,net,txpool,personal,web3 --allow-insecure-unlock --unlock "cfeaf7e4f22cbee5a9b1a4d9754391b381656001" --password ${DIR_NODE}/pwd --port ${PORT} --mine --ipcdisable console`
    console.log();
    console.log();
    console.log("===================");
    console.log(comando);
    console.log("===================");
    console.log();
    console.log();
    const resultado = exec(comando, (error, stdout, stderr) => {})
    console.log("HA LANZADO LA RED");

    res.send(resultado)
    console.log("HA DEVUELTO RESULTADO ");
})

function generateParameter(network, node) {
    const NUMERO_NETWORK = parseInt(network)
    const NUMERO_NODO = parseInt(node)
    const NODO = `nodo${NUMERO_NODO}`
    const NETWORK_DIR = `ETH/eth${NUMERO_NETWORK}`
    const NETWORK_CHAINID = 333444 + NUMERO_NETWORK

    const HTTP_PORT = 9545 + NUMERO_NODO + NUMERO_NETWORK * 20
    const DIR_NODE = `${NETWORK_DIR}/${NODO}`
    const IPCPATH = `\\\\.\\pipe\\${NETWORK_CHAINID}-${NODO}.ipc`
    const PORT = 30404 + NUMERO_NODO + NUMERO_NETWORK * 20
    const AUTHRPC_PORT = 9553 + NUMERO_NODO + NUMERO_NETWORK * 20

    return {
        NUMERO_NETWORK, NUMERO_NODO, NODO, NETWORK_DIR, NETWORK_CHAINID, HTTP_PORT,
        DIR_NODE, IPCPATH, PORT, AUTHRPC_PORT
    }
}