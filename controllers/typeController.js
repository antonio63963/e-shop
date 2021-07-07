const { Type } = rquire('../models/models');
const apiError = require('../error/apiError');

class TypeController {

  async create(req, res) {
    const { name } = req.body;
    const type = await Type.create({name});
    res.json(type)
  }

  async getAll(req, res) {
    const a = await req.body;
  }
  
}

module.exports = new TypeController();