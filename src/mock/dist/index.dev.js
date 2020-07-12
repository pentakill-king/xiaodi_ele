"use strict";

var _mockjs = _interopRequireDefault(require("mockjs"));

var _home = _interopRequireDefault(require("./home"));

var _user = _interopRequireDefault(require("./user"));

var _permission = _interopRequireDefault(require("./permission"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 设置延时
_mockjs["default"].setup({
  timeout: '200-1000'
}); //首页相关


_mockjs["default"].mock(/\/home\/getData/, 'get', _home["default"].getStatisticalData); // 用户相关


_mockjs["default"].mock(/\/user\/getUser/, 'get', _user["default"].getUserList);

_mockjs["default"].mock(/\/user\/del/, 'get', _user["default"].deleteUser);

_mockjs["default"].mock(/\/user\/batchremove/, 'get', _user["default"].batchremove);

_mockjs["default"].mock(/\/user\/add/, 'post', _user["default"].createUser);

_mockjs["default"].mock(/\/user\/edit/, 'post', _user["default"].updateUser);

_mockjs["default"].mock(/\/home\/getData/, 'get', _home["default"].getStatisticalData); // 权限相关


_mockjs["default"].mock(/\/permission\/getMenu/, 'post', _permission["default"].getMenu);