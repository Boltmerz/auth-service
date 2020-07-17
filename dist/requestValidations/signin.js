"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _expressValidator = require("express-validator");

var _regExp = _interopRequireDefault(require("./regExp"));

var signinBodyValidators = [(0, _expressValidator.check)('username', 'name is invalid!').isString().isLength({
  min: 3
}), (0, _expressValidator.check)('password', 'password is invalid!').custom(function (val) {
  return _regExp["default"].test(val);
})];
var _default = signinBodyValidators;
exports["default"] = _default;
//# sourceMappingURL=signin.js.map