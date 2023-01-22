const express = require('express');
const controller = require('./characters.controllers');

const router = express.Router();

router.get('/', controller.indexGet);
router.post('/create', controller.createPost);
router.delete('/:id', controller.deleteCharacter);
router.put('/edit/:id', controller.editPut);
router.get('/:name', controller.getByName)

module.exports = router;