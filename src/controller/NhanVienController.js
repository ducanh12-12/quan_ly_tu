const NhanVienModel = require('../models/nhanvien');
class NhanVienController {
  index (req, res) {
    NhanVienModel.findAll()
      .then(nhanViens => {
        res.status(200).json(nhanViens); // danh sách tất cả các đối tượng Động Vật
      })
      .catch(err => {
        console.error('Lỗi khi lấy dữ liệu:', err);
      });
  }

  create (req, res) {
    const params = req.body;
    NhanVienModel.create(params)
      .then((nhanvien) => {
        res.status(201).json(nhanvien);
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
    NhanVienModel.update(params, condition)
      .then((i) => {
        NhanVienModel.findByPk(id).then((nhanvien) => {
          res.status(201).json(nhanvien);
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
    NhanVienModel.destroy(condition)
      .then(() => {
        res.status(201).json('Thành công!');
      })
      .catch((err) => { console.log(err); });
  }

  show (req, res, next) {
    const id = req.params.slug;
    NhanVienModel.findByPk(id)
      .then((nhanvien) => {
        console.log(nhanvien);
        res.status(200).json(nhanvien);
      })
      .catch(next);
  }
}
module.exports = new NhanVienController();
