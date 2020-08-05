"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FrameContextConsumer = exports.FrameContextProvider = exports.FrameContext = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var doc;
var win;

if (typeof document !== 'undefined') {
  doc = document;
}

if (typeof window !== 'undefined') {
  win = window;
}

var FrameContext = /*#__PURE__*/_react["default"].createContext({
  document: doc,
  window: win
});

exports.FrameContext = FrameContext;
var FrameContextProvider = FrameContext.Provider,
    FrameContextConsumer = FrameContext.Consumer;
exports.FrameContextConsumer = FrameContextConsumer;
exports.FrameContextProvider = FrameContextProvider;