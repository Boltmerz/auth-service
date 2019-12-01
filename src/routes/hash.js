import crypto from 'crypto';

const hashUser = async (req, res) => {
  try {
    const { body } = req;
    const crptoHash = crypto.createHash('sha256');
    crptoHash.update(JSON.stringify(body));
    const hash = crptoHash.digest('hex');
    res.status(200).json({ hash });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export default hashUser;
