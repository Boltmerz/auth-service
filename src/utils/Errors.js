import httpStatus from 'http-status';

export class UserUnauthorized extends Error {
  constructor(message) {
    super(message);
    this.status = httpStatus.UNAUTHORIZED;
  }
}
export class NotFound extends Error {
  constructor(message) {
    super(message);
    this.status = httpStatus.NOT_FOUND;
  }
}
