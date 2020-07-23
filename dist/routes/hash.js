"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _crypto = _interopRequireDefault(require("crypto"));

var hashUser = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var body, crptoHash, hash;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            try {
              body = req.body;
              crptoHash = _crypto["default"].createHash('sha256');
              crptoHash.update(JSON.stringify(body));
              hash = crptoHash.digest('hex');
              res.status(200).json({
                hash: hash
              });
            } catch (error) {
              res.status(500).json({
                error: error
              });
            }

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function hashUser(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var _default = hashUser;
exports["default"] = _default;
//# sourceMappingURL=hash.js.map