const express = require("express")
const app = express()
const graphRoute = require("./route/graph-route")

app.use("", graphRoute)

app.listen(4000)
