export default async (req, res) => {
  console.log('healthcheck....')
  res.send({
    status: 'OK',
    envirement: process.env.NODE_ENV,
  });
}
