class AppError {
  public readonly message: string;
  public readonly statusCode;

  constructor(message: string, status = 400) {
    this.message = message;
    this.statusCode = status;
  }
}

export default AppError;
