const TaiKhoanModel = require('../models/taikhoan');
class TaiKhoanController {
  index (req, res) {
    TaiKhoanModel.findAll()
      .then(taiKhoans => {
        res.status(200).json(taiKhoans); // danh sách tất cả các đối tượng Động Vật
      })
      .catch(err => {
        console.error('Lỗi khi lấy dữ liệu:', err);
      });
  }

  create (req, res) {
    const params = req.body;
    TaiKhoanModel.create(params)
      .then((taikhoan) => {
        res.status(201).json(taikhoan);
      })
      .catch((err) => { console.log(err); });
  }

  update (req, res) {
    const params = req.body;
    const id = req.params.id;
    const condition = {
      where: {
        ID: id,
      },
    };
    TaiKhoanModel.update(params, condition)
      .then((i) => {
        TaiKhoanModel.findByPk(id).then((taikhoan) => {
          res.status(201).json(taikhoan);
        });
      })
      .catch((err) => { console.log(err); });
  }

  delete (req, res) {
    const id = req.params.id;
    const condition = {
      where: {
        ID: id,
      },
    };
    TaiKhoanModel.destroy(condition)
      .then(() => {
        res.status(201).json('Thành công!');
      })
      .catch((err) => { console.log(err); });
  }

  show (req, res, next) {
    const id = req.params.slug;
    TaiKhoanModel.findByPk(id)
      .then((taikhoan) => {
        console.log(taikhoan);
        res.status(200).json(taikhoan);
      })
      .catch(next);
  }
}
module.exports = new TaiKhoanController();
