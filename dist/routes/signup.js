"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _httpStatus = _interopRequireDefault(require("http-status"));

var _crypto = _interopRequireDefault(require("crypto"));

var _addUser = _interopRequireDefault(require("../services/user/addUser"));

var signup = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, email, firstName, lastName, username, password, birthDate, crptoHash, hashPassword, user;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, email = _req$body.email, firstName = _req$body.firstName, lastName = _req$body.lastName, username = _req$body.username, password = _req$body.password, birthDate = _req$body.birthDate;
            crptoHash = _crypto["default"].createHash('sha256');
            crptoHash.update(password);
            hashPassword = crptoHash.digest('hex');
            _context.next = 7;
            return (0, _addUser["default"])({
              email: email,
              firstName: firstName,
              lastName: lastName,
              username: username,
              password: hashPassword,
              birthDate: birthDate
            });

          case 7:
            user = _context.sent;
            return _context.abrupt("return", res.status(_httpStatus["default"].OK).json({
              id: user.id
            }));

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", res.status(_context.t0.status || _httpStatus["default"].INTERNAL_SERVER_ERROR).send(_context.t0.message));

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 11]]);
  }));

  return function signup(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var _default = signup;
exports["default"] = _default;
//# sourceMappingURL=signup.js.map