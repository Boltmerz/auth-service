import { check } from 'express-validator';

const hashBodyValidators = [
  check('name', 'name is invalid!').isString().isLength({ min: 3 }),
  check('email', 'email is invalid!').isEmail(),
  check('dob', 'date of birth is invalid!').isISO8601(),
  check('location', 'location is invalid!').isString(),
];

export default hashBodyValidators;
