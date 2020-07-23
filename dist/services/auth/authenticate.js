"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authenticateUser = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _hash = require("../../utils/hash");

var _getUser = require("../user/getUser");

var _jwt = require("../../utils/jwt");

var _Errors = require("../../utils/Errors");

var authenticateUser = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(username, password) {
    var user, isAuthenticated, id, firstName, lastName, email, birthDate;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _getUser.getUserByUsername)(username);

          case 2:
            user = _context.sent;
            console.log("user: ".concat(user.id));
            console.log("password: ".concat(user.password));
            _context.next = 7;
            return (0, _hash.validateHash)(password, user.password);

          case 7:
            isAuthenticated = _context.sent;
            console.log("isAuthenticated: ".concat(isAuthenticated));

            if (!(!user || !isAuthenticated)) {
              _context.next = 11;
              break;
            }

            throw new _Errors.UserUnauthorized('Invalid Username/Password');

          case 11:
            id = user.id, firstName = user.firstName, lastName = user.lastName, email = user.email, birthDate = user.birthDate;
            return _context.abrupt("return", (0, _jwt.generate)({
              id: id,
              firstName: firstName,
              lastName: lastName,
              email: email,
              birthDate: birthDate,
              username: username
            }));

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function authenticateUser(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.authenticateUser = authenticateUser;
//# sourceMappingURL=authenticate.js.map