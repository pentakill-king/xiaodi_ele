"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mockjs = _interopRequireDefault(require("mockjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 图表数据
var List = [];
var _default = {
  getStatisticalData: function getStatisticalData() {
    for (var i = 0; i < 7; i++) {
      List.push(_mockjs["default"].mock({
        vue: _mockjs["default"].Random["float"](100, 8000, 0, 2),
        wechat: _mockjs["default"].Random["float"](100, 8000, 0, 2),
        ES6: _mockjs["default"].Random["float"](100, 8000, 0, 2),
        Redis: _mockjs["default"].Random["float"](100, 8000, 0, 2),
        React: _mockjs["default"].Random["float"](100, 8000, 0, 2),
        springboot: _mockjs["default"].Random["float"](100, 8000, 0, 2)
      }));
    }

    return {
      code: 20000,
      data: {
        // 饼图
        videoData: [{
          name: 'springboot',
          value: _mockjs["default"].Random["float"](1000, 10000, 0, 2)
        }, {
          name: 'vue',
          value: _mockjs["default"].Random["float"](1000, 10000, 0, 2)
        }, {
          name: '小程序',
          value: _mockjs["default"].Random["float"](1000, 10000, 0, 2)
        }, {
          name: 'ES6',
          value: _mockjs["default"].Random["float"](1000, 10000, 0, 2)
        }, {
          name: 'Redis',
          value: _mockjs["default"].Random["float"](1000, 10000, 0, 2)
        }, {
          name: 'React',
          value: _mockjs["default"].Random["float"](1000, 10000, 0, 2)
        }],
        // 柱状图
        userData: [{
          date: '周一',
          "new": _mockjs["default"].Random.integer(1, 100),
          active: _mockjs["default"].Random.integer(100, 1000)
        }, {
          date: '周二',
          "new": _mockjs["default"].Random.integer(1, 100),
          active: _mockjs["default"].Random.integer(100, 1000)
        }, {
          date: '周三',
          "new": _mockjs["default"].Random.integer(1, 100),
          active: _mockjs["default"].Random.integer(100, 1000)
        }, {
          date: '周四',
          "new": _mockjs["default"].Random.integer(1, 100),
          active: _mockjs["default"].Random.integer(100, 1000)
        }, {
          date: '周五',
          "new": _mockjs["default"].Random.integer(1, 100),
          active: _mockjs["default"].Random.integer(100, 1000)
        }, {
          date: '周六',
          "new": _mockjs["default"].Random.integer(1, 100),
          active: _mockjs["default"].Random.integer(100, 1000)
        }, {
          date: '周日',
          "new": _mockjs["default"].Random.integer(1, 100),
          active: _mockjs["default"].Random.integer(100, 1000)
        }],
        // 折线图
        orderData: {
          date: ['20191001', '20191002', '20191003', '20191004', '20191005', '20191006', '20191007'],
          data: List
        },
        tableData: [{
          name: 'ES6',
          todayBuy: _mockjs["default"].Random["float"](100, 1000, 0, 2),
          monthBuy: _mockjs["default"].Random["float"](3000, 5000, 0, 2),
          totalBuy: _mockjs["default"].Random["float"](40000, 1000000, 0, 2)
        }, {
          name: '小程序',
          todayBuy: _mockjs["default"].Random["float"](100, 1000, 0, 2),
          monthBuy: _mockjs["default"].Random["float"](3000, 5000, 0, 2),
          totalBuy: _mockjs["default"].Random["float"](40000, 1000000, 0, 2)
        }, {
          name: 'Vue',
          todayBuy: _mockjs["default"].Random["float"](100, 1000, 0, 2),
          monthBuy: _mockjs["default"].Random["float"](3000, 5000, 0, 2),
          totalBuy: _mockjs["default"].Random["float"](40000, 1000000, 0, 2)
        }, {
          name: 'springboot',
          todayBuy: _mockjs["default"].Random["float"](100, 1000, 0, 2),
          monthBuy: _mockjs["default"].Random["float"](3000, 5000, 0, 2),
          totalBuy: _mockjs["default"].Random["float"](40000, 1000000, 0, 2)
        }, {
          name: 'React',
          todayBuy: _mockjs["default"].Random["float"](100, 1000, 0, 2),
          monthBuy: _mockjs["default"].Random["float"](3000, 5000, 0, 2),
          totalBuy: _mockjs["default"].Random["float"](40000, 1000000, 0, 2)
        }, {
          name: 'Redis',
          todayBuy: _mockjs["default"].Random["float"](100, 1000, 0, 2),
          monthBuy: _mockjs["default"].Random["float"](3000, 5000, 0, 2),
          totalBuy: _mockjs["default"].Random["float"](40000, 1000000, 0, 2)
        }]
      }
    };
  }
};
exports["default"] = _default;