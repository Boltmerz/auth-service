import { DataTypes } from 'sequelize';

const User = {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  email: {
    type: DataTypes.STRING,
  },
  username: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
  firstName: {
    type: DataTypes.STRING,
  },
  lastName: {
    type: DataTypes.STRING,
  },
  birthDate: {
    type: DataTypes.DATE,
  },
  loginHash: {
    type: DataTypes.STRING,
  },
  avatarIid: {
    type: DataTypes.INTEGER,
    allowNull: true,
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
};

export default User;
