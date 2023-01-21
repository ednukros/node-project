const express = require('express');
const controller = require('./index.controller');

const router = express.Router();

router.get('/index', controller.indexGet);
router.get('/status', controller.statusGet);

module.exports = router;