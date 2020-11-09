
class ServerlessError {
  constructor(e) {
    if (e instanceof Error) {
      throw e;
    }
    const { code, message } = e;
    const ex = new Error(message);
    ex.name = code;
    throw new Error(ex);
  }

}

module.exports = ServerlessError;