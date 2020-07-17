"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hash = hash;
exports.validateHash = validateHash;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var SALT_ROUNDS = 11;

function hash(_x) {
  return _hash.apply(this, arguments);
}

function _hash() {
  _hash = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(plainText) {
    var hashed;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _bcrypt["default"].hash(plainText, SALT_ROUNDS);

          case 2:
            hashed = _context.sent;
            return _context.abrupt("return", hashed);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _hash.apply(this, arguments);
}

function validateHash(_x2, _x3) {
  return _validateHash.apply(this, arguments);
}

function _validateHash() {
  _validateHash = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(plainText, hashedPassword) {
    var isSamePassword;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _bcrypt["default"].compare(plainText, hashedPassword);

          case 2:
            isSamePassword = _context2.sent;
            return _context2.abrupt("return", isSamePassword);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _validateHash.apply(this, arguments);
}
//# sourceMappingURL=hash.js.map