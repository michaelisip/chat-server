const express = require('express');

const usersRoute = require('./users');
const roomsRoute = require('./rooms');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Server is up and running...');
});

router.use('', usersRoute);
router.use('', roomsRoute);

module.exports = router;
