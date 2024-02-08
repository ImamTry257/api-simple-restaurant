// import router
const router = require('express').Router()

// get list controller
const {
    all,
    create
} = require('../controllers/menuController')


// set route
router.get('/', all)
router.post('/store', create)

module.exports = router