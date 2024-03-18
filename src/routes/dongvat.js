const express = require('express');
const router = express.Router();

const dongvatController = require('../controller/DongvatController');

router.get('/:slug', dongvatController.show);
router.get('/', dongvatController.index);
router.post('/', dongvatController.create);

module.exports = router;
