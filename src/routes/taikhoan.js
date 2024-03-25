const express = require('express');
const router = express.Router();

const taikhoanController = require('../controller/TaiKhoanController');

router.get('/:slug', taikhoanController.show);
router.get('/', taikhoanController.index);
router.post('/', taikhoanController.create);
router.put('/:id', taikhoanController.update);
router.delete('/:id', taikhoanController.delete);

module.exports = router;
