"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 创建一个axios实例
var service = _axios["default"].create({
  // 请求超时时间
  timeout: 3000
}); // 请求拦截器


service.interceptors.request.use(function (config) {
  return config;
}, function (err) {
  console.log(err);
});
service.interceptors.response.use(function (response) {
  var res = {};
  res.status = response.status;
  res.data = response.data;
  return res;
}, function (err) {
  console.log(err);
});
var _default = service;
exports["default"] = _default;