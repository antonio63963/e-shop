const apiError = require('../error/apiError');

class UserController {
  async registration(req, res) {

  }
  async login(req, res) {
    
  }
  async check(req, res, next) {
    if(!req.query.id) {
      return next(apiError.badRequest(`Id is not set`));
    }
    res.json({messageA: 'sdfsdf'})
  }
}

module.exports = new UserController;