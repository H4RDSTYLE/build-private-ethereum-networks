const express = require("express")
const router = express.Router()
const fs = require("fs")
var ps = require('ps-node');

const { exec, execSync, spawn, spawnSync } = require("child_process");
const { send } = require("process");

module.exports = router

const PASSWORD = "123456"
const BALANCE = "0x2000000000000000000000000000000"
const MICUENTA = "DB1eDF3025403760c489d8Ce7708B8cf22E76B02"
const CuentaRobert = "C2B5e9517Fd08339409088B8b4C179011cB8bD1F"
const CuentaMax = "660461D60EDB45e62c521E0Cfda789a6aa28A427"

function launchNode(NUMERO_NETWORK, NUMERO_NODO, DIR_NODE, NETWORK_DIR,
    IPCPATH, NETWORK_CHAINID, HTTP_PORT, CUENTA, PORT,
    AUTHRPC_PORT, BALANCE,
    CUENTAS_ALLOC) {

    const out2 = fs.openSync(`./${DIR_NODE}/outNodo.log`, 'a');
    const err2 = fs.openSync(`./${DIR_NODE}/outNodo.log`, 'a');
    console.log();
    console.log();
    console.log("===================");
    console.log("Dir node: " + DIR_NODE + ", networkdir: " + NETWORK_DIR);
    console.log("===================");
    console.log();
    console.log();
    //geth --datadir ${DIR_NODE} --http --http.port ${HTTP_PORT} --http.api admin,eth,miner,net,txpool,personal,web3 
    //--allow-insecure-unlock --unlock "${CUENTA}" --password ${DIR_NODE}/pwd 
    //--port ${PORT} --mine --ipcdisable console
    const params = [
        "--networkid", NETWORK_CHAINID,
        '--mine',
        '--syncmode', 'full',
        '--datadir', DIR_NODE,
        '--http', '--http.corsdomain', '*', '--graphql',
        '--http.port', HTTP_PORT, '--http.api', 'clique,admin,eth,miner,net,txpool,personal,web3',
        '--allow-insecure-unlock', '--unlock', CUENTA, '--password', `${DIR_NODE}/pwd`,
        '--port', PORT,
        '--authrpc.port', AUTHRPC_PORT,
        '--ipcpath', IPCPATH,
        '--nodiscover',
        '--trace', `${DIR_NODE}/trace.txt`
    ]

    const nodo = {
        network: NUMERO_NETWORK,
        nodo: NUMERO_NODO,
        network_dir: NETWORK_DIR,
        dir_node: DIR_NODE,
        port: PORT,
        http_port: HTTP_PORT,
        ipcpath: IPCPATH,
        address: CUENTAS_ALLOC,
        chainId: NETWORK_CHAINID,
        authRpcPort: AUTHRPC_PORT,
        prefund: BALANCE

    }
    const subproceso2 = spawn('geth', params, { detached: true, stdio: ['ignore', out2, err2] });
    fs.writeFileSync(`${DIR_NODE}/paramsNodo.json`, JSON.stringify({ nodo, subproceso: subproceso2 }, null, 4))
    subproceso2.unref();
    return { nodo, subproceso: subproceso2 }
}

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

function createIfNotExists(path) {
    if (!fs.existsSync(path))
        fs.mkdirSync(path)
}

function deleteIfExists(path) {
    if (fs.existsSync(path))
        fs.rmdirSync(path, { recursive: true, })
}

function createAccount(DIR_NODE) {
    fs.writeFileSync(`${DIR_NODE}/pwd`, PASSWORD)
    execSync(`geth  --datadir ${DIR_NODE}  account new --password ${DIR_NODE}/pwd`)

    // pillamos el address que hemos creado 
    const lista = fs.readdirSync(`${DIR_NODE}/keystore`)
    const CUENTA = JSON.parse(fs.readFileSync(`${DIR_NODE}/keystore/${lista[0]}`).toString()).address
    return CUENTA
}

