const NCCModel = require('../models/ncc');
class NCCController {
  index (req, res) {
    NCCModel.findAll()
      .then(nccs => {
        res.status(200).json(nccs); // danh sách tất cả các đối tượng Động Vật
      })
      .catch(err => {
        console.error('Lỗi khi lấy dữ liệu:', err);
      });
  }

  create (req, res) {
    const params = req.body;
    NCCModel.create(params)
      .then((ncc) => {
        res.status(201).json(ncc);
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
    NCCModel.update(params, condition)
      .then((i) => {
        NCCModel.findByPk(id).then((ncc) => {
          res.status(201).json(ncc);
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
    NCCModel.destroy(condition)
      .then(() => {
        res.status(201).json('Thành công!');
      })
      .catch((err) => { console.log(err); });
  }

  show (req, res, next) {
    const id = req.params.slug;
    NCCModel.findByPk(id)
      .then((ncc) => {
        console.log(ncc);
        res.status(200).json(ncc);
      })
      .catch(next);
  }
}
module.exports = new NCCController();
