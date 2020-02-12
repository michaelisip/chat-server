const express = require('express')
const router = express.Router()

const UserController = require('../controllers/usercontroller')

router.get('/users/', UserController.index)
router.get('/users/:id', UserController.show)
router.post('/users/', UserController.store)
router.put('/users/:id', UserController.update)
router.delete('/users/:id', UserController.delete)

module.exports = router