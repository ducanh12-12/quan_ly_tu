const express = require('express');
const router = express.Router();

const HabitatController = require('../controller/HabitatController');

router.get('/:slug', HabitatController.show);
router.get('/', HabitatController.index);
router.post('/', HabitatController.create);
router.put('/:id', HabitatController.update);
router.delete('/:id', HabitatController.delete);

module.exports = router;
