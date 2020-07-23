"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = require("sequelize");

var User = {
  id: {
    primaryKey: true,
    type: _sequelize.DataTypes.UUID,
    defaultValue: _sequelize.DataTypes.UUIDV4
  },
  email: {
    type: _sequelize.DataTypes.STRING,
    unique: true
  },
  username: {
    type: _sequelize.DataTypes.STRING,
    unique: true
  },
  password: {
    type: _sequelize.DataTypes.STRING
  },
  firstName: {
    type: _sequelize.DataTypes.STRING
  },
  lastName: {
    type: _sequelize.DataTypes.STRING
  },
  birthDate: {
    type: _sequelize.DataTypes.DATE
  },
  loginHash: {
    type: _sequelize.DataTypes.STRING
  },
  avatarIid: {
    type: _sequelize.DataTypes.INTEGER,
    allowNull: true,
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
};
var _default = User;
exports["default"] = _default;
//# sourceMappingURL=user.js.map