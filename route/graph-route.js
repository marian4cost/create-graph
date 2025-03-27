const route = require("express").Router()
const graphControll = require("../controller/graph-controll")

route.get("", graphControll.create)

module.exports = route
