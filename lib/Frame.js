"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Context = require("./Context");

var _Content = _interopRequireDefault(require("./Content"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Frame = /*#__PURE__*/function (_Component) {
  _inherits(Frame, _Component);

  var _super = _createSuper(Frame);

  // React warns when you render directly into the body since browser extensions
  // also inject into the body and can mess up React. For this reason
  // initialContent is expected to have a div inside of the body
  // element that we render react into.
  function Frame(props, context) {
    var _this;

    _classCallCheck(this, Frame);

    _this = _super.call(this, props, context);

    _defineProperty(_assertThisInitialized(_this), "handleLoad", function () {
      _this.forceUpdate();
    });

    _this._isMounted = false;
    return _this;
  }

  _createClass(Frame, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._isMounted = true;
      var doc = this.getDoc();

      if (doc && doc.readyState === 'complete') {
        this.forceUpdate();
      } else {
        this.node.addEventListener('load', this.handleLoad);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._isMounted = false;
      this.node.removeEventListener('load', this.handleLoad);
    }
  }, {
    key: "getDoc",
    value: function getDoc() {
      return this.node ? this.node.contentDocument : null; // eslint-disable-line
    }
  }, {
    key: "getMountTarget",
    value: function getMountTarget() {
      var doc = this.getDoc();

      if (this.props.mountTarget) {
        return doc.querySelector(this.props.mountTarget);
      }

      return doc.body.children[0];
    }
  }, {
    key: "renderFrameContents",
    value: function renderFrameContents() {
      if (!this._isMounted) {
        return null;
      }

      var doc = this.getDoc();

      if (!doc) {
        return null;
      }

      var contentDidMount = this.props.contentDidMount;
      var contentDidUpdate = this.props.contentDidUpdate;
      var win = doc.defaultView || doc.parentView;

      var contents = /*#__PURE__*/_react["default"].createElement(_Content["default"], {
        contentDidMount: contentDidMount,
        contentDidUpdate: contentDidUpdate
      }, /*#__PURE__*/_react["default"].createElement(_Context.FrameContextProvider, {
        value: {
          document: doc,
          window: win
        }
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "frame-content"
      }, this.props.children)));

      if (doc.body.children.length < 1) {
        doc.open('text/html', 'replace');
        doc.write(this.props.initialContent);
        doc.close();
      }

      var mountTarget = this.getMountTarget();
      return [/*#__PURE__*/_reactDom["default"].createPortal(this.props.head, this.getDoc().head), /*#__PURE__*/_reactDom["default"].createPortal(contents, mountTarget)];
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var props = _objectSpread(_objectSpread({}, this.props), {}, {
        children: undefined // The iframe isn't ready so we drop children from props here. #12, #17

      });

      delete props.head;
      delete props.initialContent;
      delete props.mountTarget;
      delete props.contentDidMount;
      delete props.contentDidUpdate;
      return /*#__PURE__*/_react["default"].createElement("iframe", _extends({}, props, {
        ref: function ref(node) {
          _this2.node = node;
        }
      }), this.renderFrameContents());
    }
  }]);

  return Frame;
}(_react.Component);

exports["default"] = Frame;

_defineProperty(Frame, "propTypes", {
  style: _propTypes["default"].object,
  // eslint-disable-line
  head: _propTypes["default"].node,
  initialContent: _propTypes["default"].string,
  mountTarget: _propTypes["default"].string,
  contentDidMount: _propTypes["default"].func,
  contentDidUpdate: _propTypes["default"].func,
  children: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].arrayOf(_propTypes["default"].element)])
});

_defineProperty(Frame, "defaultProps", {
  style: {},
  head: null,
  children: undefined,
  mountTarget: undefined,
  contentDidMount: function contentDidMount() {},
  contentDidUpdate: function contentDidUpdate() {},
  initialContent: '<!DOCTYPE html><html><head></head><body><div class="frame-root"></div></body></html>'
});