const express = require('express');
const controller = require('./characters.controllers');

const router = express.Router();

router.get('/', controller.indexGet);
router.post('/create', controller.createPost);
router.post('/delete', controller.deleteCharacter);
router.post('/edit', controller.editPut);

module.exports = router;