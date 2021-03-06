"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotFound = exports.UserUnauthorized = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _wrapNativeSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/wrapNativeSuper"));

var _httpStatus = _interopRequireDefault(require("http-status"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var UserUnauthorized = /*#__PURE__*/function (_Error) {
  (0, _inherits2["default"])(UserUnauthorized, _Error);

  var _super = _createSuper(UserUnauthorized);

  function UserUnauthorized(message) {
    var _this;

    (0, _classCallCheck2["default"])(this, UserUnauthorized);
    _this = _super.call(this, message);
    _this.status = _httpStatus["default"].UNAUTHORIZED;
    return _this;
  }

  return UserUnauthorized;
}( /*#__PURE__*/(0, _wrapNativeSuper2["default"])(Error));

exports.UserUnauthorized = UserUnauthorized;

var NotFound = /*#__PURE__*/function (_Error2) {
  (0, _inherits2["default"])(NotFound, _Error2);

  var _super2 = _createSuper(NotFound);

  function NotFound(message) {
    var _this2;

    (0, _classCallCheck2["default"])(this, NotFound);
    _this2 = _super2.call(this, message);
    _this2.status = _httpStatus["default"].NOT_FOUND;
    return _this2;
  }

  return NotFound;
}( /*#__PURE__*/(0, _wrapNativeSuper2["default"])(Error));

exports.NotFound = NotFound;
//# sourceMappingURL=Errors.js.map