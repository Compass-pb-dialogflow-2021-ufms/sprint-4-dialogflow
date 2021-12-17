const express = require('express')
const router = express.Router()

const indexController = require('../controllers/indexController')

router.get('', (req, res) => {
    res.status(200).send({
        status: 'On-line'
    })
})

router.post('', indexController.main)

module.exports = router