const express = require('express')
const router = express.Router()

const {
    getAll,
} = require('../controllers/message')
//const { checkAuth } = require('../middlewares')


router.get('/', getAll)


module.exports = router