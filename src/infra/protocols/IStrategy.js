const NotImplementedMethodException = require("./../../errors/NotImplementedMethod");

class IStrategy {
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

module.exports = IStrategy;
