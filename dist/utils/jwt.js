"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decode = exports.generate = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = _interopRequireDefault(require("../config"));

var generate = function generate(data) {
  var expiresIn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '2h';
  var firstName = data.firstName,
      lastName = data.lastName,
      email = data.email,
      birthDate = data.birthDate,
      loginHash = data.loginHash;
  return _jsonwebtoken["default"].sign({
    firstName: firstName,
    lastName: lastName,
    email: email,
    birthDate: birthDate,
    loginHash: loginHash
  }, _config["default"].app.secretKey, {
    expiresIn: expiresIn
  });
};

exports.generate = generate;

var decode = function decode(token) {
  return _jsonwebtoken["default"].verify(token, _config["default"].app.secretKey);
};

exports.decode = decode;
//# sourceMappingURL=jwt.js.map