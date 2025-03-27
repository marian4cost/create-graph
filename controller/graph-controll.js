const create = (req, res) => {
    const soma = 5 + 1
    res.send(`oie ${soma}`)
}

module.exports = {create}
