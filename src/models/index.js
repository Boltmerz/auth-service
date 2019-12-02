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
      ssl: true,
    },
  },
);

const User = sequelize.define('user', user);
sequelize.sync();

export default User;
