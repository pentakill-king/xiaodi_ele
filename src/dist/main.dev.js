"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("./router"));

var _store = _interopRequireDefault(require("./store"));

require("./assets/scss/reset.scss");

var _elementUi = _interopRequireDefault(require("element-ui"));

require("element-ui/lib/theme-chalk/index.css");

var _config = _interopRequireDefault(require("./api/config"));

require("./mock");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].config.productionTip = false;
_vue["default"].prototype.$http = _config["default"];

_router["default"].beforeEach(function (to, from, next) {
  // 防止刷新后vuex里丢失token
  _store["default"].commit('getToken'); // 防止刷新后vuex里丢失标签列表tagList


  _store["default"].commit('getMenu');

  var token = _store["default"].state.user.token; // 过滤登录页，防止死循环

  if (!token && to.name !== 'login') {
    next({
      name: 'login'
    });
  } else {
    next();
  }
});

_vue["default"].use(_elementUi["default"]);

new _vue["default"]({
  router: _router["default"],
  store: _store["default"],
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount('#app');