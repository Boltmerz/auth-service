import { check } from 'express-validator';
import passwordRegex from './regExp';

const signinBodyValidators = [
  check('username', 'name is invalid!').isString().isLength({ min: 3 }),
  check('password', 'password is invalid!').custom((val) => passwordRegex.test(val)),
];

export default signinBodyValidators;
