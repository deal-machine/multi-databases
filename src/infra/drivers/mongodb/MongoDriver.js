const IRepository = require("../../protocols/IRepository");

class MongoRepository extends IRepository {
  constructor() {
    super();
  }
  create(item) {
    console.log("mongo: create item ", item);
  }
  getById(id) {
    console.log("mongo: get item by id ", id);
  }
  getAll(query) {
    console.log("mongo: get all ", query);
  }
  update(id, item) {
    console.log("mongo: update item by id", item, id);
  }
  delete(id) {
    console.log("mongo: delete by id ", id);
  }
}

module.exports = MongoRepository;
