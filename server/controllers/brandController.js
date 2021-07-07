const { Brand } = rquire('../models/models');
const apiError = require('../error/apiError');

class BrandController {

  async create(req, res) {
    const { name } = req.body;
    const brand = await Type.create({name});
    res.json(type)
  }

  async getAll(req, res) {
    const brands = await Brand.findAll();
    return res.json(brands);
  }
  
}

module.exports = new BrandController();