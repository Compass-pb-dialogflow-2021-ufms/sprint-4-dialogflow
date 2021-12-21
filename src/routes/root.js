const express = require('express')
const router = express.Router()

const rootController = require('../controllers/rootController')

router.get('', (req, res) => {
    res.status(200).send({
        status: 'On-line'
    })
})

router.post('', rootController.main)

module.exports = router