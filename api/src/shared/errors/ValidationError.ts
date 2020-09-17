import { ValidationError as IValidation } from 'class-validator';

// Validation error class custom.
// That class is return-based on class-validation's validation type

class ValidationError {
  public readonly message : Array<any>;
  public readonly status_code : number;

  constructor(errors : Array<IValidation>, status_code = 401) {
    this.message = errors.map(error => error.constraints);
    this.status_code = status_code;
  }
}

export default ValidationError;
