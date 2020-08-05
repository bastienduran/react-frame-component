

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FrameContextConsumer = exports.FrameContextProvider = exports.FrameContext = void 0;

const _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

let doc;
let win;

if (typeof document !== 'undefined') {
  doc = document;
}

if (typeof window !== 'undefined') {
  win = window;
}

const FrameContext = /* #__PURE__ */_react.default.createContext({
  document: doc,
  window: win
});

exports.FrameContext = FrameContext;
let FrameContextProvider = FrameContext.Provider,
    FrameContextConsumer = FrameContext.Consumer;
exports.FrameContextConsumer = FrameContextConsumer;
exports.FrameContextProvider = FrameContextProvider;