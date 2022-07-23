const IStrategy = require("./infra/protocols/IStrategy");

class Strategy extends IStrategy {
  constructor(repository) {
    super();
    this._repository = repository;
  }
  create(item) {
    this._repository.create(item);
  }
  getById(id) {
    return this._repository.getById(id);
  }
  getAll(query) {
    return this._repository.getAll(query);
  }
  update(id, item) {
    this._repository.update(id, item);
  }
  delete(id) {
    this._repository.delete(id);
  }
}

module.exports = Strategy;
