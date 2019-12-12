const db = require('../db/index.js')

const controller = {
    get: (req, res) => {
        let dress = req.params.id
        db.find({product_id: dress})
        .then(data => res.status(200).send(data))
    }
}

module.exports = controller