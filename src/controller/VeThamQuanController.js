const VeThamQuanModel = require('../models/vethamquan');
class VeThamQuanController {
  index(req, res) {
    VeThamQuanModel.findAll()
      .then(veThamQuans => {
        res.status(200).json(veThamQuans);
      })
      .catch(err => {
        console.error('Lỗi khi lấy dữ liệu:', err);
      });
  }

  create(req, res) {
    const params = req.body;
    VeThamQuanModel.create(params)
      .then((vethamquan) => {
        res.status(201).json(vethamquan);
      })
      .catch((err) => { console.log(err); });
  }

  update(req, res) {
    const params = req.body;
    const id = req.params.id;
    const condition = {
      where: {
        IdVe: id,
      },
    };
    VeThamQuanModel.update(params, condition)
      .then((i) => {
        VeThamQuanModel.findByPk(id).then((vethamquan) => {
          res.status(201).json(vethamquan);
        });
      })
      .catch((err) => { console.log(err); });
  }

  delete(req, res) {
    const id = req.params.id;
    const condition = {
      where: {
        IdVe: id,
      },
    };
    VeThamQuanModel.destroy(condition)
      .then(() => {
        res.status(201).json('Thành công!');
      })
      .catch((err) => { console.log(err); });
  }

  show(req, res, next) {
    const id = req.params.slug;
    VeThamQuanModel.findByPk(id)
      .then((vethamquan) => {
        console.log(vethamquan);
        res.status(200).json(vethamquan);
      })
      .catch(next);
  }
}
module.exports = new VeThamQuanController();
