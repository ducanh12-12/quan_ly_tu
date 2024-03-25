const express = require('express');
const router = express.Router();

const nhanvienController = require('../controller/NhanVienController');

router.get('/:slug', nhanvienController.show);
router.get('/', nhanvienController.index);
router.post('/', nhanvienController.create);
router.put('/:id', nhanvienController.update);
router.delete('/:id', nhanvienController.delete);

module.exports = router;
