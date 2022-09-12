function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var Milky = function Milky(name, props) {
  var el = document.createElement(name);
  Object.keys(props || {}).forEach(function (key) {
    if (key === "style") {
      Object.keys(props[key]).forEach(function (sk) {
        el.style[sk] = props[key][sk];
      });
    } else {
      el[key] = props[key];
    }
  });

  var addChild = function addChild(child) {
    if (Array.isArray(child)) {
      child.forEach(function (c) {
        return addChild(c);
      });
    } else if (_typeof(child) === "object") {
      el.appendChild(child);
    } else {
      el.appendChild(document.createTextNode(child));
    }
  };

  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  (children || []).forEach(function (c) {
    return addChild(c);
  });
  return el;
};

export default Milky;