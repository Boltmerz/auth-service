import httpStatus from 'http-status';
import crypto from 'crypto';
import createUser from '../services/user/addUser';

const signup = async (req, res) => {
  try {
    const {
      email, firstName, lastName, username, password, birthDate,
    } = req.body;
    const crptoHash = crypto.createHash('sha256');
    crptoHash.update(password);
    const hashPassword = crptoHash.digest('hex');
    const user = await createUser({
      email, firstName, lastName, username, password: hashPassword, birthDate,
    });
    return res.status(httpStatus.OK).json({ id: user.id });
  } catch (error) {
    return res.status(error.status || httpStatus.INTERNAL_SERVER_ERROR).send(error.message);
  }
};
export default signup;
