const { render } = require("../app")

const apisController = {
    dadosMock: (req,res) => {
        let mock = {
            user: "Pedro S. Pinto",
            idade: "32 anos",
        }
        res.json(mock)
    }

}

module.exports = apisController