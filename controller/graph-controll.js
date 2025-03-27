const create = (req, res) => {
    const {title, type, label, data} = req.body
    if(!title || !type || !label || !data){
        return res.status(400).send({message: "você deve preencher todos os campos!"})
    }
    res.status(201).send({
        message: "dados inseridos com sucesso!",
        information: {title, type, label, data}
    })
}

module.exports = {create}
