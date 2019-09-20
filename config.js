const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  env: process.env.NODE_ENV || 'DEVEKOPMENT',
  PORT: process.env.PORT || 3000,
};
