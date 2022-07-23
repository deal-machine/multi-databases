const NotImplementedMethodException = require("../../errors/NotImplementedMethod");

class IRepository {
  create() {
    throw new NotImplementedMethodException();
  }
  getById() {
    throw new NotImplementedMethodException();
  }
  getAll() {
    throw new NotImplementedMethodException();
  }
  update() {
    throw new NotImplementedMethodException();
  }
  delete() {
    throw new NotImplementedMethodException();
  }
}

module.exports = IRepository;
