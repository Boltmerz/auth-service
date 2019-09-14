const hashUser = async (req, res) => {
  const { body } = req.body;
  res.send(`Your sent body: ${body}`);
};

export default hashUser;
