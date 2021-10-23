class Validator {
  errorBag = [];
  isError = true;
  request = null;
  constructor(req) {
    this.request = req;
  }
}
