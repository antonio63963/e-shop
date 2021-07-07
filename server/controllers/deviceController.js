const uuid = require('uuid');
const path = require('path');
const { Device } = require('../models/models');
const apiError = require('../error/apiError');

class DeviceController {

  async create(req, res) {
    try{
      const {name, price, brand, brandId, typeId, info} = req.body;
      const {img} = req.files;
      let fileName = uuid.v4() + ".jpg";
      img.mv(path.resolve(__dirname, '..', 'static', fileName))
  
      const device = await Device.create({name, prce, brand, typeId, img: fileName});
      return res.json(device);
    } catch(err){
      next(apiError.badRequest(err.message))
    }
  }
  async getAll(req, res)

  async getOne(req, res)
  
}

module.exports = new DeviceController();