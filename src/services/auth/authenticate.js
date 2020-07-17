/* eslint-disable import/prefer-default-export */
import { validateHash } from '../../utils/hash';
import { getUserByUsername } from '../user/getUser';
import { generate } from '../../utils/jwt';
import { UserUnauthorized } from '../../utils/Errors';

export const authenticateUser = async (username, password) => {
  const user = await getUserByUsername(username);
  console.log(`password: ${password}`);
  console.log(`user: ${user.username}`);
  console.log(`password: ${user.password}`);

  const isAuthenticated = validateHash(password, user.password);
  console.log(`isAuthenticated: ${isAuthenticated}`);

  if (!user || !isAuthenticated) { throw new UserUnauthorized('Invalid Username/Password'); }

  const {
    id, firstName, lastName, email, birthDate,
  } = user;
  return generate({
    id, firstName, lastName, email, birthDate, username,
  });
};
