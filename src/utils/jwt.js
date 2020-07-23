import jwt from 'jsonwebtoken';
import config from '../config';

const generate = (data, expiresIn = config.token.expiresIn) => {
  const {
    id, firstName, lastName, email, birthDate, loginHash,
  } = data;
  return jwt.sign({
    id, firstName, lastName, email, birthDate, loginHash,
  },
  config.token.secretKey,
  { expiresIn });
};

const decode = (token) => jwt.verify(token, config.app.secretKey);

export { generate, decode };
