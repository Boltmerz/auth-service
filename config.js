import dotenv from 'dotenv';

dotenv.config();

export default {
  env: process.env.NODE_ENV || 'DEVEKOPMENT',
  PORT: process.env.PORT || 3000,
};
