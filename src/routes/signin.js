import { generate } from '../utils/jwt';

const signin = async (req, res) => {
  const {
    firstName, lastName, email, birthDate, loginHash,
  } = req.body;
  const token = generate({
    firstName, lastName, email, birthDate, loginHash,
  });
  res.status(200).json({ token });
};
export default signin;
