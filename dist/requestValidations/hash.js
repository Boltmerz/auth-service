"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _expressValidator = require("express-validator");

var hashBodyValidators = [(0, _expressValidator.check)('name', 'name is invalid!').isString().isLength({
  min: 3
}), (0, _expressValidator.check)('email', 'email is invalid!').isEmail(), (0, _expressValidator.check)('birthDate', 'date of birth is invalid!').isISO8601(), (0, _expressValidator.check)('location', 'location is invalid!').isString()];
var _default = hashBodyValidators;
exports["default"] = _default;
//# sourceMappingURL=hash.js.map