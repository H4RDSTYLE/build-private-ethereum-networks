const express = require("express") // https://expressjs.com/
const cors = require("cors") // https://expressjs.com/en/resources/middleware/cors.html
const morgan = require("morgan") // https://expressjs.com/en/resources/middleware/morgan.html
const app = express()

const networks = require("./router-network")
const node = require("./router-node")
const faucet = require("./router-faucet")
const explorer = require("./explorer")

app.use(morgan('combined'))
app.use(cors())

app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/network", networks)
app.use("/node", node)
app.use("/faucet", faucet)
app.use("/explorer", explorer)


// ruta not found
app.use("*", (req, res) => {
    res.status(404).send("NOT FOUND ")
})

const PORT = process.env.PORT || 3334
app.listen(PORT, () => {
    console.log("Escuchando ", PORT)
})