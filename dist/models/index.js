"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _config = _interopRequireDefault(require("../config"));

var _user = _interopRequireDefault(require("./user"));

var sequelize = new _sequelize["default"](_config["default"].postgres.database, _config["default"].postgres.username, _config["default"].postgres.password, {
  host: _config["default"].postgres.host,
  dialect: 'postgres',
  dialectOptions: {
    ssl: true
  }
});
var User = sequelize.define('user', _user["default"]);
sequelize.sync();
var _default = {
  User: User
};
exports["default"] = _default;
//# sourceMappingURL=index.js.map