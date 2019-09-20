import hash from 'object-hash';

const hashUser = async (req, res) => {
  try {
    const { body } = req;
    res.status(200).json({ hash: hash(body) });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export default hashUser;
