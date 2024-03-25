const express = require('express');
const router = express.Router();

const nccController = require('../controller/NCCController');

router.get('/:slug', nccController.show);
router.get('/', nccController.index);
router.post('/', nccController.create);
router.put('/:id', nccController.update);
router.delete('/:id', nccController.delete);
module.exports = router;
