import jwt from 'jsonwebtoken';
import config from '../config';

const generate = (data, expiresIn = '2h') => {
  const {
    firstName, lastName, email, birthDate, loginHash,
  } = data;
  return jwt.sign({
    firstName, lastName, email, birthDate, loginHash,
  }, config.secretKey, { expiresIn });
};

const decode = (token) => {
  return jwt.verify(token, config.secretKey);
};

export { generate, decode };
