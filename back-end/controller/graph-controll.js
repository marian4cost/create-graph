let containerData

const create = (req, res) => {
    const {title, type, label, data} = req.body
    const dataGraph = [title, type, label, data]

    if(!title || !type || !label || !data){
        return res.status(400).send({message: "você deve preencher todos os campos!"})
    }

    containerData = {title, type, label, data}

    res.status(201).send({
        message: "dados inseridos com sucesso!",
        information: {dataGraph}
    })
}

const read = (req, res) => {
    res.json(containerData)
}

module.exports = {
    create,
    read
}
