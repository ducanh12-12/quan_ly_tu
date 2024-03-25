const ThucanModel = require('../models/thucan');
class ThucanController {
  index (req, res) {
    ThucanModel.findAll()
      .then(thucans => {
        res.status(200).json(thucans); // danh sách tất cả các đối tượng
      })
      .catch(err => {
        console.error('Lỗi khi lấy dữ liệu:', err);
      });
  }

  create (req, res) {
    const params = req.body;
    ThucanModel.create(params)
      .then((thucan) => {
        res.status(201).json(thucan);
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
    ThucanModel.update(params, condition)
      .then((i) => {
        ThucanModel.findByPk(id).then((thucan) => {
          res.status(201).json(thucan);
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
    ThucanModel.destroy(condition)
      .then(() => {
        res.status(201).json('Thành công!');
      })
      .catch((err) => { console.log(err); });
  }

  show (req, res, next) {
    const id = req.params.slug;
    ThucanModel.findByPk(id)
      .then((thucan) => {
        console.log(thucan);
        res.status(200).json(thucan);
      })
      .catch(next);
  }
}
module.exports = new ThucanController();
