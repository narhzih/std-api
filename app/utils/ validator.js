class Validator {
  errorBag = [];
  isError = true;
  request = null;
  constructor(req) {
    this.request = req;
  }

  validateRegisterRequest() {
    let msg = "";
    if (
      !this.request.username ||
      !this.request.email ||
      !this.request.password ||
      !this.request.passwordConfirm
    ) {
      this.isError = true;
      this.errorBag.push("Please provide all inputs");
    }

    if (this.request.password !== this.request.passwordConfirm) {
      this.isError = true;
      this.errorBag.push = "Passwords do not match";
    }

    // Check for existing email || username
  }
}
