const uuid = require('uuid');
const path = require('path');
const { Device } = require('../models/models');
const apiError = require('../error/apiError');

class DeviceController {

  async create(req, res, next) {
    try{
      const {name, price, brandId, typeId, info} = req.body;
      console.log(req.files.img);
      console.log(req.body);
      const {img} = req.files;
      let fileName = uuid.v4() + ".jpg";
      console.log('FILE NAME: ', fileName);
      img.mv(path.resolve(__dirname, '..', 'static', fileName))
  
      const device = await Device.create({name, price, brandId, typeId, img: fileName, info});
      return res.json(device);
      
    } catch(err){
      next(apiError.badRequest(err.message))
    }
  }
  async getAll(req, res) {
    const {brand, typeId} = req.body;
    let devices;
    if(!brand && !typeId) {
      deveices = await Device.findAll();
    }
    if(!brand && typeId) {
      devices = await Device.findAll({where: {typeId}})
    }
    if(brand && !typeId) {
      devices = await Device.findAll({where: {brandId}})
      
    }
    if(brand && typeId) {
      devices = await Device.findAll({where: {brandId, typeId}})

    }
  }

  async getOne(req, res){}
  
}

module.exports = new DeviceController();