const express = require('express');
const router = express.Router();

const thucanController = require('../controller/ThucanController');

router.get('/:slug', thucanController.show);
router.get('/', thucanController.index);
router.post('/', thucanController.create);
router.put('/:id', thucanController.update);
router.delete('/:id', thucanController.delete);

module.exports = router;
