import 'dotenv/config';

const config = {
  app: {
    env: process.env.NODE_ENV || 'DEV',
    port: process.env.PORT || 3000,
  },
  token: {
    expiresIn: process.env.TOKEN_EXPIRES_IN || '1h',
    secretKey: process.env.ACCESS_TOKEN_SECRET,
  },
  bcrypt: {
    saltRounds: 10,
  },
  postgres: {
    host: process.env.PG_HOST,
    database: process.env.PG_DB,
    port: process.env.PG_PORT,
    username: process.env.PG_USERNAME,
    password: process.env.PG_PASSWORD,
  },
};

export default config;
