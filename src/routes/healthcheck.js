export default async (req, res) => (res.send({
  status: 'OK',
  envirement: process.env.NODE_ENV,
}));
