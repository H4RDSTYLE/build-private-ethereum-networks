## proyectos

### frontend (react)


### backend (nodejs)

En la parte del backend tenemos que hacer operaciones crear borrar directorios.

También se debe de lanzar procesos con parámetros y borrar procesos.

```javascript
const fs = require("fs")
var argv = require('yargs').argv;
const Web3 = require("Web3")
const {execSync} = require("child_process")

const NUMERO_NETWORK = parseInt(argv.network)
const NUMERO_NODO = parseInt(argv.nodo)
const NETWORK_DIR = `eth${NUMERO_NETWORK}`
const NETWORK_CHAINID = 333444 + NUMERO_NETWORK
const PASSWORD = "123456"

const BALANCE = "0x200000000000000000000000000000000000000000000000000000000000000"



const HTTP_PORT = 9545 + NUMERO_NODO + NUMERO_NETWORK * 20 
const AUTHRPC_PORT = 9553 + NUMERO_NODO + NUMERO_NETWORK * 20 
const NODO = `nodo${NUMERO_NODO}`
const PORT = 30404 + NUMERO_NODO + NUMERO_NETWORK * 20 
const IPCPATH = `\\\\.\\pipe\\${NETWORK_CHAINID}\\${NODO}.ipc`
const DIR_NODE = `${NETWORK_DIR}/${NODO}`   


if (!fs.existsSync(NETWORK_DIR))
   fs.mkdirSync(NETWORK_DIR)

if (fs.existsSync(`${NETWORK_DIR}/${NODO}`))
   fs.rmSync(`${NETWORK_DIR}/${NODO}`, {recursive:true,})

if (!fs.existsSync(`${NETWORK_DIR}/${NODO}`))
   fs.mkdirSync(`${NETWORK_DIR}/${NODO}`)



fs.writeFileSync(`${NETWORK_DIR}/${NODO}/pwd`,PASSWORD)
execSync(`geth  --datadir ${DIR_NODE}  account new --password ${DIR_NODE}/pwd`)

const lista = fs.readdirSync(`${DIR_NODE}/keystore`)
const CUENTA = JSON.parse(fs.readFileSync(`${DIR_NODE}/keystore/${lista[0]}`).toString()).address

const CUENTAS_ALLOC = [
   "704765a908962e25626f2bea8cdf96c84dedaa0b"
  // CUENTA
]
const timestamp = Math.round(((new Date()).getTime() / 1000)).toString(16)
// leemos la plantilla del genesis
let genesis = JSON.parse(fs.readFileSync('curso.json').toString())

// genesis.timestamp = `0x${timestamp}`
genesis.config.chainId = NETWORK_CHAINID 
genesis.extraData = `0x${'0'.repeat(64)}${CUENTA}${'0'.repeat(130)}`


genesis.alloc = CUENTAS_ALLOC.reduce((acc, item)  => {
     acc[item] = {balance: BALANCE}
     return acc
}, {})


fs.writeFileSync(`${NETWORK_DIR}/${NODO}/genesis.json`, JSON.stringify(genesis))

// INICIALIZAMOS EL NODO
const result = execSync(`geth --datadir ${DIR_NODE} init ${DIR_NODE}/genesis.json`)


const comando = `--networkid ${NETWORK_CHAINID}
--miner.threads 2
--syncmode full
--mine
--miner.threads 2
--datadir ${DIR_NODE}
--http
--graphql
--http.port ${HTTP_PORT}
--http.api admin,eth,miner,net,txpool,personal,web3
--allow-insecure-unlock
--unlock "0x${CUENTA}"
--password ${DIR_NODE}/pwd
--port ${PORT}
--authrpc.port ${AUTHRPC_PORT} 
--ipcpath "${IPCPATH}"`

const params = comando.replace("\n"," ").split(" ")


const params2 = [
   '--networkid',
   NETWORK_CHAINID,
   '--miner.threads',
   2,
   '--syncmode',
   'full',
   '--miner.gasprice',  0, 
   
   '--verbosity', 9,
   
   '--bootnodes',
   'enode://c64aa5554df5961673455c6499a57f480ea220639bc3090894fa567f34a4dcf21f956998299962f09521abd4b594f6b4d722dc380a74277c9fbe1647214307bd@127.0.0.1:0?discport=30301',
   '--datadir',   DIR_NODE,
   '--http', 
   '--http.corsdomain', '*',
   '--graphql',
   '--http.port', HTTP_PORT, 
   '--http.api', 'admin,eth,miner,net,txpool,personal,web3',
   '--allow-insecure-unlock',
   '--unlock',  CUENTA,
   '--password', `${DIR_NODE}/pwd`,
   '--port',   PORT,
   '--authrpc.port',   AUTHRPC_PORT,
   '--ipcpath',  `\\\\.\\pipe\\${NETWORK_CHAINID}-${NODO}.ipc`
 ]
 

const { spawn } = require('child_process'); 
const out = fs.openSync(`./${DIR_NODE}/out${NUMERO_NODO}.log`, 'a');
const err = fs.openSync(`./${DIR_NODE}/out${NUMERO_NODO}.log`, 'a');
const subproceso = spawn('geth', params2,{detached:true, stdio: ['ignore', out, err]});
fs.writeFileSync(`${DIR_NODE}/params.json`, JSON.stringify(subproceso,null,4))
subproceso.unref();

```

### borrar proceso en power shell
```powershell
param ($network)
Get-Process -Name geth | Select-Object -property id | Stop-Process -Force; Remove-Item .\eth$network -Recurse
```

Primer commit de Javi!
Segundo Commit de Robert!!

# Nodos -- 
Terminal 1:
puppeth
   Seguimos los pasos para crear el genesis.json:
      - Nombre de la network (genesis)
      - 2 Configurar genesis nueva
      - 1 Crear nueva genesis desde cero
      - 2 Clique - PoA
      - 0 Cuantos segundos/bloque
      - Accounts allowed to seal (aqui cambiamos de terminal y generamos un nodo con los siguientes datos)

   - Generar el Nodo 
   ./geth --datadir nodo1 account new --password ./pwd.txt
   (para que busque el pwd.txt debemos crearlo, ya está creado)

   - Se crea una carpeta llamada nodo1 con el fichero JSON dentro, donde está el address que nos pide Puppeth para seal.
Volvemos a la terminal Puppeth
   - Pegamos una a una las address al terminal, ya nos pone el 0x (enter para confirmar las tres, luego enter sin añadir nada para seguir)
   - Accounts pre-funded
      - Aqui metemos una cuenta de Metamask, yo use la red de pruebas Goerli (0xDf8D4a07A78B2e71bCDC93b2E424274B69491136)
      - Prefondear las direcciones con 1 WEI (yes)
      - Chain ID: 333444
   - 2 Manage existing genesis
   - 2 Export new genesis
   - Enter 
   Ya hemos creado el genesis.json y le hemos dicho cual es el address de cada nodo.

Al final debemos tener:
   - 3 nodos con un JSON dentro
   - Un directorio .puppeth con el genesis.json dentro
   - El genesis.json también fuera, pues lo hemos exportado