function generateGenesis(NETWORK_CHAINID, CUENTA, BALANCE, CUENTAS_ALLOC, NETWORK_DIR) {
    const timestamp = Math.round(((new Date()).getTime() / 1000)).toString(16)
    // leemos la plantilla del genesis
    let genesis = JSON.parse(fs.readFileSync('genesisbase.json').toString())

    // genesis.timestamp = `0x${timestamp}`
    genesis.config.chainId = NETWORK_CHAINID
    genesis.extraData = `0x${'0'.repeat(64)}${CUENTA}${'0'.repeat(130)}`


    genesis.alloc = CUENTAS_ALLOC.reduce((acc, item) => {
        acc[item] = { balance: BALANCE }
        return acc
    }, {})


    fs.writeFileSync(`${NETWORK_DIR}/genesis.json`, JSON.stringify(genesis))

}

router.post("/create/:network/:node", (req, res) => {

    const NUMERO_NETWORK = parseInt(req.params.network)
    const NUMERO_NODO = parseInt(req.params.node)
    const parametros = generateParameter(NUMERO_NETWORK, NUMERO_NODO)

    const { NETWORK_DIR, DIR_NODE, NETWORK_CHAINID, AUTHRPC_PORT, HTTP_PORT, PORT, IPCPATH } = parametros

    createIfNotExists("ETH")
    deleteIfExists(NETWORK_DIR)
    createIfNotExists(NETWORK_DIR)
    createIfNotExists(DIR_NODE)

    const CUENTA = createAccount(DIR_NODE)
    const CUENTAS_ALLOC = [
        CUENTA,
        MICUENTA,
        CuentaRobert,
        CuentaMax
    ]

    generateGenesis(NETWORK_CHAINID, CUENTA, BALANCE, CUENTAS_ALLOC, NETWORK_DIR)

    // INICIALIZAMOS EL NODO
    const comando = `geth --datadir ${DIR_NODE} init ${NETWORK_DIR}/genesis.json`
    exec(comando, (error, stdout, stderr) => { })
    const resultado = launchNode(NUMERO_NETWORK, NUMERO_NODO, DIR_NODE,
        NETWORK_DIR, IPCPATH, NETWORK_CHAINID,
        HTTP_PORT, CUENTA, PORT, AUTHRPC_PORT, BALANCE, CUENTAS_ALLOC)
    console.log();
    console.log();
    console.log("===================");
    console.log("Dir node: " + DIR_NODE + ", networkdir: " + NETWORK_DIR);
    console.log("===================");
    console.log();
    console.log();


    const comando2 = `geth --datadir ${DIR_NODE} --http --http.port ${HTTP_PORT} --http.api admin,eth,miner,net,txpool,personal,web3 --allow-insecure-unlock --unlock "${CUENTA}" --password ${DIR_NODE}/pwd --port ${PORT} --mine --ipcdisable console`
    console.log();
    console.log();
    console.log("===================");
    console.log(comando2);
    console.log("===================");
    console.log();
    console.log();
    // exec(comando2, (error, stdout, stderr) => {})


    res.send(resultado)

})

router.post("/add/:network/:node", (req, res) => {

    const NUMERO_NETWORK = parseInt(req.params.network)
    const NUMERO_NODO = parseInt(req.params.node)
    const parametros = generateParameter(NUMERO_NETWORK, NUMERO_NODO)

    const { NETWORK_DIR, DIR_NODE, NETWORK_CHAINID, AUTHRPC_PORT, HTTP_PORT, PORT, IPCPATH } = parametros

    deleteIfExists(DIR_NODE)
    createIfNotExists(DIR_NODE)

    const CUENTA = createAccount(DIR_NODE)
    const CUENTAS_ALLOC = [
        CUENTA
    ]

    const comando = `geth --datadir ${DIR_NODE} init ${NETWORK_DIR}/genesis.json`

    const result = exec(comando, (error, stdout, stderr) => {
        console.log("ejecutado")
        if (error) {
            res.send({ error })
            return
        }
        const resultado = launchNode(NUMERO_NETWORK, NUMERO_NODO, DIR_NODE,
            NETWORK_DIR, IPCPATH, NETWORK_CHAINID,
            HTTP_PORT, CUENTA, PORT, AUTHRPC_PORT, BALANCE, CUENTAS_ALLOC)
        res.send(resultado)
    })

})

