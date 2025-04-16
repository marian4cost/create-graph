const express = require("express")
const app = express()

const cors = require("cors")

const PORT = 4000

const graphRoute = require("./route/graph-route")

app.use(express.json())
app.use(cors())
app.use("", graphRoute)

app.listen(PORT, () => console.log(`serivdor funcionando perfeitamente na porta ${PORT}`))
