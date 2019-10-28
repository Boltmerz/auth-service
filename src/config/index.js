const dotenv = require('dotenv');

dotenv.config();

const config = {
  env: process.env.NODE_ENV || 'DEV',
  port: process.env.PORT || 3000,
  secretKey: process.env.SECRET_KEY,
};

export default config;
