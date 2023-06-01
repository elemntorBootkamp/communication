const express = require('express')
const router = express.Router()

const {
    getAll,
    addMessage
} = require('../controllers/message')
//const { checkAuth } = require('../middlewares')


router.get('/', getAll)
router.post('/',addMessage)


module.exports = router