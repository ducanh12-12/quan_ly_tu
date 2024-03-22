const express = require('express');
const router = express.Router();

const veThamQuanController = require('../controller/VeThamQuanController');

router.get('/:slug', veThamQuanController.show);
router.get('/', veThamQuanController.index);
router.post('/', veThamQuanController.create);
router.put('/:id', veThamQuanController.update);
router.delete('/:id', veThamQuanController.delete);

module.exports = router;
