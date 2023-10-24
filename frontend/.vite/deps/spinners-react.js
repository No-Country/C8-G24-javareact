import {
  require_react
} from "./chunk-ZAUFE7H7.js";
import {
  __toESM
} from "./chunk-UXIASGQL.js";

// node_modules/spinners-react/lib/esm/withSharedProps-a1728349.js
var import_react = __toESM(require_react());
var __assign = function() {
  __assign = Object.assign || function __assign2(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __rest(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
var defaultProps = {
  color: "#38ad48",
  enabled: true,
  size: 50,
  style: {}
};
var normalizeSize = function(size) {
  return parseFloat(size.toString()).toString() === size.toString() ? size + "px" : size.toString();
};
var withSharedProps = function(Component10) {
  var Wrapper = function(props) {
    var color = props.color, enabled = props.enabled, size = props.size, style = props.style, otherProps = __rest(props, ["color", "enabled", "size", "style"]);
    var componentProps = __assign(__assign({}, otherProps), { style: __assign({ color, overflow: "visible", width: normalizeSize(size) }, style) });
    if (!enabled)
      return null;
    return import_react.default.createElement(Component10, __assign({}, componentProps));
  };
  Wrapper.defaultProps = defaultProps;
  return Wrapper;
};

// node_modules/spinners-react/lib/esm/SpinnerCircular.js
var import_react2 = __toESM(require_react());

// node_modules/spinners-react/lib/esm/style-inject.es-fc9e633e.js
var defaultProps2 = {
  speed: 100,
  still: false,
  thickness: 100
};
var secondaryColorDefaultProps = __assign(__assign({}, defaultProps2), { secondaryColor: "rgba(0,0,0,0.44)" });
function styleInject(css, ref) {
  if (ref === void 0)
    ref = {};
  var insertAt = ref.insertAt;
  if (!css || typeof document === "undefined") {
    return;
  }
  var head = document.head || document.getElementsByTagName("head")[0];
  var style = document.createElement("style");
  style.type = "text/css";
  if (insertAt === "top") {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

// node_modules/spinners-react/lib/esm/SpinnerCircular.js
var css_248z = "@keyframes spinners-react-circular{0%{stroke-dashoffset:306}50%{stroke-dasharray:40,134}to{stroke-dasharray:1,174;stroke-dashoffset:132}}";
styleInject(css_248z);
var Component = function(_a) {
  var secondaryColor = _a.secondaryColor, speed = _a.speed, still = _a.still, thickness = _a.thickness, svgProps = __rest(_a, ["secondaryColor", "speed", "still", "thickness"]);
  var strokeWidth = 4 * (thickness / 100);
  var circleStyle = !still ? { animation: "spinners-react-circular " + 140 / speed + "s linear infinite" } : {};
  return import_react2.default.createElement(
    "svg",
    __assign({ fill: "none" }, svgProps, { viewBox: "0 0 66 66" }),
    import_react2.default.createElement("circle", { cx: "33", cy: "33", fill: "none", r: "28", stroke: secondaryColor, strokeWidth }),
    import_react2.default.createElement("circle", { cx: "33", cy: "33", fill: "none", r: "28", stroke: "currentColor", strokeDasharray: "1, 174", strokeDashoffset: "306", strokeLinecap: "round", strokeWidth, style: circleStyle })
  );
};
Component.defaultProps = secondaryColorDefaultProps;
var SpinnerCircular = withSharedProps(Component);

// node_modules/spinners-react/lib/esm/SpinnerCircularFixed.js
var import_react3 = __toESM(require_react());
var css_248z2 = "@keyframes spinners-react-circular-fixed{0%{stroke-dashoffset:325}to{stroke-dashoffset:151}}";
styleInject(css_248z2);
var Component2 = function(_a) {
  var secondaryColor = _a.secondaryColor, speed = _a.speed, still = _a.still, thickness = _a.thickness, svgProps = __rest(_a, ["secondaryColor", "speed", "still", "thickness"]);
  var strokeWidth = 4 * (thickness / 100);
  var circleStyle = !still ? { animation: "spinners-react-circular-fixed " + 140 / speed + "s linear infinite" } : {};
  return import_react3.default.createElement(
    "svg",
    __assign({ fill: "none" }, svgProps, { viewBox: "0 0 66 66" }),
    import_react3.default.createElement("circle", { cx: "33", cy: "33", fill: "none", r: "28", stroke: secondaryColor, strokeWidth }),
    import_react3.default.createElement("circle", { cx: "33", cy: "33", fill: "none", r: "28", stroke: "currentColor", strokeDasharray: "40, 134", strokeDashoffset: "325", strokeLinecap: "round", strokeWidth, style: circleStyle })
  );
};
Component2.defaultProps = secondaryColorDefaultProps;
var SpinnerCircularFixed = withSharedProps(Component2);

// node_modules/spinners-react/lib/esm/SpinnerCircularSplit.js
var import_react4 = __toESM(require_react());
var css_248z3 = "@keyframes spinners-react-circular-split{0%{stroke-dashoffset:1;stroke-dasharray:5,170}10%{stroke-dashoffset:13;stroke-dasharray:30,145}13%{stroke-dashoffset:-11;stroke-dasharray:5,145}50%{stroke-dasharray:5,0,5,165;stroke-dashoffset:-82}51%{stroke-dasharray:2,0,2,139;stroke-dashoffset:-85}61%{stroke-dasharray:15,0,15,165;stroke-dashoffset:-72}64%{stroke-dasharray:5,20,5,145;stroke-dashoffset:-72}}";
styleInject(css_248z3);
var Component3 = function(_a) {
  var secondaryColor = _a.secondaryColor, speed = _a.speed, still = _a.still, thickness = _a.thickness, svgProps = __rest(_a, ["secondaryColor", "speed", "still", "thickness"]);
  var strokeWidth = 4 * (thickness / 100);
  var circleStyle = !still ? { animation: "spinners-react-circular-split " + 140 / speed + "s linear infinite" } : {};
  return import_react4.default.createElement(
    "svg",
    __assign({ fill: "none" }, svgProps, { viewBox: "0 0 66 66" }),
    import_react4.default.createElement("circle", { cx: "33", cy: "33", fill: "none", r: "28", stroke: secondaryColor, strokeWidth }),
    import_react4.default.createElement("circle", { cx: "33", cy: "33", fill: "none", r: "28", stroke: "currentColor", strokeDasharray: "5, 170", strokeDashoffset: "1", strokeLinecap: "round", strokeWidth, style: circleStyle, transform: "rotate(-90 33 33)" })
  );
};
Component3.defaultProps = secondaryColorDefaultProps;
var SpinnerCircularSplit = withSharedProps(Component3);

// node_modules/spinners-react/lib/esm/SpinnerInfinity.js
var import_react5 = __toESM(require_react());
var css_248z4 = "@keyframes spinners-react-infinity{0%{stroke-dasharray:1,347;stroke-dashoffset:75}25%,75%{stroke-dasharray:17,330}50%{stroke-dasharray:1,347}to{stroke-dasharray:1,347;stroke-dashoffset:423}}";
styleInject(css_248z4);
var Component4 = function(_a) {
  var secondaryColor = _a.secondaryColor, speed = _a.speed, still = _a.still, thickness = _a.thickness, svgProps = __rest(_a, ["secondaryColor", "speed", "still", "thickness"]);
  var strokeWidth = 7 * (thickness / 100);
  var dashStyle = !still ? { animation: "spinners-react-infinity " + 140 / speed + "s linear infinite" } : {};
  return import_react5.default.createElement(
    "svg",
    __assign({ fill: "none", viewBox: "0 0 131 55" }, svgProps),
    import_react5.default.createElement(
      "defs",
      null,
      import_react5.default.createElement("path", { d: "M46.57 45.5138C36.346 55.4954 19.8919 55.4954 9.66794 45.5138C-0.55598 35.5321 -0.55598 19.4678 9.66794 9.48624C19.8919 -0.495412 36.346 -0.495412 46.57 9.48624L84.4303 45.5138C94.6543 55.4954 111.108 55.4954 121.332 45.5138C131.556 35.5321 131.556 19.4678 121.332 9.48624C111.108 -0.495412 94.6543 -0.495412 84.4303 9.48624L46.57 45.5138Z", id: "spinners-react-infinity-path" })
    ),
    import_react5.default.createElement("use", { stroke: secondaryColor, strokeWidth, xlinkHref: "#spinners-react-infinity-path" }),
    import_react5.default.createElement("use", { fill: "none", stroke: "currentColor", strokeDasharray: "1, 347", strokeDashoffset: "75", strokeLinecap: "round", strokeWidth, style: dashStyle, xlinkHref: "#spinners-react-infinity-path" })
  );
};
Component4.defaultProps = secondaryColorDefaultProps;
var SpinnerInfinity = withSharedProps(Component4);

// node_modules/spinners-react/lib/esm/SpinnerDotted.js
var import_react6 = __toESM(require_react());
var css_248z5 = "@keyframes spinners-react-dotted-center{0%,15%,85%,to{transform:scale(0)}40%,50%{transform:scale(1)}84%{transform:scale(.45)}}@keyframes spinners-react-dotted-shrink{50%{transform:translate(0)}}";
styleInject(css_248z5);
var coords = [
  { x: 22, y: -20 },
  { x: 29, y: 0 },
  { x: 22, y: 20 },
  { x: 0, y: 30 },
  { x: -23, y: 20 },
  { x: -30, y: 0 },
  { x: -23, y: -20 },
  { x: 0, y: -30 }
];
var Component5 = function(_a) {
  var speed = _a.speed, still = _a.still, thickness = _a.thickness, svgProps = __rest(_a, ["speed", "still", "thickness"]);
  var duration = 200 / speed;
  var generateCircleStyle = function(i) {
    return !still ? { animation: "spinners-react-dotted-shrink " + duration + "s cubic-bezier(0, 0.9, 0, 0.9) " + duration / 20 * i + "s infinite" } : {};
  };
  var centerStyle = !still ? {
    animation: "spinners-react-dotted-center " + duration + "s ease-out infinite",
    transformOrigin: "center"
  } : { display: "none" };
  return import_react6.default.createElement(
    "svg",
    __assign({ fill: "none", viewBox: "0 0 66 66" }, svgProps),
    coords.map(function(c, i) {
      return import_react6.default.createElement("circle", { key: c.x + "-" + c.y, cx: "33", cy: "33", fill: "currentColor", r: 3 * (thickness / 100), style: __assign({ transform: "translate(" + c.x + "px, " + c.y + "px)" }, generateCircleStyle(i)) });
    }),
    import_react6.default.createElement("circle", { cx: "33", cy: "33", fill: "currentColor", r: 6 * (thickness / 100), style: centerStyle })
  );
};
Component5.defaultProps = defaultProps2;
var SpinnerDotted = withSharedProps(Component5);

// node_modules/spinners-react/lib/esm/SpinnerRound.js
var import_react7 = __toESM(require_react());
var css_248z6 = "@keyframes spinners-react-round{27%,73%{r:2px;stroke-width:4}}";
styleInject(css_248z6);
var Component6 = function(_a) {
  var speed = _a.speed, still = _a.still, thickness = _a.thickness, svgProps = __rest(_a, ["speed", "still", "thickness"]);
  var strokeWidth = 3 * (thickness / 100);
  var circleStyle = {
    animation: "spinners-react-round " + 140 / speed + "s ease-in-out infinite",
    transformOrigin: "center"
  };
  if (still)
    circleStyle.animation = "none";
  return import_react7.default.createElement(
    "svg",
    __assign({ fill: "none" }, svgProps, { viewBox: "0 0 66 66" }),
    import_react7.default.createElement("circle", { cx: "33", cy: "33", fill: "none", r: 28, stroke: "currentColor", strokeWidth, style: circleStyle })
  );
};
Component6.defaultProps = defaultProps2;
var SpinnerRound = withSharedProps(Component6);

// node_modules/spinners-react/lib/esm/SpinnerRoundOutlined.js
var import_react8 = __toESM(require_react());
var css_248z7 = "@keyframes spinners-react-round-outlined{35%,65%{r:2px;stroke-width:4}}";
styleInject(css_248z7);
var animations = [
  {
    r: 2
  },
  {
    name: "spinners-react-round-outlined",
    r: 14
  },
  {
    name: "spinners-react-round-outlined",
    r: 28
  }
];
var Component7 = function(_a) {
  var speed = _a.speed, still = _a.still, thickness = _a.thickness, svgProps = __rest(_a, ["speed", "still", "thickness"]);
  var strokeWidth = 3 * (thickness / 100);
  return import_react8.default.createElement("svg", __assign({ fill: "none" }, svgProps, { viewBox: "0 0 66 66" }), animations.map(function(animation, i) {
    return import_react8.default.createElement("circle", { key: "spinner-round-outlined-r" + animation.r, cx: "33", cy: "33", fill: "none", r: animation.r, stroke: "currentColor", strokeWidth: i ? strokeWidth : 4, style: animation.name && !still ? { animation: animation.name + " " + 140 / speed + "s ease-in-out infinite" } : {} });
  }));
};
Component7.defaultProps = defaultProps2;
var SpinnerRoundOutlined = withSharedProps(Component7);

// node_modules/spinners-react/lib/esm/SpinnerRoundFilled.js
var import_react9 = __toESM(require_react());
var css_248z8 = "@keyframes spinners-react-round-filled-outer{40%,60%{transform:scale(0)}}@keyframes spinners-react-round-filled-center{30%,70%{transform:scale(0)}}@keyframes spinners-react-round-filled-inner{20%,80%{transform:scale(0)}}";
styleInject(css_248z8);
var animations2 = [
  { r: 4 },
  {
    name: "spinners-react-round-filled-inner",
    r: 12.66
  },
  {
    name: "spinners-react-round-filled-center",
    r: 20.32
  },
  {
    name: "spinners-react-round-filled-outer",
    r: 27.5
  }
];
var Component8 = function(_a) {
  var speed = _a.speed, still = _a.still, thickness = _a.thickness, svgProps = __rest(_a, ["speed", "still", "thickness"]);
  return import_react9.default.createElement("svg", __assign({ fill: "none" }, svgProps, { viewBox: "0 0 66 66" }), animations2.map(function(animation) {
    return import_react9.default.createElement("circle", { key: animation.name || "still", cx: "33", cy: "33", fill: "currentColor", r: animation.r * (animation.name ? thickness / 100 : 1), style: {
      opacity: animation.name ? 0.25 : 1,
      transformOrigin: "center",
      animation: !animation.name || still ? "none" : animation.name + " " + 140 / speed + "s ease-in-out infinite"
    } });
  }));
};
Component8.defaultProps = defaultProps2;
var SpinnerRoundFilled = withSharedProps(Component8);

// node_modules/spinners-react/lib/esm/SpinnerDiamond.js
var import_react10 = __toESM(require_react());
var css_248z9 = "@keyframes spinners-react-diamond{25%{transform:translate(30px,-30px)}50%{transform:translate(60px)}75%{transform:translate(30px,30px)}}";
styleInject(css_248z9);
var coords2 = [
  { x: 3, y: 48 },
  { x: 18, y: 33 },
  { x: 18, y: 48 },
  { x: 18, y: 63 },
  { x: 33, y: 48 },
  // -------------
  { x: 33, y: 18 },
  { x: 33, y: 33 },
  { x: 33, y: 63 },
  { x: 33, y: 78 },
  { x: 48, y: 3 },
  { x: 48, y: 18 },
  { x: 48, y: 33 },
  { x: 48, y: 48 },
  { x: 48, y: 63 },
  { x: 48, y: 78 },
  { x: 48, y: 93 },
  { x: 63, y: 18 },
  { x: 63, y: 33 },
  { x: 63, y: 48 },
  { x: 63, y: 63 },
  { x: 63, y: 78 },
  { x: 78, y: 33 },
  { x: 78, y: 48 },
  { x: 78, y: 63 },
  { x: 93, y: 48 }
];
var Component9 = function(_a) {
  var secondaryColor = _a.secondaryColor, speed = _a.speed, still = _a.still, thickness = _a.thickness, svgProps = __rest(_a, ["secondaryColor", "speed", "still", "thickness"]);
  var diamondStyle = {
    animation: "spinners-react-diamond " + 140 / speed + "s steps(2, end) infinite"
  };
  if (still)
    diamondStyle.animation = "none";
  return import_react10.default.createElement(
    "svg",
    __assign({ fill: "currentColor" }, svgProps, { viewBox: "0 0 96 96" }),
    coords2.map(function(c) {
      return import_react10.default.createElement("circle", { key: c.x + "-" + c.y, cx: c.x, cy: c.y, fill: secondaryColor, r: 2.5 * (thickness / 100) });
    }),
    import_react10.default.createElement("g", { style: diamondStyle }, coords2.filter(function(c, i) {
      return i < 5;
    }).map(function(c) {
      return import_react10.default.createElement("circle", { key: "h-" + c.x + "-" + c.y, cx: c.x, cy: c.y, r: 3.5 * (thickness / 100) });
    }))
  );
};
Component9.defaultProps = secondaryColorDefaultProps;
var SpinnerRomb = withSharedProps(Component9);
var SpinnerDiamond = withSharedProps(Component9);

// node_modules/spinners-react/lib/esm/index.js
var import_react11 = __toESM(require_react());
export {
  Component5 as Component,
  SpinnerCircular,
  SpinnerCircularFixed,
  SpinnerCircularSplit,
  SpinnerDiamond,
  SpinnerDotted,
  SpinnerInfinity,
  SpinnerRomb,
  SpinnerRound,
  SpinnerRoundFilled,
  SpinnerRoundOutlined
};
/*! Bundled license information:

spinners-react/lib/esm/withSharedProps-a1728349.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)
*/
//# sourceMappingURL=spinners-react.js.map
