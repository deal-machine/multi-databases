class NotImplementedMethodException extends Error {
  constructor() {
    super("Not implemented Method");
  }
}

module.exports = NotImplementedMethodException;
