"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _healthcheck = _interopRequireDefault(require("./healthcheck"));

var _hash = _interopRequireDefault(require("./hash"));

var _signin = _interopRequireDefault(require("./signin"));

var _signup = _interopRequireDefault(require("./signup"));

var _validateMiddleware = _interopRequireDefault(require("../requestValidations/validateMiddleware"));

var _hash2 = _interopRequireDefault(require("../requestValidations/hash"));

var _signin2 = _interopRequireDefault(require("../requestValidations/signin"));

var router = _express["default"].Router();

router.get('/healthcheck', _healthcheck["default"]);
router.post('/hash', _hash2["default"], _validateMiddleware["default"], _hash["default"]);
router.post('/signin', _signin2["default"], _validateMiddleware["default"], _signin["default"]);
router.post('/signup', _signin2["default"], _validateMiddleware["default"], _signup["default"]);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=index.js.map