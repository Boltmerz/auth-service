import { compare } from 'bcrypt';
import { generate } from '../utils/jwt';
import models from '../models';

const signin = async (req, res) => {
  const { username, password } = req.body;
  const user = await models.findAll({
    where: {
      username,
    },
  });

  if (!user) { return res.status(404).end(); }
  const isAuthenticated = await compare(password, user[0].password);
  if (!isAuthenticated) { return res.status(401).send('invalid password'); }
  const {
    id, firstName, lastName, email, birthDate,
  } = user[0];
  const token = generate({
    id, firstName, lastName, email, birthDate, username,
  });
  return res.status(200).json({ token });
};
export default signin;
