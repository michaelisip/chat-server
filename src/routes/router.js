const express = require('express')
const router = express.Router()

const usersRoute = require('./users')
const roomsRoute = require('./rooms')

router.get('/', (req, res) => {
    res.send('Server is up and running...')
})

router.use('', usersRoute)
router.use('', roomsRoute)

module.exports = router