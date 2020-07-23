import Sequelize from 'sequelize';
import config from '../config';
import user from './user';

const sequelize = new Sequelize(
  config.postgres.database,
  config.postgres.username,
  config.postgres.password,
  {
    host: config.postgres.host,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
);

const User = sequelize.define('user', user);
sequelize.sync();

export default {
  User,
};