router.delete("/:network", (req, res) => {
    const NUMERO_NETWORK = parseInt(req.params.network)
    const NETWORK_DIR = `ETH/eth${NUMERO_NETWORK}`
    const nodos = fs.readdirSync(NETWORK_DIR, { withFileTypes: true }).filter(i => !i.isFile())
    const pids = nodos.map(i => {
        try {
            return JSON.parse(fs.readFileSync(`${NETWORK_DIR}/${i.name}/paramsNodo.json`)).subproceso.pid
        } catch (error) {
            return null
        }
    }
    )

    pids.filter(i => i != null).forEach(i => {
        try {
            process.kill(i)
        } catch (error) {

        }
    }
    )
    deleteIfExists(NETWORK_DIR)

    res.send({ network: req.params.network })
})

router.get("/reload/:network", (req, res) => {
    const NUMERO_NETWORK = parseInt(req.params.network)
    const NETWORK_DIR = `ETH/eth${NUMERO_NETWORK}`
    // los directorios
    const nodos = fs.readdirSync(NETWORK_DIR, { withFileTypes: true })
        .filter(i => !i.isFile())
    // los datos de los nodos
    const data = nodos.map(i =>
        JSON.parse(fs.readFileSync(`${NETWORK_DIR}/${i.name}/paramsNodo.json`)))
    // matamos los los procesos
    const pids = data.map(i => i.subproceso.pid)

    pids.forEach(i => {
        try {
            process.kill(i)
        } catch (error) {

        }
    }
    )
    // generamos static-nodes.json
    const output = nodos.map(i => JSON.parse(fs.readFileSync(`${NETWORK_DIR}/${i.name}/paramsNodo.json`)))
    const puertos = output.map(i => ({ port: i.nodo?.http_port }))

    const keynode = output.map(i =>
        ({ nodekey: fs.readFileSync(`${i.nodo.dir_node}/geth/nodekey`).toString(), port: i.nodo.port }))
    const enodes = keynode.map(i => `enode://${spawnSync('bootnode', ['-nodekeyhex', i.nodekey,
        '-writeaddress']).stdout.toString().trimEnd()}@127.0.0.1:${i.port}?discport=0`)
    output.forEach(i => {
        fs.writeFileSync(`${i.nodo.dir_node}/static-nodes.json`, JSON.stringify(enodes))
    })
    // lanzamos
    data.forEach(i => {
        try {
            const out2 = fs.openSync(`./${i.nodo.dir_node}/outNodo.log`, 'w');
            const err2 = fs.openSync(`./${i.nodo.dir_node}/outNodo.log`, 'a');
            const subproceso2 = spawn('geth', i.subproceso.spawnargs.filter((i, index) => index > 0),
                {
                    detached: true, stdio: ['ignore', out2, err2]
                });
            subproceso2.unref();
            fs.writeFileSync(`${i.nodo.dir_node}/paramsNodo.json`, JSON.stringify({ date: new Date(), nodo: i.nodo, subproceso: subproceso2 }, null, 4))
        } catch (error) {
            console.log(error)
        }
    }
    )


    res.send({ network: req.params.network })
})


router.get("/procesos/:network", async (req, res) => {
    const NUMERO_NETWORK = parseInt(req.params.network)
    const NETWORK_DIR = `ETH/eth${NUMERO_NETWORK}`
    const nodos = fs.readdirSync(NETWORK_DIR, { withFileTypes: true }).filter(i => !i.isFile())
    const output = nodos.map(i => {
        var data = JSON.parse(fs.readFileSync(`${NETWORK_DIR}/${i.name}/paramsNodo.json`))
        return { nodo: data.nodo }
    })
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