import Hash from 'object-hash';

const hashUser = async (req, res) => {
  try {
    const { body } = req;
    const hash = Hash(body);
    res.status(200).json({ hash });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export default hashUser;
