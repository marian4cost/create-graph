const route = require("express").Router()

const graphControll = require("../controller/graph-controll")

route.post("/create", graphControll.create)
route.get("/read", graphControll.read)

module.exports = route
