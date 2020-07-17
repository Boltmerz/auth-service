"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("dotenv/config");

var config = {
  app: {
    env: process.env.NODE_ENV || 'DEV',
    port: process.env.PORT || 3000,
    secretKey: process.env.SECRET_KEY
  },
  bcrypt: {
    saltRounds: 10
  },
  postgres: {
    host: process.env.PG_HOST,
    database: process.env.PG_DB,
    port: process.env.PG_PORT,
    username: process.env.PG_USERNAME,
    password: process.env.PG_PASSWORD
  }
};
var _default = config;
exports["default"] = _default;
//# sourceMappingURL=index.js.map