// import router
const router = require('express').Router()

// get list controller
const {
    all,
    create,
    find,
    update
} = require('../controllers/orderController')


// set route
router.get('/', all)
router.post('/store', create)
router.get('/check/:id', find)
router.put('/update/:id', update)

module.exports = router