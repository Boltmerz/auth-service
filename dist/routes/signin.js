"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _httpStatus = _interopRequireDefault(require("http-status"));

var _authenticate = require("../services/auth/authenticate");

var signin = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, username, password, token;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, username = _req$body.username, password = _req$body.password;
            _context.next = 4;
            return (0, _authenticate.authenticateUser)(username, password);

          case 4:
            token = _context.sent;
            return _context.abrupt("return", res.status(_httpStatus["default"].OK).json({
              token: token
            }));

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            console.log('=================');
            console.log(_context.t0.message);
            return _context.abrupt("return", res.status(_context.t0.status || _httpStatus["default"].INTERNAL_SERVER_ERROR).send(_context.t0.message));

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));

  return function signin(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var _default = signin;
exports["default"] = _default;
//# sourceMappingURL=signin.js.map