const route = require("express").Router()
const graphControll = require("../controller/graph-controll")

route.post("", graphControll.create)

module.exports = route
