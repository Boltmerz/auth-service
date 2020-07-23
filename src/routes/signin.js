import httpStatus from 'http-status';
import { authenticateUser } from '../services/auth/authenticate';

const signin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const token = await authenticateUser(username, password);
    return res.status(httpStatus.OK).json({ token });
  } catch (error) {
    return res.status(error.status || httpStatus.INTERNAL_SERVER_ERROR).send(error.message);
  }
};
export default signin;
