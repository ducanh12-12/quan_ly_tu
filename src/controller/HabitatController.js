const habitatModel = require('../models/HabitatModel');
class HabitatController {
  index (req, res) {
    habitatModel.findAll()
      .then(habitats => {
        res.status(200).json(habitats);
      })
      .catch(err => {
        console.error('Lỗi khi lấy dữ liệu:', err);
      });
  }

  create (req, res) {
    const params = req.body;
    habitatModel.create(params)
      .then((habitat) => {
        res.status(201).json(habitat);
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
    habitatModel.update(params, condition)
      .then((i) => {
        habitatModel.findByPk(id).then((habitat) => {
          res.status(201).json(habitat);
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
    habitatModel.destroy(condition)
      .then(() => {
        res.status(201).json('Thành công!');
      })
      .catch((err) => { console.log(err); });
  }

  show (req, res, next) {
    const id = req.params.slug;
    habitatModel.findByPk(id)
      .then((habitat) => {
        console.log(habitat);
        res.status(200).json(habitat);
      })
      .catch(next);
  }
}
module.exports = new HabitatController();
