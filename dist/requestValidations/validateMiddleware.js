"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _expressValidator = require("express-validator");

var validateRequest = function validateRequest(req, res, next) {
  var errors = (0, _expressValidator.validationResult)(req);
  if (!errors.isEmpty()) return res.status(400).json({
    errors: errors.array()
  });
  return next();
};

var _default = validateRequest;
exports["default"] = _default;
//# sourceMappingURL=validateMiddleware.js.map