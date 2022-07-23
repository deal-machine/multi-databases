const IRepository = require("../../protocols/IRepository");

class PostgresRepository extends IRepository {
  constructor() {
    super();
  }
  create(item) {
    console.log("postgres: create item ", item);
  }
  getById(id) {
    console.log("postgres: get item by id ", id);
  }
  getAll(query) {
    console.log("postgres: get all ", query);
  }
  update(id, item) {
    console.log("postgres: update item by id", item, id);
  }
  delete(id) {
    console.log("postgres: delete by id ", id);
  }
}

module.exports = PostgresRepository;
