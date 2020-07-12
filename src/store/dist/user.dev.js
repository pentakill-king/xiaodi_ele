"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsCookie = _interopRequireDefault(require("js-cookie"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  state: {
    token: ''
  },
  mutations: {
    setToken: function setToken(state, val) {
      state.token = val;

      _jsCookie["default"].set('token', val);
    },
    clearToken: function clearToken(state) {
      state.token = '';

      _jsCookie["default"].remove('token');
    },
    getToken: function getToken(state) {
      state.token = _jsCookie["default"].get('token');
    }
  },
  actions: {}
};
exports["default"] = _default;