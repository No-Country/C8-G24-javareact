import {
  require_react_dom
} from "./chunk-DZXRV6RW.js";
import {
  require_react
} from "./chunk-ZAUFE7H7.js";
import {
  __commonJS,
  __toESM
} from "./chunk-UXIASGQL.js";

// node_modules/react/cjs/react-jsx-runtime.development.js
var require_react_jsx_runtime_development = __commonJS({
  "node_modules/react/cjs/react-jsx-runtime.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var React6 = require_react();
        var REACT_ELEMENT_TYPE = Symbol.for("react.element");
        var REACT_PORTAL_TYPE = Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = Symbol.for("react.context");
        var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = Symbol.for("react.memo");
        var REACT_LAZY_TYPE = Symbol.for("react.lazy");
        var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
        var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== "object") {
            return null;
          }
          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === "function") {
            return maybeIterator;
          }
          return null;
        }
        var ReactSharedInternals = React6.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function error(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame2.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        var enableScopeAPI = false;
        var enableCacheElement = false;
        var enableTransitionTracing = false;
        var enableLegacyHidden = false;
        var enableDebugTracing = false;
        var REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
        }
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
            // types supported by any Flight configuration anywhere since
            // we don't know which Flight build this will end up being used
            // with.
            type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
              return true;
            }
          }
          return false;
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var displayName = outerType.displayName;
          if (displayName) {
            return displayName;
          }
          var functionName = innerType.displayName || innerType.name || "";
          return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
        }
        function getContextName(type) {
          return type.displayName || "Context";
        }
        function getComponentNameFromType(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === "number") {
              error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
            }
          }
          if (typeof type === "function") {
            return type.displayName || type.name || null;
          }
          if (typeof type === "string") {
            return type;
          }
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return "Fragment";
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_PROFILER_TYPE:
              return "Profiler";
            case REACT_STRICT_MODE_TYPE:
              return "StrictMode";
            case REACT_SUSPENSE_TYPE:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + ".Consumer";
              case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + ".Provider";
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
              case REACT_MEMO_TYPE:
                var outerName = type.displayName || null;
                if (outerName !== null) {
                  return outerName;
                }
                return getComponentNameFromType(type.type) || "Memo";
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return getComponentNameFromType(init(payload));
                } catch (x) {
                  return null;
                }
              }
            }
          }
          return null;
        }
        var assign = Object.assign;
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {
        }
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
          {
            if (disabledDepth === 0) {
              prevLog = console.log;
              prevInfo = console.info;
              prevWarn = console.warn;
              prevError = console.error;
              prevGroup = console.group;
              prevGroupCollapsed = console.groupCollapsed;
              prevGroupEnd = console.groupEnd;
              var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
              };
              Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
              });
            }
            disabledDepth++;
          }
        }
        function reenableLogs() {
          {
            disabledDepth--;
            if (disabledDepth === 0) {
              var props = {
                configurable: true,
                enumerable: true,
                writable: true
              };
              Object.defineProperties(console, {
                log: assign({}, props, {
                  value: prevLog
                }),
                info: assign({}, props, {
                  value: prevInfo
                }),
                warn: assign({}, props, {
                  value: prevWarn
                }),
                error: assign({}, props, {
                  value: prevError
                }),
                group: assign({}, props, {
                  value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                  value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                  value: prevGroupEnd
                })
              });
            }
            if (disabledDepth < 0) {
              error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
            }
          }
        }
        var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
          {
            if (prefix === void 0) {
              try {
                throw Error();
              } catch (x) {
                var match = x.stack.trim().match(/\n( *(at )?)/);
                prefix = match && match[1] || "";
              }
            }
            return "\n" + prefix + name;
          }
        }
        var reentry = false;
        var componentFrameCache;
        {
          var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
          componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
          if (!fn || reentry) {
            return "";
          }
          {
            var frame = componentFrameCache.get(fn);
            if (frame !== void 0) {
              return frame;
            }
          }
          var control;
          reentry = true;
          var previousPrepareStackTrace = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var previousDispatcher;
          {
            previousDispatcher = ReactCurrentDispatcher.current;
            ReactCurrentDispatcher.current = null;
            disableLogs();
          }
          try {
            if (construct) {
              var Fake = function() {
                throw Error();
              };
              Object.defineProperty(Fake.prototype, "props", {
                set: function() {
                  throw Error();
                }
              });
              if (typeof Reflect === "object" && Reflect.construct) {
                try {
                  Reflect.construct(Fake, []);
                } catch (x) {
                  control = x;
                }
                Reflect.construct(fn, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x) {
                  control = x;
                }
                fn.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x) {
                control = x;
              }
              fn();
            }
          } catch (sample) {
            if (sample && control && typeof sample.stack === "string") {
              var sampleLines = sample.stack.split("\n");
              var controlLines = control.stack.split("\n");
              var s2 = sampleLines.length - 1;
              var c2 = controlLines.length - 1;
              while (s2 >= 1 && c2 >= 0 && sampleLines[s2] !== controlLines[c2]) {
                c2--;
              }
              for (; s2 >= 1 && c2 >= 0; s2--, c2--) {
                if (sampleLines[s2] !== controlLines[c2]) {
                  if (s2 !== 1 || c2 !== 1) {
                    do {
                      s2--;
                      c2--;
                      if (c2 < 0 || sampleLines[s2] !== controlLines[c2]) {
                        var _frame = "\n" + sampleLines[s2].replace(" at new ", " at ");
                        if (fn.displayName && _frame.includes("<anonymous>")) {
                          _frame = _frame.replace("<anonymous>", fn.displayName);
                        }
                        {
                          if (typeof fn === "function") {
                            componentFrameCache.set(fn, _frame);
                          }
                        }
                        return _frame;
                      }
                    } while (s2 >= 1 && c2 >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
            reentry = false;
            {
              ReactCurrentDispatcher.current = previousDispatcher;
              reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
          }
          var name = fn ? fn.displayName || fn.name : "";
          var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
          {
            if (typeof fn === "function") {
              componentFrameCache.set(fn, syntheticFrame);
            }
          }
          return syntheticFrame;
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
          {
            return describeNativeComponentFrame(fn, false);
          }
        }
        function shouldConstruct(Component) {
          var prototype = Component.prototype;
          return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
          if (type == null) {
            return "";
          }
          if (typeof type === "function") {
            {
              return describeNativeComponentFrame(type, shouldConstruct(type));
            }
          }
          if (typeof type === "string") {
            return describeBuiltInComponentFrame(type);
          }
          switch (type) {
            case REACT_SUSPENSE_TYPE:
              return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame("SuspenseList");
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x) {
                }
              }
            }
          }
          return "";
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame.setExtraStackFrame(null);
            }
          }
        }
        function checkPropTypes(typeSpecs, values, location, componentName, element) {
          {
            var has = Function.call.bind(hasOwnProperty);
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error$1 = void 0;
                try {
                  if (typeof typeSpecs[typeSpecName] !== "function") {
                    var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                  setCurrentlyValidatingElement(null);
                }
                if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                  loggedTypeFailures[error$1.message] = true;
                  setCurrentlyValidatingElement(element);
                  error("Failed %s type: %s", location, error$1.message);
                  setCurrentlyValidatingElement(null);
                }
              }
            }
          }
        }
        var isArrayImpl = Array.isArray;
        function isArray(a2) {
          return isArrayImpl(a2);
        }
        function typeName(value) {
          {
            var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
            var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            return type;
          }
        }
        function willCoercionThrow(value) {
          {
            try {
              testStringCoercion(value);
              return false;
            } catch (e2) {
              return true;
            }
          }
        }
        function testStringCoercion(value) {
          return "" + value;
        }
        function checkKeyStringCoercion(value) {
          {
            if (willCoercionThrow(value)) {
              error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
              return testStringCoercion(value);
            }
          }
        }
        var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
        var RESERVED_PROPS = {
          key: true,
          ref: true,
          __self: true,
          __source: true
        };
        var specialPropKeyWarningShown;
        var specialPropRefWarningShown;
        var didWarnAboutStringRefs;
        {
          didWarnAboutStringRefs = {};
        }
        function hasValidRef(config) {
          {
            if (hasOwnProperty.call(config, "ref")) {
              var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.ref !== void 0;
        }
        function hasValidKey(config) {
          {
            if (hasOwnProperty.call(config, "key")) {
              var getter = Object.getOwnPropertyDescriptor(config, "key").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.key !== void 0;
        }
        function warnIfStringRefCannotBeAutoConverted(config, self) {
          {
            if (typeof config.ref === "string" && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
              var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
              if (!didWarnAboutStringRefs[componentName]) {
                error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);
                didWarnAboutStringRefs[componentName] = true;
              }
            }
          }
        }
        function defineKeyPropWarningGetter(props, displayName) {
          {
            var warnAboutAccessingKey = function() {
              if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            };
            warnAboutAccessingKey.isReactWarning = true;
            Object.defineProperty(props, "key", {
              get: warnAboutAccessingKey,
              configurable: true
            });
          }
        }
        function defineRefPropWarningGetter(props, displayName) {
          {
            var warnAboutAccessingRef = function() {
              if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            };
            warnAboutAccessingRef.isReactWarning = true;
            Object.defineProperty(props, "ref", {
              get: warnAboutAccessingRef,
              configurable: true
            });
          }
        }
        var ReactElement = function(type, key, ref, self, source, owner, props) {
          var element = {
            // This tag allows us to uniquely identify this as a React Element
            $$typeof: REACT_ELEMENT_TYPE,
            // Built-in properties that belong on the element
            type,
            key,
            ref,
            props,
            // Record the component responsible for creating this element.
            _owner: owner
          };
          {
            element._store = {};
            Object.defineProperty(element._store, "validated", {
              configurable: false,
              enumerable: false,
              writable: true,
              value: false
            });
            Object.defineProperty(element, "_self", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: self
            });
            Object.defineProperty(element, "_source", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: source
            });
            if (Object.freeze) {
              Object.freeze(element.props);
              Object.freeze(element);
            }
          }
          return element;
        };
        function jsxDEV(type, config, maybeKey, source, self) {
          {
            var propName;
            var props = {};
            var key = null;
            var ref = null;
            if (maybeKey !== void 0) {
              {
                checkKeyStringCoercion(maybeKey);
              }
              key = "" + maybeKey;
            }
            if (hasValidKey(config)) {
              {
                checkKeyStringCoercion(config.key);
              }
              key = "" + config.key;
            }
            if (hasValidRef(config)) {
              ref = config.ref;
              warnIfStringRefCannotBeAutoConverted(config, self);
            }
            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                props[propName] = config[propName];
              }
            }
            if (type && type.defaultProps) {
              var defaultProps = type.defaultProps;
              for (propName in defaultProps) {
                if (props[propName] === void 0) {
                  props[propName] = defaultProps[propName];
                }
              }
            }
            if (key || ref) {
              var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
              if (key) {
                defineKeyPropWarningGetter(props, displayName);
              }
              if (ref) {
                defineRefPropWarningGetter(props, displayName);
              }
            }
            return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
          }
        }
        var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement$1(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame$1.setExtraStackFrame(null);
            }
          }
        }
        var propTypesMisspellWarningShown;
        {
          propTypesMisspellWarningShown = false;
        }
        function isValidElement(object) {
          {
            return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
          }
        }
        function getDeclarationErrorAddendum() {
          {
            if (ReactCurrentOwner$1.current) {
              var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);
              if (name) {
                return "\n\nCheck the render method of `" + name + "`.";
              }
            }
            return "";
          }
        }
        function getSourceInfoErrorAddendum(source) {
          {
            if (source !== void 0) {
              var fileName = source.fileName.replace(/^.*[\\\/]/, "");
              var lineNumber = source.lineNumber;
              return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
            }
            return "";
          }
        }
        var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
          {
            var info = getDeclarationErrorAddendum();
            if (!info) {
              var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
              if (parentName) {
                info = "\n\nCheck the top-level render call using <" + parentName + ">.";
              }
            }
            return info;
          }
        }
        function validateExplicitKey(element, parentType) {
          {
            if (!element._store || element._store.validated || element.key != null) {
              return;
            }
            element._store.validated = true;
            var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
            if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
              return;
            }
            ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
            var childOwner = "";
            if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
              childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
            }
            setCurrentlyValidatingElement$1(element);
            error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
            setCurrentlyValidatingElement$1(null);
          }
        }
        function validateChildKeys(node, parentType) {
          {
            if (typeof node !== "object") {
              return;
            }
            if (isArray(node)) {
              for (var i2 = 0; i2 < node.length; i2++) {
                var child = node[i2];
                if (isValidElement(child)) {
                  validateExplicitKey(child, parentType);
                }
              }
            } else if (isValidElement(node)) {
              if (node._store) {
                node._store.validated = true;
              }
            } else if (node) {
              var iteratorFn = getIteratorFn(node);
              if (typeof iteratorFn === "function") {
                if (iteratorFn !== node.entries) {
                  var iterator = iteratorFn.call(node);
                  var step;
                  while (!(step = iterator.next()).done) {
                    if (isValidElement(step.value)) {
                      validateExplicitKey(step.value, parentType);
                    }
                  }
                }
              }
            }
          }
        }
        function validatePropTypes(element) {
          {
            var type = element.type;
            if (type === null || type === void 0 || typeof type === "string") {
              return;
            }
            var propTypes;
            if (typeof type === "function") {
              propTypes = type.propTypes;
            } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
            // Inner props are checked in the reconciler.
            type.$$typeof === REACT_MEMO_TYPE)) {
              propTypes = type.propTypes;
            } else {
              return;
            }
            if (propTypes) {
              var name = getComponentNameFromType(type);
              checkPropTypes(propTypes, element.props, "prop", name, element);
            } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
              propTypesMisspellWarningShown = true;
              var _name = getComponentNameFromType(type);
              error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
            }
            if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
              error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
            }
          }
        }
        function validateFragmentProps(fragment) {
          {
            var keys = Object.keys(fragment.props);
            for (var i2 = 0; i2 < keys.length; i2++) {
              var key = keys[i2];
              if (key !== "children" && key !== "key") {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                setCurrentlyValidatingElement$1(null);
                break;
              }
            }
            if (fragment.ref !== null) {
              setCurrentlyValidatingElement$1(fragment);
              error("Invalid attribute `ref` supplied to `React.Fragment`.");
              setCurrentlyValidatingElement$1(null);
            }
          }
        }
        function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
          {
            var validType = isValidElementType(type);
            if (!validType) {
              var info = "";
              if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
                info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
              }
              var sourceInfo = getSourceInfoErrorAddendum(source);
              if (sourceInfo) {
                info += sourceInfo;
              } else {
                info += getDeclarationErrorAddendum();
              }
              var typeString;
              if (type === null) {
                typeString = "null";
              } else if (isArray(type)) {
                typeString = "array";
              } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
                typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
                info = " Did you accidentally export a JSX literal instead of a component?";
              } else {
                typeString = typeof type;
              }
              error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
            }
            var element = jsxDEV(type, props, key, source, self);
            if (element == null) {
              return element;
            }
            if (validType) {
              var children = props.children;
              if (children !== void 0) {
                if (isStaticChildren) {
                  if (isArray(children)) {
                    for (var i2 = 0; i2 < children.length; i2++) {
                      validateChildKeys(children[i2], type);
                    }
                    if (Object.freeze) {
                      Object.freeze(children);
                    }
                  } else {
                    error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
                  }
                } else {
                  validateChildKeys(children, type);
                }
              }
            }
            if (type === REACT_FRAGMENT_TYPE) {
              validateFragmentProps(element);
            } else {
              validatePropTypes(element);
            }
            return element;
          }
        }
        function jsxWithValidationStatic(type, props, key) {
          {
            return jsxWithValidation(type, props, key, true);
          }
        }
        function jsxWithValidationDynamic(type, props, key) {
          {
            return jsxWithValidation(type, props, key, false);
          }
        }
        var jsx = jsxWithValidationDynamic;
        var jsxs = jsxWithValidationStatic;
        exports.Fragment = REACT_FRAGMENT_TYPE;
        exports.jsx = jsx;
        exports.jsxs = jsxs;
      })();
    }
  }
});

// node_modules/react/jsx-runtime.js
var require_jsx_runtime = __commonJS({
  "node_modules/react/jsx-runtime.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_jsx_runtime_development();
    }
  }
});

// node_modules/classnames/index.js
var require_classnames = __commonJS({
  "node_modules/classnames/index.js"(exports, module) {
    (function() {
      "use strict";
      var hasOwn = {}.hasOwnProperty;
      var nativeCodeString = "[native code]";
      function classNames75() {
        var classes = [];
        for (var i2 = 0; i2 < arguments.length; i2++) {
          var arg = arguments[i2];
          if (!arg)
            continue;
          var argType = typeof arg;
          if (argType === "string" || argType === "number") {
            classes.push(arg);
          } else if (Array.isArray(arg)) {
            if (arg.length) {
              var inner = classNames75.apply(null, arg);
              if (inner) {
                classes.push(inner);
              }
            }
          } else if (argType === "object") {
            if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
              classes.push(arg.toString());
              continue;
            }
            for (var key in arg) {
              if (hasOwn.call(arg, key) && arg[key]) {
                classes.push(key);
              }
            }
          }
        }
        return classes.join(" ");
      }
      if (typeof module !== "undefined" && module.exports) {
        classNames75.default = classNames75;
        module.exports = classNames75;
      } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
        define("classnames", [], function() {
          return classNames75;
        });
      } else {
        window.classNames = classNames75;
      }
    })();
  }
});

// node_modules/flowbite-react/lib/esm/components/Accordion/Accordion.js
var import_jsx_runtime5 = __toESM(require_jsx_runtime());
var import_classnames3 = __toESM(require_classnames());
var import_react6 = __toESM(require_react());

// node_modules/react-icons/lib/esm/iconBase.js
var import_react2 = __toESM(require_react());

// node_modules/react-icons/lib/esm/iconContext.js
var import_react = __toESM(require_react());
var DefaultContext = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
};
var IconContext = import_react.default.createContext && import_react.default.createContext(DefaultContext);

// node_modules/react-icons/lib/esm/iconBase.js
var __assign = function() {
  __assign = Object.assign || function(t2) {
    for (var s2, i2 = 1, n2 = arguments.length; i2 < n2; i2++) {
      s2 = arguments[i2];
      for (var p2 in s2)
        if (Object.prototype.hasOwnProperty.call(s2, p2))
          t2[p2] = s2[p2];
    }
    return t2;
  };
  return __assign.apply(this, arguments);
};
var __rest = function(s2, e2) {
  var t2 = {};
  for (var p2 in s2)
    if (Object.prototype.hasOwnProperty.call(s2, p2) && e2.indexOf(p2) < 0)
      t2[p2] = s2[p2];
  if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++) {
      if (e2.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2]))
        t2[p2[i2]] = s2[p2[i2]];
    }
  return t2;
};
function Tree2Element(tree) {
  return tree && tree.map(function(node, i2) {
    return import_react2.default.createElement(node.tag, __assign({
      key: i2
    }, node.attr), Tree2Element(node.child));
  });
}
function GenIcon(data) {
  return function(props) {
    return import_react2.default.createElement(IconBase, __assign({
      attr: __assign({}, data.attr)
    }, props), Tree2Element(data.child));
  };
}
function IconBase(props) {
  var elem = function(conf) {
    var attr = props.attr, size2 = props.size, title = props.title, svgProps = __rest(props, ["attr", "size", "title"]);
    var computedSize = size2 || conf.size || "1em";
    var className;
    if (conf.className)
      className = conf.className;
    if (props.className)
      className = (className ? className + " " : "") + props.className;
    return import_react2.default.createElement("svg", __assign({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className,
      style: __assign(__assign({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && import_react2.default.createElement("title", null, title), props.children);
  };
  return IconContext !== void 0 ? import_react2.default.createElement(IconContext.Consumer, null, function(conf) {
    return elem(conf);
  }) : elem(DefaultContext);
}

// node_modules/react-icons/hi/index.esm.js
function HiChevronDown(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z", "clipRule": "evenodd" } }] })(props);
}
function HiChevronLeft(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z", "clipRule": "evenodd" } }] })(props);
}
function HiChevronRight(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z", "clipRule": "evenodd" } }] })(props);
}
function HiMoon(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor" }, "child": [{ "tag": "path", "attr": { "d": "M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" } }] })(props);
}
function HiStar(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor" }, "child": [{ "tag": "path", "attr": { "d": "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" } }] })(props);
}
function HiSun(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z", "clipRule": "evenodd" } }] })(props);
}
function HiX(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z", "clipRule": "evenodd" } }] })(props);
}
function HiOutlineChevronDown(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "stroke": "currentColor" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "2", "d": "M19 9l-7 7-7-7" } }] })(props);
}
function HiOutlineChevronLeft(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "stroke": "currentColor" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "2", "d": "M15 19l-7-7 7-7" } }] })(props);
}
function HiOutlineChevronRight(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "stroke": "currentColor" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "2", "d": "M9 5l7 7-7 7" } }] })(props);
}
function HiOutlineChevronUp(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "stroke": "currentColor" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "2", "d": "M5 15l7-7 7 7" } }] })(props);
}
function HiOutlineX(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "stroke": "currentColor" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "2", "d": "M6 18L18 6M6 6l12 12" } }] })(props);
}

// node_modules/flowbite-react/lib/esm/components/Flowbite/ThemeContext.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var import_react3 = __toESM(require_react());

// node_modules/flowbite-react/lib/esm/helpers/window-exists.js
var window_exists_default = () => typeof window !== "undefined";

// node_modules/flowbite-react/lib/esm/theme/default.js
var theme = {
  accordion: {
    base: "divide-y divide-gray-200 border-gray-200 dark:divide-gray-700 dark:border-gray-700",
    content: {
      base: "py-5 px-5 last:rounded-b-lg dark:bg-gray-900 first:rounded-t-lg"
    },
    flush: {
      off: "rounded-lg border",
      on: "border-b"
    },
    title: {
      arrow: {
        base: "h-6 w-6 shrink-0",
        open: {
          off: "",
          on: "rotate-180"
        }
      },
      base: "flex w-full items-center justify-between first:rounded-t-lg last:rounded-b-lg py-5 px-5 text-left font-medium text-gray-500 dark:text-gray-400",
      flush: {
        off: "hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:hover:bg-gray-800 dark:focus:ring-gray-800",
        on: "!bg-transparent dark:!bg-transparent"
      },
      heading: "",
      open: {
        off: "",
        on: "text-gray-900 bg-gray-100 dark:bg-gray-800 dark:text-white"
      }
    }
  },
  alert: {
    base: "flex flex-col gap-2 p-4 text-sm",
    borderAccent: "border-t-4",
    wrapper: "flex items-center",
    closeButton: {
      base: "-mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8 rounded-lg p-1.5 focus:ring-2",
      icon: "w-5 h-5",
      color: {
        info: "bg-blue-100 text-blue-500 hover:bg-blue-200 focus:ring-blue-400 dark:bg-blue-200 dark:text-blue-600 dark:hover:bg-blue-300",
        gray: "bg-gray-100 text-gray-500 hover:bg-gray-200 focus:ring-gray-400 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white",
        failure: "bg-red-100 text-red-500 hover:bg-red-200 focus:ring-red-400 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300",
        success: "bg-green-100 text-green-500 hover:bg-green-200 focus:ring-green-400 dark:bg-green-200 dark:text-green-600 dark:hover:bg-green-300",
        warning: "bg-yellow-100 text-yellow-500 hover:bg-yellow-200 focus:ring-yellow-400 dark:bg-yellow-200 dark:text-yellow-600 dark:hover:bg-yellow-300"
      }
    },
    color: {
      info: "text-blue-700 bg-blue-100 border-blue-500 dark:bg-blue-200 dark:text-blue-800",
      gray: "text-gray-700 bg-gray-100 border-gray-500 dark:bg-gray-700 dark:text-gray-300",
      failure: "text-red-700 bg-red-100 border-red-500 dark:bg-red-200 dark:text-red-800",
      success: "text-green-700 bg-green-100 border-green-500 dark:bg-green-200 dark:text-green-800",
      warning: "text-yellow-700 bg-yellow-100 border-yellow-500 dark:bg-yellow-200 dark:text-yellow-800"
    },
    icon: "mr-3 inline h-5 w-5 flex-shrink-0",
    rounded: "rounded-lg"
  },
  avatar: {
    base: "flex justify-center items-center space-x-4",
    bordered: "p-1 ring-2",
    img: {
      off: "rounded relative overflow-hidden bg-gray-100 dark:bg-gray-600",
      on: "rounded",
      placeholder: "absolute w-auto h-auto text-gray-400 -bottom-1"
    },
    rounded: "!rounded-full",
    color: {
      dark: "ring-gray-800 dark:ring-gray-800",
      failure: "ring-red-500 dark:ring-red-700",
      gray: "ring-gray-500 dark:ring-gray-400",
      info: "ring-blue-400 dark:ring-blue-800",
      light: "ring-gray-300 dark:ring-gray-500",
      purple: "ring-purple-500 dark:ring-purple-600",
      success: "ring-green-500 dark:ring-green-500",
      warning: "ring-yellow-300 dark:ring-yellow-500",
      pink: "ring-pink-500 dark:ring-pink-500"
    },
    size: {
      xs: "w-6 h-6",
      sm: "w-8 h-8",
      md: "w-10 h-10",
      lg: "w-20 h-20",
      xl: "w-36 h-36"
    },
    stacked: "ring-2 ring-gray-300 dark:ring-gray-500",
    status: {
      away: "bg-yellow-400",
      base: "absolute h-3.5 w-3.5 rounded-full border-2 border-white dark:border-gray-800",
      busy: "bg-red-400",
      offline: "bg-gray-400",
      online: "bg-green-400"
    },
    statusPosition: {
      "bottom-left": "-bottom-1 -left-1",
      "bottom-center": "-botton-1 center",
      "bottom-right": "-bottom-1 -right-1",
      "top-left": "-top-1 -left-1",
      "top-center": "-top-1 center",
      "top-right": "-top-1 -right-1",
      "center-right": "center -right-1",
      center: "center center",
      "center-left": "center -left-1"
    },
    initials: {
      text: "font-medium text-gray-600 dark:text-gray-300",
      base: "inline-flex overflow-hidden relative justify-center items-center w-10 h-10 bg-gray-100 dark:bg-gray-600"
    }
  },
  avatarGroupCounter: {
    base: "relative flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 rounded-full ring-2 ring-gray-300 hover:bg-gray-600 dark:ring-gray-500"
  },
  avatarGroup: {
    base: "flex mb-5 -space-x-4"
  },
  badge: {
    base: "flex h-fit items-center gap-1 font-semibold",
    color: {
      info: "bg-blue-100 text-blue-800 dark:bg-blue-200 dark:text-blue-800 group-hover:bg-blue-200 dark:group-hover:bg-blue-300",
      gray: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 group-hover:bg-gray-200 dark:group-hover:bg-gray-600",
      failure: "bg-red-100 text-red-800 dark:bg-red-200 dark:text-red-900 group-hover:bg-red-200 dark:group-hover:bg-red-300",
      success: "bg-green-100 text-green-800 dark:bg-green-200 dark:text-green-900 group-hover:bg-green-200 dark:group-hover:bg-green-300",
      warning: "bg-yellow-100 text-yellow-800 dark:bg-yellow-200 dark:text-yellow-900 group-hover:bg-yellow-200 dark:group-hover:bg-yellow-300",
      indigo: "bg-indigo-100 text-indigo-800 dark:bg-indigo-200 dark:text-indigo-900 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-300",
      purple: "bg-purple-100 text-purple-800 dark:bg-purple-200 dark:text-purple-900 group-hover:bg-purple-200 dark:group-hover:bg-purple-300",
      pink: "bg-pink-100 text-pink-800 dark:bg-pink-200 dark:text-pink-900 group-hover:bg-pink-200 dark:group-hover:bg-pink-300"
    },
    href: "group",
    icon: {
      off: "rounded px-2 py-0.5",
      on: "rounded-full p-1.5",
      size: {
        xs: "w-3 h-3",
        sm: "w-3.5 h-3.5"
      }
    },
    size: {
      xs: "p-1 text-xs",
      sm: "p-1.5 text-sm"
    }
  },
  breadcrumb: {
    item: {
      base: "group flex items-center",
      chevron: "mx-1 h-6 w-6 text-gray-400 group-first:hidden md:mx-2",
      href: {
        off: "flex items-center text-sm font-medium text-gray-500 dark:text-gray-400",
        on: "flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
      },
      icon: "mr-2 h-4 w-4"
    },
    list: "flex items-center"
  },
  button: {
    base: "group flex h-min items-center justify-center p-0.5 text-center font-medium focus:z-10",
    fullSized: "w-full",
    color: {
      dark: "text-white bg-gray-800 border border-transparent hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 disabled:hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700 dark:disabled:hover:bg-gray-800",
      failure: "text-white bg-red-700 border border-transparent hover:bg-red-800 focus:ring-4 focus:ring-red-300 disabled:hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 dark:disabled:hover:bg-red-600",
      gray: "text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 disabled:hover:bg-white focus:ring-blue-700 focus:text-blue-700 dark:bg-transparent dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-2 dark:disabled:hover:bg-gray-800",
      info: "text-white bg-blue-700 border border-transparent hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 disabled:hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 dark:disabled:hover:bg-blue-600",
      light: "text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 disabled:hover:bg-white dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700",
      purple: "text-white bg-purple-700 border border-transparent hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 disabled:hover:bg-purple-700 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 dark:disabled:hover:bg-purple-600",
      success: "text-white bg-green-700 border border-transparent hover:bg-green-800 focus:ring-4 focus:ring-green-300 disabled:hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 dark:disabled:hover:bg-green-600",
      warning: "text-white bg-yellow-400 border border-transparent hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 disabled:hover:bg-yellow-400 dark:focus:ring-yellow-900 dark:disabled:hover:bg-yellow-400"
    },
    disabled: "cursor-not-allowed opacity-50",
    gradient: {
      cyan: "text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800",
      failure: "text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800",
      info: "text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 ",
      lime: "text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:ring-lime-300 dark:focus:ring-lime-800",
      pink: "text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-pink-300 dark:focus:ring-pink-800",
      purple: "text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800",
      success: "text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800",
      teal: "text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-teal-300 dark:focus:ring-teal-800"
    },
    gradientDuoTone: {
      cyanToBlue: "text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800",
      greenToBlue: "text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800",
      pinkToOrange: "text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-800",
      purpleToBlue: "text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800",
      purpleToPink: "text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800",
      redToYellow: "text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:ring-red-100 dark:focus:ring-red-400",
      tealToLime: "text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 hover:!text-gray-900 focus:ring-4 focus:ring-lime-200 dark:focus:ring-teal-700"
    },
    inner: {
      base: "flex items-center",
      position: {
        none: "",
        start: "rounded-r-none",
        middle: "!rounded-none",
        end: "rounded-l-none"
      },
      outline: "border border-transparent"
    },
    label: "ml-2 inline-flex h-4 w-4 items-center justify-center rounded-full bg-blue-200 text-xs font-semibold text-blue-800",
    outline: {
      color: {
        gray: "border border-gray-900 dark:border-white",
        default: "border-0",
        light: ""
      },
      off: "",
      on: "bg-white text-gray-900 transition-all duration-75 ease-in group-hover:bg-opacity-0 group-hover:text-inherit dark:bg-gray-900 dark:text-white",
      pill: {
        off: "rounded-md",
        on: "rounded-full"
      }
    },
    pill: {
      off: "rounded-lg",
      on: "rounded-full"
    },
    size: {
      xs: "text-xs px-2 py-1",
      sm: "text-sm px-3 py-1.5",
      md: "text-sm px-4 py-2",
      lg: "text-base px-5 py-2.5",
      xl: "text-base px-6 py-3"
    }
  },
  buttonGroup: {
    base: "inline-flex",
    position: {
      none: "focus:!ring-2",
      start: "rounded-r-none",
      middle: "!rounded-none border-l-0 pl-0",
      end: "rounded-l-none border-l-0 pl-0"
    }
  },
  card: {
    base: "flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800",
    children: "flex h-full flex-col justify-center gap-4 p-6",
    horizontal: {
      off: "flex-col",
      on: "flex-col md:max-w-xl md:flex-row"
    },
    href: "hover:bg-gray-100 dark:hover:bg-gray-700",
    img: {
      base: "",
      horizontal: {
        off: "rounded-t-lg",
        on: "h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
      }
    }
  },
  carousel: {
    base: "relative h-full w-full",
    indicators: {
      active: {
        off: "bg-white/50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800",
        on: "bg-white dark:bg-gray-800"
      },
      base: "h-3 w-3 rounded-full",
      wrapper: "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3"
    },
    item: {
      base: "absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
      wrapper: "w-full flex-shrink-0 transform cursor-grab snap-center"
    },
    control: {
      base: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
      icon: "h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6"
    },
    leftControl: "absolute top-0 left-0 flex h-full items-center justify-center px-4 focus:outline-none",
    rightControl: "absolute top-0 right-0 flex h-full items-center justify-center px-4 focus:outline-none",
    scrollContainer: {
      base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg",
      snap: "snap-x"
    }
  },
  darkThemeToggle: {
    base: "rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700",
    icon: "h-5 w-5"
  },
  dropdown: {
    floating: {
      target: "w-fit",
      base: "z-10 w-fit rounded divide-y divide-gray-100 shadow",
      animation: "transition-opacity",
      hidden: "invisible opacity-0",
      style: {
        dark: "bg-gray-900 text-white dark:bg-gray-700",
        light: "border border-gray-200 bg-white text-gray-900",
        auto: "border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white"
      },
      header: "block py-2 px-4 text-sm text-gray-700 dark:text-gray-200",
      content: "py-1 text-sm text-gray-700 dark:text-gray-200",
      arrow: {
        base: "absolute z-10 h-2 w-2 rotate-45",
        style: {
          dark: "bg-gray-900 dark:bg-gray-700",
          light: "bg-white",
          auto: "bg-white dark:bg-gray-700"
        },
        placement: "-4px"
      },
      item: {
        base: "flex items-center justify-start py-2 px-4 text-sm text-gray-700 cursor-pointer hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white",
        icon: "mr-2 h-4 w-4"
      },
      divider: "my-1 h-px bg-gray-100 dark:bg-gray-600"
    },
    arrowIcon: "ml-2 h-4 w-4",
    inlineWrapper: "flex items-center",
    content: "py-1"
  },
  footer: {
    base: "w-full rounded-lg bg-white shadow dark:bg-gray-800 md:flex md:items-center md:justify-between",
    container: "w-full p-6",
    bgDark: "bg-gray-800",
    groupLink: {
      base: "flex flex-wrap text-sm text-gray-500 dark:text-white",
      link: {
        base: "last:mr-0 md:mr-6",
        href: "hover:underline"
      },
      col: "flex-col space-y-4"
    },
    icon: {
      base: "text-gray-500 dark:hover:text-white",
      size: "h-5 w-5"
    },
    title: {
      base: "mb-6 text-sm font-semibold uppercase text-gray-500 dark:text-white"
    },
    divider: {
      base: "w-full my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
    },
    copyright: {
      base: "text-sm text-gray-500 dark:text-gray-400 sm:text-center",
      href: "ml-1 hover:underline",
      span: "ml-1"
    },
    brand: {
      base: "mb-4 flex items-center sm:mb-0",
      img: "mr-3 h-8",
      span: "self-center whitespace-nowrap text-2xl font-semibold text-gray-800 dark:text-white"
    }
  },
  checkbox: {
    base: "h-4 w-4 rounded border border-gray-300 bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
  },
  fileInput: {
    base: "flex",
    field: {
      base: "relative w-full",
      input: {
        base: "rounded-lg block w-full border disabled:cursor-not-allowed disabled:opacity-50",
        sizes: {
          sm: "sm:text-xs",
          md: "text-sm",
          lg: "sm:text-md"
        },
        colors: {
          gray: "bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500",
          info: "border-blue-500 bg-blue-50 text-blue-900 placeholder-blue-700 focus:border-blue-500 focus:ring-blue-500 dark:border-blue-400 dark:bg-blue-100 dark:focus:border-blue-500 dark:focus:ring-blue-500",
          failure: "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
          warning: "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500",
          success: "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500"
        }
      }
    }
  },
  label: {
    base: "text-sm font-medium",
    colors: {
      default: "text-gray-900 dark:text-gray-300",
      info: "text-blue-500 dark:text-blue-600",
      failure: "text-red-700 dark:text-red-500",
      warning: "text-yellow-500 dark:text-yellow-600",
      success: "text-green-700 dark:text-green-500"
    },
    disabled: "opacity-50"
  },
  radio: {
    base: "h-4 w-4 border border-gray-300 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:focus:bg-blue-600 dark:focus:ring-blue-600"
  },
  select: {
    base: "flex",
    addon: "inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400",
    field: {
      base: "relative w-full",
      icon: {
        base: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",
        svg: "h-5 w-5 text-gray-500 dark:text-gray-400"
      },
      select: {
        base: "block w-full border disabled:cursor-not-allowed disabled:opacity-50",
        withIcon: {
          on: "pl-10",
          off: ""
        },
        withAddon: {
          on: "rounded-r-lg",
          off: "rounded-lg"
        },
        withShadow: {
          on: "shadow-sm dark:shadow-sm-light",
          off: ""
        },
        sizes: {
          sm: "p-2 sm:text-xs",
          md: "p-2.5 text-sm",
          lg: "sm:text-md p-4"
        },
        colors: {
          gray: "bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500",
          info: "border-blue-500 bg-blue-50 text-blue-900 placeholder-blue-700 focus:border-blue-500 focus:ring-blue-500 dark:border-blue-400 dark:bg-blue-100 dark:focus:border-blue-500 dark:focus:ring-blue-500",
          failure: "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
          warning: "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500",
          success: "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500"
        }
      }
    }
  },
  textInput: {
    base: "flex",
    addon: "inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400",
    field: {
      base: "relative w-full",
      icon: {
        base: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",
        svg: "h-5 w-5 text-gray-500 dark:text-gray-400"
      },
      input: {
        base: "block w-full border disabled:cursor-not-allowed disabled:opacity-50",
        sizes: {
          sm: "p-2 sm:text-xs",
          md: "p-2.5 text-sm",
          lg: "sm:text-md p-4"
        },
        colors: {
          gray: "bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500",
          info: "border-blue-500 bg-blue-50 text-blue-900 placeholder-blue-700 focus:border-blue-500 focus:ring-blue-500 dark:border-blue-400 dark:bg-blue-100 dark:focus:border-blue-500 dark:focus:ring-blue-500",
          failure: "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
          warning: "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500",
          success: "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500"
        },
        withIcon: {
          on: "pl-10",
          off: ""
        },
        withAddon: {
          on: "rounded-r-lg",
          off: "rounded-lg"
        },
        withShadow: {
          on: "shadow-sm dark:shadow-sm-light",
          off: ""
        }
      }
    }
  },
  textarea: {
    base: "block w-full rounded-lg border disabled:cursor-not-allowed disabled:opacity-50",
    colors: {
      gray: "bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500",
      info: "border-blue-500 bg-blue-50 text-blue-900 placeholder-blue-700 focus:border-blue-500 focus:ring-blue-500 dark:border-blue-400 dark:bg-blue-100 dark:focus:border-blue-500 dark:focus:ring-blue-500",
      failure: "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
      warning: "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500",
      success: "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500"
    },
    withShadow: {
      on: "shadow-sm dark:shadow-sm-light",
      off: ""
    }
  },
  toggleSwitch: {
    base: "group relative flex items-center rounded-lg focus:outline-none",
    active: {
      on: "cursor-pointer",
      off: "cursor-not-allowed opacity-50"
    },
    toggle: {
      base: "toggle-bg h-6 w-11 rounded-full border group-focus:ring-4 group-focus:ring-blue-500/25",
      checked: {
        on: "after:translate-x-full after:border-white",
        off: "border-gray-200 bg-gray-200 dark:border-gray-600 dark:bg-gray-700",
        color: {
          blue: " bg-blue-700 border-blue-700",
          dark: "bg-dark-700 border-dark-900",
          failure: "bg-red-700 border-red-900",
          gray: "bg-gray-500 border-gray-600",
          green: "bg-green-600 border-green-700",
          light: "bg-light-700 border-light-900",
          red: "bg-red-700 border-red-900",
          purple: "bg-purple-700 border-purple-900",
          success: "bg-green-500 border-green-500",
          yellow: "bg-yellow-400 border-yellow-400",
          warning: "bg-yellow-600 border-yellow-600",
          cyan: "bg-cyan-500 border-cyan-500",
          lime: "bg-lime-400 border-lime-400",
          indigo: "bg-indigo-400 border-indigo-400",
          teal: "bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4",
          info: "bg-blue-600 border-blue-600",
          pink: "bg-pink-600 border-pink-600"
        }
      }
    },
    label: "ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
  },
  helperText: {
    base: "mt-2 text-sm",
    colors: {
      gray: "text-gray-500 dark:text-gray-400",
      info: "text-blue-700 dark:text-blue-800",
      success: "text-green-600 dark:text-green-500",
      failure: "text-red-600 dark:text-red-500",
      warning: "text-yellow-500 dark:text-yellow-600"
    }
  },
  listGroup: {
    base: "list-none rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white",
    item: {
      active: {
        off: "hover:bg-gray-100 hover:text-blue-700 focus:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:text-white dark:focus:ring-gray-500",
        on: "bg-blue-700 text-white dark:bg-gray-800"
      },
      base: "flex w-full cursor-pointer border-b border-gray-200 py-2 px-4 first:rounded-t-lg last:rounded-b-lg last:border-b-0 dark:border-gray-600",
      href: {
        off: "",
        on: ""
      },
      icon: "mr-2 h-4 w-4 fill-current"
    }
  },
  modal: {
    base: "fixed top-0 right-0 left-0 z-50 h-modal overflow-y-auto overflow-x-hidden md:inset-0 md:h-full",
    show: {
      on: "flex bg-gray-900 bg-opacity-50 dark:bg-opacity-80",
      off: "hidden"
    },
    content: {
      base: "relative h-full w-full p-4 md:h-auto",
      inner: "relative rounded-lg bg-white shadow dark:bg-gray-700"
    },
    body: {
      base: "p-6",
      popup: "pt-0"
    },
    header: {
      base: "flex items-start justify-between rounded-t dark:border-gray-600 border-b p-5",
      popup: "!p-2 !border-b-0",
      title: "text-xl font-medium text-gray-900 dark:text-white",
      close: {
        base: "ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white",
        icon: "h-5 w-5"
      }
    },
    footer: {
      base: "flex items-center space-x-2 rounded-b border-gray-200 p-6 dark:border-gray-600",
      popup: "border-t"
    },
    sizes: {
      sm: "max-w-sm",
      md: "max-w-md",
      lg: "max-w-lg",
      xl: "max-w-xl",
      "2xl": "max-w-2xl",
      "3xl": "max-w-3xl",
      "4xl": "max-w-4xl",
      "5xl": "max-w-5xl",
      "6xl": "max-w-6xl",
      "7xl": "max-w-7xl"
    },
    positions: {
      "top-left": "items-start justify-start",
      "top-center": "items-start justify-center",
      "top-right": "items-start justify-end",
      "center-left": "items-center justify-start",
      center: "items-center justify-center",
      "center-right": "items-center justify-end",
      "bottom-right": "items-end justify-end",
      "bottom-center": "items-end justify-center",
      "bottom-left": "items-end justify-start"
    }
  },
  navbar: {
    base: "border-gray-200 bg-white px-2 py-2.5 dark:border-gray-700 dark:bg-gray-800 sm:px-4",
    rounded: {
      on: "rounded",
      off: ""
    },
    bordered: {
      on: "border",
      off: ""
    },
    inner: {
      base: "mx-auto flex flex-wrap items-center justify-between",
      fluid: {
        on: "",
        off: "container"
      }
    },
    brand: "flex items-center",
    collapse: {
      base: "w-full md:block md:w-auto",
      list: "mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium",
      hidden: {
        on: "hidden",
        off: ""
      }
    },
    link: {
      base: "block py-2 pr-4 pl-3 md:p-0",
      active: {
        on: "bg-blue-700 text-white dark:text-white md:bg-transparent md:text-blue-700",
        off: "border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
      },
      disabled: {
        on: "text-gray-400 hover:cursor-not-allowed dark:text-gray-600",
        off: ""
      }
    },
    toggle: {
      base: "inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden",
      icon: "h-6 w-6 shrink-0"
    }
  },
  rating: {
    base: "flex items-center",
    star: {
      sizes: {
        sm: "w-5 h-5",
        md: "w-7 h-7",
        lg: "w-10 h-10"
      },
      filled: "text-yellow-400",
      empty: "text-gray-300 dark:text-gray-500"
    },
    advanced: {
      base: "flex items-center",
      label: "text-sm font-medium text-blue-600 dark:text-blue-500",
      progress: {
        base: "mx-4 h-5 w-2/4 rounded bg-gray-200 dark:bg-gray-700",
        fill: "h-5 rounded bg-yellow-400",
        label: "text-sm font-medium text-blue-600 dark:text-blue-500"
      }
    }
  },
  pagination: {
    base: "",
    layout: {
      table: {
        base: "text-sm text-gray-700 dark:text-gray-400",
        span: "font-semibold text-gray-900 dark:text-white"
      }
    },
    pages: {
      base: "xs:mt-0 mt-2 inline-flex items-center -space-x-px",
      showIcon: "inline-flex",
      previous: {
        base: "ml-0 rounded-l-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",
        icon: "h-5 w-5"
      },
      next: {
        base: "rounded-r-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",
        icon: "h-5 w-5"
      },
      selector: {
        base: "w-12 border border-gray-300 bg-white py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",
        active: "bg-blue-50 text-blue-600 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
      }
    }
  },
  sidebar: {
    base: "h-full",
    inner: "h-full overflow-y-auto overflow-x-hidden rounded bg-white py-4 px-3 dark:bg-gray-800",
    collapsed: {
      on: "w-16",
      off: "w-64"
    },
    collapse: {
      button: "group flex w-full items-center rounded-lg p-2 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
      icon: {
        base: "h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white",
        open: {
          off: "",
          on: "text-gray-900"
        }
      },
      label: {
        base: "ml-3 flex-1 whitespace-nowrap text-left",
        icon: "h-6 w-6"
      },
      list: "space-y-2 py-2"
    },
    cta: {
      base: "mt-6 rounded-lg p-4",
      color: {
        blue: "bg-blue-50 dark:bg-blue-900",
        dark: "bg-dark-50 dark:bg-dark-900",
        failure: "bg-red-50 dark:bg-red-900",
        gray: "bg-alternative-50 dark:bg-alternative-900",
        green: "bg-green-50 dark:bg-green-900",
        light: "bg-light-50 dark:bg-light-900",
        red: "bg-red-50 dark:bg-red-900",
        purple: "bg-purple-50 dark:bg-purple-900",
        success: "bg-green-50 dark:bg-green-900",
        yellow: "bg-yellow-50 dark:bg-yellow-900",
        warning: "bg-yellow-50 dark:bg-yellow-900"
      }
    },
    item: {
      base: "flex items-center justify-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
      active: "bg-gray-100 dark:bg-gray-700",
      collapsed: {
        insideCollapse: "group w-full pl-8 transition duration-75",
        noIcon: "font-bold"
      },
      content: {
        base: "px-3 flex-1 whitespace-nowrap"
      },
      icon: {
        base: "h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white",
        active: "text-gray-700 dark:text-gray-100"
      },
      label: ""
    },
    items: "",
    itemGroup: "mt-4 space-y-2 border-t border-gray-200 pt-4 first:mt-0 first:border-t-0 first:pt-0 dark:border-gray-700",
    logo: {
      base: "mb-5 flex items-center pl-2.5",
      collapsed: {
        on: "hidden",
        off: "self-center whitespace-nowrap text-xl font-semibold dark:text-white"
      },
      img: "mr-3 h-6 sm:h-7"
    }
  },
  progress: {
    base: "w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700",
    label: "mb-1 flex justify-between font-medium dark:text-white",
    bar: "flex items-center justify-center rounded-full text-center font-medium leading-none text-blue-100",
    color: {
      dark: "bg-gray-600 dark:bg-gray-300",
      blue: "bg-blue-600",
      red: "bg-red-600 dark:bg-red-500",
      green: "bg-green-600 dark:bg-green-500",
      yellow: "bg-yellow-400",
      indigo: "bg-indigo-600 dark:bg-indigo-500",
      purple: "bg-purple-600 dark:bg-purple-500"
    },
    size: {
      sm: "h-1.5",
      md: "h-2.5",
      lg: "h-4",
      xl: "h-6"
    }
  },
  spinner: {
    base: "inline animate-spin text-gray-200",
    color: {
      failure: "fill-red-600",
      gray: "fill-gray-600",
      info: "fill-blue-600",
      pink: "fill-pink-600",
      purple: "fill-purple-600",
      success: "fill-green-500",
      warning: "fill-yellow-400"
    },
    light: {
      off: {
        base: "dark:text-gray-600",
        color: {
          failure: "",
          gray: "dark:fill-gray-300",
          info: "",
          pink: "",
          purple: "",
          success: "",
          warning: ""
        }
      },
      on: {
        base: "",
        color: {
          failure: "",
          gray: "",
          info: "",
          pink: "",
          purple: "",
          success: "",
          warning: ""
        }
      }
    },
    size: {
      xs: "w-3 h-3",
      sm: "w-4 h-4",
      md: "w-6 h-6",
      lg: "w-8 h-8",
      xl: "w-10 h-10"
    }
  },
  tab: {
    base: "flex flex-col gap-2",
    tablist: {
      base: "flex text-center",
      styles: {
        default: "flex-wrap border-b border-gray-200 dark:border-gray-700",
        underline: "flex-wrap -mb-px border-b border-gray-200 dark:border-gray-700",
        pills: "flex-wrap font-medium text-sm text-gray-500 dark:text-gray-400",
        fullWidth: "hidden text-sm font-medium rounded-lg divide-x divide-gray-200 shadow sm:flex dark:divide-gray-700 dark:text-gray-400"
      },
      tabitem: {
        base: "flex items-center justify-center p-4 text-sm font-medium first:ml-0 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500",
        styles: {
          default: {
            base: "rounded-t-lg",
            active: {
              on: "bg-gray-100 text-blue-600 dark:bg-gray-800 dark:text-blue-500",
              off: "text-gray-500 hover:bg-gray-50 hover:text-gray-600 dark:text-gray-400 dark:hover:bg-gray-800  dark:hover:text-gray-300"
            }
          },
          underline: {
            base: "rounded-t-lg",
            active: {
              on: "text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500",
              off: "border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
            }
          },
          pills: {
            base: "",
            active: {
              on: "rounded-lg bg-blue-600 text-white",
              off: "rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
            }
          },
          fullWidth: {
            base: "ml-2 first:ml-0 w-full first:rounded-l-lg last:rounded-r-lg",
            active: {
              on: "inline-block p-4 w-full text-gray-900 bg-gray-100 focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white",
              off: "bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            }
          }
        },
        icon: "mr-2 h-5 w-5"
      }
    },
    tabpanel: "p-4"
  },
  toast: {
    base: "flex w-full max-w-xs items-center rounded-lg bg-white p-4 text-gray-500 shadow dark:bg-gray-800 dark:text-gray-400",
    closed: "opacity-0 ease-out",
    removed: "hidden",
    toggle: {
      base: "-mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8 rounded-lg bg-white p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-gray-300 dark:bg-gray-800 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white",
      icon: "h-5 w-5 shrink-0"
    }
  },
  tooltip: {
    target: "w-fit",
    base: "absolute inline-block z-10 rounded-lg py-2 px-3 text-sm font-medium shadow-sm",
    animation: "transition-opacity",
    hidden: "invisible opacity-0",
    style: {
      dark: "bg-gray-900 text-white dark:bg-gray-700",
      light: "border border-gray-200 bg-white text-gray-900",
      auto: "border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white"
    },
    content: "relative z-20",
    arrow: {
      base: "absolute z-10 h-2 w-2 rotate-45",
      style: {
        dark: "bg-gray-900 dark:bg-gray-700",
        light: "bg-white",
        auto: "bg-white dark:bg-gray-700"
      },
      placement: "-4px"
    }
  },
  table: {
    wrapper: "relative overflow-x-auto shadow-md sm:rounded-lg",
    base: "w-full text-left text-sm text-gray-500 dark:text-gray-400",
    head: {
      base: "bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400",
      cell: {
        base: "px-6 py-3"
      }
    },
    row: {
      hovered: "hover:bg-gray-50 dark:hover:bg-gray-600",
      striped: "odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700"
    },
    cell: {
      base: "px-6 py-4"
    }
  },
  timeline: {
    direction: {
      horizontal: "items-center sm:flex",
      vertical: "relative border-l border-gray-200 dark:border-gray-700"
    },
    item: {
      base: {
        horizontal: "relative mb-6 sm:mb-0",
        vertical: "mb-10 ml-6"
      },
      point: {
        base: {
          horizontal: "flex items-center",
          vertical: ""
        },
        marker: {
          base: "absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700",
          icon: {
            wrapper: "absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-200 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900",
            base: "h-3 w-3 text-blue-600 dark:text-blue-300"
          }
        },
        line: "hidden h-0.5 w-full bg-gray-200 dark:bg-gray-700 sm:flex"
      },
      content: {
        base: "mt-3 sm:pr-8",
        time: "mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500",
        title: "text-lg font-semibold text-gray-900 dark:text-white",
        body: "mb-4 text-base font-normal text-gray-500 dark:text-gray-400"
      }
    }
  }
};
var default_default = theme;

// node_modules/flowbite-react/lib/esm/components/Flowbite/ThemeContext.js
var ThemeContext = (0, import_react3.createContext)({
  theme: default_default
});
function useTheme() {
  return (0, import_react3.useContext)(ThemeContext);
}
var useThemeMode = (usePreferences) => {
  const [mode, setModeState] = (0, import_react3.useState)("light");
  const savePreference = (mode2) => localStorage.setItem("theme", mode2);
  const getPreference = () => localStorage.getItem("theme") || getPrefersColorScheme();
  const userPreferenceIsDark = () => {
    var _a;
    return (_a = window.matchMedia) == null ? void 0 : _a.call(window, "(prefers-color-scheme: dark)").matches;
  };
  const getPrefersColorScheme = () => userPreferenceIsDark() ? "dark" : "light";
  const toggleMode = () => {
    const newMode = mode === "dark" ? "light" : "dark";
    setMode(newMode);
    setModeState(newMode);
  };
  const setMode = (mode2) => {
    savePreference(mode2);
    if (!window_exists_default()) {
      return;
    }
    if (mode2 === "dark") {
      document.documentElement.classList.add("dark");
      return;
    }
    document.documentElement.classList.remove("dark");
  };
  if (usePreferences) {
    (0, import_react3.useEffect)(() => setModeState(getPreference()), []);
    (0, import_react3.useEffect)(() => setMode(mode), [mode]);
  }
  return [mode, setModeState, toggleMode];
};

// node_modules/flowbite-react/lib/esm/components/Accordion/AccordionContent.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var import_classnames = __toESM(require_classnames());

// node_modules/flowbite-react/lib/esm/components/Accordion/AccordionPanelContext.js
var import_react4 = __toESM(require_react());
var AccordionPanelContext = (0, import_react4.createContext)(void 0);
function useAccordionContext() {
  const context = (0, import_react4.useContext)(AccordionPanelContext);
  if (!context) {
    throw new Error("useAccordionContext should be used within the AccordionPanelContext provider!");
  }
  return context;
}

// node_modules/flowbite-react/lib/esm/components/Accordion/AccordionContent.js
var AccordionContent = ({ children, className, ...props }) => {
  const { isOpen } = useAccordionContext();
  const theme2 = useTheme().theme.accordion.content;
  return (0, import_jsx_runtime2.jsx)("div", { className: (0, import_classnames.default)(theme2.base, className), "data-testid": "flowbite-accordion-content", hidden: !isOpen, ...props, children });
};

// node_modules/flowbite-react/lib/esm/components/Accordion/AccordionPanel.js
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
var import_react5 = __toESM(require_react());
var AccordionPanel = ({ children, ...props }) => {
  const { alwaysOpen } = props;
  const [isOpen, setOpen] = (0, import_react5.useState)(props.isOpen);
  const provider = alwaysOpen ? {
    ...props,
    isOpen,
    setOpen: () => setOpen(!isOpen)
  } : props;
  return (0, import_jsx_runtime3.jsx)(AccordionPanelContext.Provider, { value: provider, children });
};

// node_modules/flowbite-react/lib/esm/components/Accordion/AccordionTitle.js
var import_jsx_runtime4 = __toESM(require_jsx_runtime());
var import_classnames2 = __toESM(require_classnames());
var AccordionTitle = ({ as: Heading = "h2", children, className, ...props }) => {
  const { arrowIcon: ArrowIcon, flush, isOpen, setOpen } = useAccordionContext();
  const theme2 = useTheme().theme.accordion.title;
  const onClick = () => typeof setOpen !== "undefined" && setOpen();
  return (0, import_jsx_runtime4.jsxs)("button", { className: (0, import_classnames2.default)(theme2.base, theme2.flush[flush ? "on" : "off"], theme2.open[isOpen ? "on" : "off"], className), onClick, type: "button", ...props, children: [(0, import_jsx_runtime4.jsx)(Heading, { className: theme2.heading, "data-testid": "flowbite-accordion-heading", children }), ArrowIcon && (0, import_jsx_runtime4.jsx)(ArrowIcon, { "aria-hidden": true, className: (0, import_classnames2.default)(theme2.arrow.base, theme2.arrow.open[isOpen ? "on" : "off"]), "data-testid": "flowbite-accordion-arrow" })] });
};

// node_modules/flowbite-react/lib/esm/components/Accordion/Accordion.js
var AccordionComponent = ({ alwaysOpen = false, arrowIcon = HiChevronDown, children, flush = false, className, ...props }) => {
  const [isOpen, setOpen] = (0, import_react6.useState)(0);
  const panels = (0, import_react6.useMemo)(() => import_react6.Children.map(children, (child, i2) => (0, import_react6.cloneElement)(child, { alwaysOpen, arrowIcon, flush, isOpen: isOpen === i2, setOpen: () => setOpen(i2) })), [alwaysOpen, arrowIcon, children, flush, isOpen]);
  const theme2 = useTheme().theme.accordion;
  return (0, import_jsx_runtime5.jsx)("div", { className: (0, import_classnames3.default)(theme2.base, theme2.flush[flush ? "on" : "off"], className), "data-testid": "flowbite-accordion", ...props, children: panels });
};
AccordionComponent.displayName = "Accordion";
AccordionPanel.displayName = "Accordion.Panel";
AccordionTitle.displayName = "Accordion.Title";
AccordionContent.displayName = "Accordion.Content";
var Accordion = Object.assign(AccordionComponent, {
  Panel: AccordionPanel,
  Title: AccordionTitle,
  Content: AccordionContent
});

// node_modules/flowbite-react/lib/esm/components/Alert/Alert.js
var import_jsx_runtime6 = __toESM(require_jsx_runtime());
var import_classnames4 = __toESM(require_classnames());
var Alert = ({ additionalContent, children, color = "info", icon: Icon, onDismiss, rounded = true, withBorderAccent, className }) => {
  const theme2 = useTheme().theme.alert;
  return (0, import_jsx_runtime6.jsxs)("div", { className: (0, import_classnames4.default)(theme2.base, theme2.color[color], rounded && theme2.rounded, withBorderAccent && theme2.borderAccent, className), role: "alert", children: [(0, import_jsx_runtime6.jsxs)("div", { className: theme2.wrapper, children: [Icon && (0, import_jsx_runtime6.jsx)(Icon, { className: theme2.icon }), (0, import_jsx_runtime6.jsx)("div", { children }), typeof onDismiss === "function" && (0, import_jsx_runtime6.jsx)("button", { "aria-label": "Dismiss", className: (0, import_classnames4.default)(theme2.closeButton.base, theme2.closeButton.color[color]), onClick: onDismiss, type: "button", children: (0, import_jsx_runtime6.jsx)(HiX, { "aria-hidden": true, className: theme2.closeButton.icon }) })] }), additionalContent && (0, import_jsx_runtime6.jsx)("div", { children: additionalContent })] });
};

// node_modules/flowbite-react/lib/esm/components/Avatar/Avatar.js
var import_jsx_runtime10 = __toESM(require_jsx_runtime());
var import_classnames7 = __toESM(require_classnames());

// node_modules/flowbite-react/lib/esm/components/Avatar/AvatarGroup.js
var import_jsx_runtime8 = __toESM(require_jsx_runtime());
var import_classnames5 = __toESM(require_classnames());

// node_modules/flowbite-react/lib/esm/components/Flowbite/Flowbite.js
var import_jsx_runtime7 = __toESM(require_jsx_runtime());
var import_react7 = __toESM(require_react());

// node_modules/flowbite-react/lib/esm/helpers/mergeDeep.js
function isObject(item) {
  return item && typeof item === "object" && !Array.isArray(item);
}
function mergeDeep(target, ...sources) {
  if (!sources.length)
    return target;
  const source = sources.shift();
  const output = { ...target };
  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key])
          Object.assign(output, { [key]: {} });
        output[key] = mergeDeep(target[key], source[key]);
      } else {
        Object.assign(output, { [key]: source[key] });
      }
    }
  }
  return mergeDeep(output, ...sources);
}

// node_modules/flowbite-react/lib/esm/components/Flowbite/Flowbite.js
var Flowbite = ({ children, theme: theme2 = {} }) => {
  const { theme: customTheme = {}, dark, usePreferences = true } = theme2;
  const [mode, setMode, toggleMode] = useThemeMode(usePreferences);
  const mergedTheme = mergeDeep(default_default, customTheme);
  (0, import_react7.useEffect)(() => {
    if (dark) {
      if (setMode != null) {
        setMode("dark");
      }
      if (window_exists_default()) {
        document.documentElement.classList.add("dark");
      }
    }
  }, [dark, setMode]);
  const themeContextValue = (0, import_react7.useMemo)(() => ({
    theme: mergedTheme,
    mode,
    toggleMode
  }), [mode, toggleMode, mergedTheme]);
  return (0, import_jsx_runtime7.jsx)(ThemeContext.Provider, { value: themeContextValue, children });
};

// node_modules/flowbite-react/lib/esm/components/Avatar/AvatarGroup.js
var AvatarGroup = ({ children, className }) => {
  const theme2 = useTheme().theme.avatarGroup;
  return (0, import_jsx_runtime8.jsx)("div", { "data-testid": "avatar-group-element", className: (0, import_classnames5.default)(theme2.base, className), children });
};
AvatarGroup.displayName = "Avatar.Group";
var AvatarGroup_default = AvatarGroup;

// node_modules/flowbite-react/lib/esm/components/Avatar/AvatarGroupCounter.js
var import_jsx_runtime9 = __toESM(require_jsx_runtime());
var import_classnames6 = __toESM(require_classnames());
var AvatarGroupCounter = ({ total, href, className }) => {
  const theme2 = useTheme().theme.avatarGroupCounter;
  return (0, import_jsx_runtime9.jsxs)("a", { className: (0, import_classnames6.default)(theme2.base, className), href, children: ["+", total] });
};
AvatarGroupCounter.displayName = "Avatar.GroupCounter";
var AvatarGroupCounter_default = AvatarGroupCounter;

// node_modules/flowbite-react/lib/esm/components/Avatar/Avatar.js
var AvatarComponent = ({ alt = "", bordered = false, children, img, color = "light", rounded = false, size: size2 = "md", stacked = false, status, statusPosition = "top-left", placeholderInitials = "", className, ...props }) => {
  const theme2 = useTheme().theme.avatar;
  const imgClassName = (0, import_classnames7.default)(bordered && theme2.bordered, bordered && theme2.color[color], rounded && theme2.rounded, stacked && theme2.stacked, theme2.img.on, theme2.size[size2]);
  return (0, import_jsx_runtime10.jsxs)("div", { className: (0, import_classnames7.default)(theme2.base, className), "data-testid": "flowbite-avatar", ...props, children: [(0, import_jsx_runtime10.jsxs)("div", { className: "relative", children: [img ? (0, import_jsx_runtime10.jsx)("img", { alt, className: (0, import_classnames7.default)(imgClassName, theme2.img.on), "data-testid": "flowbite-avatar-img", src: img }) : placeholderInitials ? (0, import_jsx_runtime10.jsx)("div", { className: (0, import_classnames7.default)(theme2.img.off, theme2.initials.base, rounded && theme2.rounded, stacked && theme2.stacked, bordered && theme2.bordered), children: (0, import_jsx_runtime10.jsx)("span", { className: (0, import_classnames7.default)(theme2.initials.text), "data-testid": "flowbite-avatar-initials-placeholder", children: placeholderInitials }) }) : (0, import_jsx_runtime10.jsx)("div", { className: (0, import_classnames7.default)(imgClassName, theme2.img.off), "data-testid": "flowbite-avatar-img", children: (0, import_jsx_runtime10.jsx)("svg", { className: theme2.img.placeholder, fill: "currentColor", viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", children: (0, import_jsx_runtime10.jsx)("path", { fillRule: "evenodd", d: "M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z", clipRule: "evenodd" }) }) }), status && (0, import_jsx_runtime10.jsx)("span", { className: (0, import_classnames7.default)(theme2.status.base, theme2.status[status], theme2.statusPosition[statusPosition]) })] }), children && (0, import_jsx_runtime10.jsx)("div", { children })] });
};
AvatarComponent.displayName = "Avatar";
var Avatar = Object.assign(AvatarComponent, {
  Group: AvatarGroup_default,
  Counter: AvatarGroupCounter_default
});

// node_modules/flowbite-react/lib/esm/components/Badge/Badge.js
var import_jsx_runtime11 = __toESM(require_jsx_runtime());
var import_classnames8 = __toESM(require_classnames());
var Badge = ({ children, color = "info", href, icon: Icon, size: size2 = "xs", className, ...props }) => {
  const theme2 = useTheme().theme.badge;
  const Content = () => (0, import_jsx_runtime11.jsxs)("span", { className: (0, import_classnames8.default)(theme2.base, theme2.color[color], theme2.icon[Icon ? "on" : "off"], theme2.size[size2], className), "data-testid": "flowbite-badge", ...props, children: [Icon && (0, import_jsx_runtime11.jsx)(Icon, { "aria-hidden": true, className: theme2.icon.size[size2], "data-testid": "flowbite-badge-icon" }), children && (0, import_jsx_runtime11.jsx)("span", { children })] });
  return href ? (0, import_jsx_runtime11.jsx)("a", { className: theme2.href, href, children: (0, import_jsx_runtime11.jsx)(Content, {}) }) : (0, import_jsx_runtime11.jsx)(Content, {});
};

// node_modules/flowbite-react/lib/esm/components/Breadcrumb/Breadcrumb.js
var import_jsx_runtime13 = __toESM(require_jsx_runtime());

// node_modules/flowbite-react/lib/esm/components/Breadcrumb/BreadcrumbItem.js
var import_jsx_runtime12 = __toESM(require_jsx_runtime());
var import_classnames9 = __toESM(require_classnames());
var import_react8 = __toESM(require_react());
var BreadcrumbItem = (0, import_react8.forwardRef)(({ children, className, href, icon: Icon, ...props }, ref) => {
  const isLink = typeof href !== "undefined";
  const theme2 = useTheme().theme.breadcrumb.item;
  const Component = isLink ? "a" : "span";
  return (0, import_jsx_runtime12.jsxs)("li", { className: (0, import_classnames9.default)(theme2.base, className), ...props, children: [(0, import_jsx_runtime12.jsx)(HiOutlineChevronRight, { "aria-hidden": true, className: theme2.chevron, "data-testid": "flowbite-breadcrumb-separator" }), (0, import_jsx_runtime12.jsxs)(Component, { ref, className: theme2.href[isLink ? "on" : "off"], "data-testid": "flowbite-breadcrumb-item", href, children: [Icon && (0, import_jsx_runtime12.jsx)(Icon, { "aria-hidden": true, className: theme2.icon }), children] })] });
});
BreadcrumbItem.displayName = "Breadcrumb.Item";
var BreadcrumbItem_default = BreadcrumbItem;

// node_modules/flowbite-react/lib/esm/components/Breadcrumb/Breadcrumb.js
var BreadcrumbComponent = ({ children, ...props }) => {
  const theme2 = useTheme().theme.breadcrumb;
  return (0, import_jsx_runtime13.jsx)("nav", { "aria-label": "Breadcrumb", ...props, children: (0, import_jsx_runtime13.jsx)("ol", { className: theme2.list, children }) });
};
BreadcrumbComponent.displayName = "Breadcrumb";
var Breadcrumb = Object.assign(BreadcrumbComponent, { Item: BreadcrumbItem_default });

// node_modules/flowbite-react/lib/esm/components/Button/Button.js
var import_jsx_runtime15 = __toESM(require_jsx_runtime());
var import_classnames11 = __toESM(require_classnames());
var import_react10 = __toESM(require_react());

// node_modules/flowbite-react/lib/esm/components/Button/ButtonGroup.js
var import_jsx_runtime14 = __toESM(require_jsx_runtime());
var import_classnames10 = __toESM(require_classnames());
var import_react9 = __toESM(require_react());
var ButtonGroup = ({ children, outline, pill, className, ...props }) => {
  const items = (0, import_react9.useMemo)(() => import_react9.Children.map(children, (child, index3) => (0, import_react9.cloneElement)(child, {
    outline,
    pill,
    positionInGroup: index3 === 0 ? "start" : index3 === children.length - 1 ? "end" : "middle"
  })), [children, outline, pill]);
  const theme2 = useTheme().theme.buttonGroup;
  return (0, import_jsx_runtime14.jsx)("div", { className: (0, import_classnames10.default)(theme2.base, className), role: "group", ...props, children: items });
};
ButtonGroup.displayName = "Button.Group";
var ButtonGroup_default = ButtonGroup;

// node_modules/flowbite-react/lib/esm/components/Button/Button.js
var ButtonComponent = (0, import_react10.forwardRef)(({ children, color = "info", disabled = false, gradientDuoTone, gradientMonochrome, href, label, outline = false, pill = false, fullSized, positionInGroup = "none", size: size2 = "md", className, ...props }, ref) => {
  const isLink = typeof href !== "undefined";
  const { buttonGroup: groupTheme, button: theme2 } = useTheme().theme;
  const Component = isLink ? "a" : "button";
  const theirProps = props;
  return (0, import_jsx_runtime15.jsx)(Component, { className: (0, import_classnames11.default)(disabled && theme2.disabled, !gradientDuoTone && !gradientMonochrome && theme2.color[color], gradientDuoTone && !gradientMonochrome && theme2.gradientDuoTone[gradientDuoTone], !gradientDuoTone && gradientMonochrome && theme2.gradient[gradientMonochrome], groupTheme.position[positionInGroup], outline && (theme2.outline.color[color] ?? theme2.outline.color.default), theme2.base, theme2.pill[pill ? "on" : "off"], fullSized && theme2.fullSized, className), disabled, href, type: isLink ? void 0 : "button", ref, ...theirProps, children: (0, import_jsx_runtime15.jsx)("span", { className: (0, import_classnames11.default)(theme2.inner.base, theme2.inner.position[positionInGroup], theme2.outline[outline ? "on" : "off"], theme2.outline.pill[outline && pill ? "on" : "off"], theme2.size[size2], outline && !theme2.outline.color[color] && theme2.inner.outline), children: (0, import_jsx_runtime15.jsxs)(import_jsx_runtime15.Fragment, { children: [typeof children !== "undefined" && children, typeof label !== "undefined" && (0, import_jsx_runtime15.jsx)("span", { className: theme2.label, "data-testid": "flowbite-button-label", children: label })] }) }) });
});
ButtonComponent.displayName = "Button";
var Button = Object.assign(ButtonComponent, {
  Group: ButtonGroup_default
});

// node_modules/flowbite-react/lib/esm/components/Card/Card.js
var import_jsx_runtime16 = __toESM(require_jsx_runtime());
var import_classnames12 = __toESM(require_classnames());
var Card = ({ children, className, horizontal, href, imgAlt, imgSrc, ...props }) => {
  const theme2 = useTheme().theme.card;
  const Component = typeof href === "undefined" ? "div" : "a";
  const theirProps = props;
  return (0, import_jsx_runtime16.jsxs)(Component, { className: (0, import_classnames12.default)(theme2.base, theme2.horizontal[horizontal ? "on" : "off"], href && theme2.href, className), "data-testid": "flowbite-card", href, ...theirProps, children: [imgSrc && (0, import_jsx_runtime16.jsx)("img", { alt: imgAlt ?? "", className: (0, import_classnames12.default)(theme2.img.base, theme2.img.horizontal[horizontal ? "on" : "off"]), src: imgSrc }), (0, import_jsx_runtime16.jsx)("div", { className: theme2.children, children })] });
};

// node_modules/flowbite-react/lib/esm/components/Carousel/Carousel.js
var import_jsx_runtime17 = __toESM(require_jsx_runtime());
var import_classnames13 = __toESM(require_classnames());
var import_react12 = __toESM(require_react());

// node_modules/react-indiana-drag-scroll/dist/index.es.js
var import_react11 = __toESM(require_react());
var n = function(t2, e2) {
  return (n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
    t3.__proto__ = e3;
  } || function(t3, e3) {
    for (var n2 in e3)
      e3.hasOwnProperty(n2) && (t3[n2] = e3[n2]);
  })(t2, e2);
};
var o;
var r;
var i = (function(t2) {
  !function() {
    var e2 = {}.hasOwnProperty;
    function n2() {
      for (var t3 = [], o2 = 0; o2 < arguments.length; o2++) {
        var r2 = arguments[o2];
        if (r2) {
          var i2 = typeof r2;
          if ("string" === i2 || "number" === i2)
            t3.push(r2);
          else if (Array.isArray(r2) && r2.length) {
            var s2 = n2.apply(null, r2);
            s2 && t3.push(s2);
          } else if ("object" === i2)
            for (var l2 in r2)
              e2.call(r2, l2) && r2[l2] && t3.push(l2);
        }
      }
      return t3.join(" ");
    }
    t2.exports ? (n2.default = n2, t2.exports = n2) : window.classNames = n2;
  }();
}(r = { path: o, exports: {}, require: function(t2, e2) {
  return function() {
    throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
  }(null == e2 && r.path);
} }, r.exports), r.exports);
function s(t2, e2, n2) {
  var o2, r2, i2, s2, l2;
  function a2() {
    var c3 = Date.now() - s2;
    c3 < e2 && c3 >= 0 ? o2 = setTimeout(a2, e2 - c3) : (o2 = null, n2 || (l2 = t2.apply(i2, r2), i2 = r2 = null));
  }
  null == e2 && (e2 = 100);
  var c2 = function() {
    i2 = this, r2 = arguments, s2 = Date.now();
    var c3 = n2 && !o2;
    return o2 || (o2 = setTimeout(a2, e2)), c3 && (l2 = t2.apply(i2, r2), i2 = r2 = null), l2;
  };
  return c2.clear = function() {
    o2 && (clearTimeout(o2), o2 = null);
  }, c2.flush = function() {
    o2 && (l2 = t2.apply(i2, r2), i2 = r2 = null, clearTimeout(o2), o2 = null);
  }, c2;
}
s.debounce = s;
var l = s;
!function(t2, e2) {
  void 0 === e2 && (e2 = {});
  var n2 = e2.insertAt;
  if (t2 && "undefined" != typeof document) {
    var o2 = document.head || document.getElementsByTagName("head")[0], r2 = document.createElement("style");
    r2.type = "text/css", "top" === n2 && o2.firstChild ? o2.insertBefore(r2, o2.firstChild) : o2.appendChild(r2), r2.styleSheet ? r2.styleSheet.cssText = t2 : r2.appendChild(document.createTextNode(t2));
  }
}(".indiana-scroll-container {\n  overflow: auto; }\n  .indiana-scroll-container--dragging {\n    scroll-behavior: auto !important; }\n    .indiana-scroll-container--dragging > * {\n      pointer-events: none;\n      cursor: -webkit-grab;\n      cursor: grab; }\n  .indiana-scroll-container--hide-scrollbars {\n    overflow: hidden;\n    overflow: -moz-scrollbars-none;\n    -ms-overflow-style: none;\n    scrollbar-width: none; }\n    .indiana-scroll-container--hide-scrollbars::-webkit-scrollbar {\n      display: none !important;\n      height: 0 !important;\n      width: 0 !important;\n      background: transparent !important;\n      -webkit-appearance: none !important; }\n  .indiana-scroll-container--native-scroll {\n    overflow: auto; }\n\n.indiana-dragging {\n  cursor: -webkit-grab;\n  cursor: grab; }\n");
var a;
var c = (a = "indiana-scroll-container", function(t2, e2) {
  if (!t2)
    return a;
  var n2;
  "string" == typeof t2 ? n2 = t2 : e2 = t2;
  var o2 = a;
  return n2 && (o2 += "__" + n2), o2 + (e2 ? Object.keys(e2).reduce(function(t3, n3) {
    var r2 = e2[n3];
    return r2 && (t3 += " " + ("boolean" == typeof r2 ? o2 + "--" + n3 : o2 + "--" + n3 + "_" + r2)), t3;
  }, "") : "");
});
var p = function(e2) {
  function o2(n2) {
    var o3 = e2.call(this, n2) || this;
    return o3.onEndScroll = function() {
      o3.scrolling = false, !o3.pressed && o3.started && o3.processEnd();
    }, o3.onScroll = function(t2) {
      var e3 = o3.container.current;
      e3.scrollLeft === o3.scrollLeft && e3.scrollTop === o3.scrollTop || (o3.scrolling = true, o3.processScroll(t2), o3.onEndScroll());
    }, o3.onTouchStart = function(t2) {
      var e3 = o3.props.nativeMobileScroll;
      if (o3.isDraggable(t2.target))
        if (o3.internal = true, e3 && o3.scrolling)
          o3.pressed = true;
        else {
          var n3 = t2.touches[0];
          o3.processClick(t2, n3.clientX, n3.clientY), !e3 && o3.props.stopPropagation && t2.stopPropagation();
        }
    }, o3.onTouchEnd = function(t2) {
      var e3 = o3.props.nativeMobileScroll;
      o3.pressed && (!o3.started || o3.scrolling && e3 ? o3.pressed = false : o3.processEnd(), o3.forceUpdate());
    }, o3.onTouchMove = function(t2) {
      var e3 = o3.props.nativeMobileScroll;
      if (o3.pressed && (!e3 || !o3.isMobile)) {
        var n3 = t2.touches[0];
        n3 && o3.processMove(t2, n3.clientX, n3.clientY), t2.preventDefault(), o3.props.stopPropagation && t2.stopPropagation();
      }
    }, o3.onMouseDown = function(t2) {
      o3.isDraggable(t2.target) && o3.isScrollable() && (o3.internal = true, -1 !== o3.props.buttons.indexOf(t2.button) && (o3.processClick(t2, t2.clientX, t2.clientY), t2.preventDefault(), o3.props.stopPropagation && t2.stopPropagation()));
    }, o3.onMouseMove = function(t2) {
      o3.pressed && (o3.processMove(t2, t2.clientX, t2.clientY), t2.preventDefault(), o3.props.stopPropagation && t2.stopPropagation());
    }, o3.onMouseUp = function(t2) {
      o3.pressed && (o3.started ? o3.processEnd() : (o3.internal = false, o3.pressed = false, o3.forceUpdate(), o3.props.onClick && o3.props.onClick(t2)), t2.preventDefault(), o3.props.stopPropagation && t2.stopPropagation());
    }, o3.container = import_react11.default.createRef(), o3.onEndScroll = l(o3.onEndScroll, 300), o3.scrolling = false, o3.started = false, o3.pressed = false, o3.internal = false, o3.getRef = o3.getRef.bind(o3), o3;
  }
  return function(t2, e3) {
    function o3() {
      this.constructor = t2;
    }
    n(t2, e3), t2.prototype = null === e3 ? Object.create(e3) : (o3.prototype = e3.prototype, new o3());
  }(o2, e2), o2.prototype.componentDidMount = function() {
    var t2 = this.props.nativeMobileScroll, e3 = this.container.current;
    window.addEventListener("mouseup", this.onMouseUp), window.addEventListener("mousemove", this.onMouseMove), window.addEventListener("touchmove", this.onTouchMove, { passive: false }), window.addEventListener("touchend", this.onTouchEnd), e3.addEventListener("touchstart", this.onTouchStart, { passive: false }), e3.addEventListener("mousedown", this.onMouseDown, { passive: false }), t2 && (this.isMobile = this.isMobileDevice(), this.isMobile && this.forceUpdate());
  }, o2.prototype.componentWillUnmount = function() {
    window.removeEventListener("mouseup", this.onMouseUp), window.removeEventListener("mousemove", this.onMouseMove), window.removeEventListener("touchmove", this.onTouchMove), window.removeEventListener("touchend", this.onTouchEnd);
  }, o2.prototype.getElement = function() {
    return this.container.current;
  }, o2.prototype.isMobileDevice = function() {
    return void 0 !== window.orientation || -1 !== navigator.userAgent.indexOf("IEMobile");
  }, o2.prototype.isDraggable = function(t2) {
    var e3 = this.props.ignoreElements;
    if (e3) {
      var n2 = t2.closest(e3);
      return null === n2 || n2.contains(this.getElement());
    }
    return true;
  }, o2.prototype.isScrollable = function() {
    var t2 = this.container.current;
    return t2 && (t2.scrollWidth > t2.clientWidth || t2.scrollHeight > t2.clientHeight);
  }, o2.prototype.processClick = function(t2, e3, n2) {
    var o3 = this.container.current;
    this.scrollLeft = o3.scrollLeft, this.scrollTop = o3.scrollTop, this.clientX = e3, this.clientY = n2, this.pressed = true;
  }, o2.prototype.processStart = function(t2) {
    void 0 === t2 && (t2 = true);
    var e3 = this.props.onStartScroll;
    this.started = true, t2 && document.body.classList.add("indiana-dragging"), e3 && e3({ external: !this.internal }), this.forceUpdate();
  }, o2.prototype.processScroll = function(t2) {
    if (this.started) {
      var e3 = this.props.onScroll;
      e3 && e3({ external: !this.internal });
    } else
      this.processStart(false);
  }, o2.prototype.processMove = function(t2, e3, n2) {
    var o3 = this.props, r2 = o3.horizontal, i2 = o3.vertical, s2 = o3.activationDistance, l2 = o3.onScroll, a2 = this.container.current;
    this.started ? (r2 && (a2.scrollLeft -= e3 - this.clientX), i2 && (a2.scrollTop -= n2 - this.clientY), l2 && l2({ external: !this.internal }), this.clientX = e3, this.clientY = n2, this.scrollLeft = a2.scrollLeft, this.scrollTop = a2.scrollTop) : (r2 && Math.abs(e3 - this.clientX) > s2 || i2 && Math.abs(n2 - this.clientY) > s2) && (this.clientX = e3, this.clientY = n2, this.processStart());
  }, o2.prototype.processEnd = function() {
    var t2 = this.props.onEndScroll;
    this.container.current && t2 && t2({ external: !this.internal }), this.pressed = false, this.started = false, this.scrolling = false, this.internal = false, document.body.classList.remove("indiana-dragging"), this.forceUpdate();
  }, o2.prototype.getRef = function(t2) {
    [this.container, this.props.innerRef].forEach(function(e3) {
      e3 && ("function" == typeof e3 ? e3(t2) : e3.current = t2);
    });
  }, o2.prototype.render = function() {
    var e3 = this.props, n2 = e3.children, o3 = e3.draggingClassName, r2 = e3.className, s2 = e3.style, l2 = e3.hideScrollbars, a2 = e3.component;
    return import_react11.default.createElement(a2, { className: i(r2, this.pressed && o3, c({ dragging: this.pressed, "hide-scrollbars": l2, "native-scroll": this.isMobile })), style: s2, ref: this.getRef, onScroll: this.onScroll }, n2);
  }, o2.defaultProps = { nativeMobileScroll: true, hideScrollbars: true, activationDistance: 10, vertical: true, horizontal: true, stopPropagation: false, style: {}, component: "div", buttons: [0] }, o2;
}(import_react11.PureComponent);
var index_es_default = p;

// node_modules/flowbite-react/lib/esm/components/Carousel/Carousel.js
var Carousel = ({ children, indicators = true, leftControl, rightControl, slide = true, slideInterval, className, ...props }) => {
  const isDeviceMobile = window_exists_default() && navigator.userAgent.indexOf("IEMobile") !== -1;
  const carouselContainer = (0, import_react12.useRef)(null);
  const [activeItem, setActiveItem] = (0, import_react12.useState)(0);
  const [isDragging, setIsDragging] = (0, import_react12.useState)(false);
  const theme2 = useTheme().theme.carousel;
  const items = (0, import_react12.useMemo)(() => import_react12.Children.map(children, (child) => (0, import_react12.cloneElement)(child, {
    className: (0, import_classnames13.default)(theme2.item.base, child.props.className)
  })), [children, theme2.item.base]);
  const navigateTo = (0, import_react12.useCallback)((item) => () => {
    if (!items)
      return;
    item = (item + items.length) % items.length;
    if (carouselContainer.current) {
      carouselContainer.current.scrollLeft = carouselContainer.current.clientWidth * item;
    }
    setActiveItem(item);
  }, [items]);
  (0, import_react12.useEffect)(() => {
    if (carouselContainer.current && !isDragging && carouselContainer.current.scrollLeft !== 0) {
      setActiveItem(Math.round(carouselContainer.current.scrollLeft / carouselContainer.current.clientWidth));
    }
  }, [isDragging]);
  (0, import_react12.useEffect)(() => {
    if (slide) {
      const intervalId = setInterval(() => !isDragging && navigateTo(activeItem + 1)(), slideInterval ?? 3e3);
      return () => clearInterval(intervalId);
    }
  }, [activeItem, isDragging, navigateTo, slide, slideInterval]);
  const handleDragging = (dragging) => () => setIsDragging(dragging);
  return (0, import_jsx_runtime17.jsxs)("div", { className: (0, import_classnames13.default)(theme2.base, className), "data-testid": "carousel", ...props, children: [(0, import_jsx_runtime17.jsx)(index_es_default, { className: (0, import_classnames13.default)(theme2.scrollContainer.base, (isDeviceMobile || !isDragging) && theme2.scrollContainer.snap), draggingClassName: "cursor-grab", innerRef: carouselContainer, onEndScroll: handleDragging(false), onStartScroll: handleDragging(true), vertical: false, children: items == null ? void 0 : items.map((item, index3) => (0, import_jsx_runtime17.jsx)("div", { className: theme2.item.wrapper, "data-active": activeItem === index3, "data-testid": "carousel-item", children: item }, index3)) }), indicators && (0, import_jsx_runtime17.jsx)("div", { className: theme2.indicators.wrapper, children: items == null ? void 0 : items.map((_, index3) => (0, import_jsx_runtime17.jsx)("button", { className: (0, import_classnames13.default)(theme2.indicators.base, theme2.indicators.active[index3 === activeItem ? "on" : "off"]), onClick: navigateTo(index3), "data-testid": "carousel-indicator" }, index3)) }), items && (0, import_jsx_runtime17.jsxs)(import_jsx_runtime17.Fragment, { children: [(0, import_jsx_runtime17.jsx)("div", { className: theme2.leftControl, children: (0, import_jsx_runtime17.jsx)("button", { className: "group", "data-testid": "carousel-left-control", onClick: navigateTo(activeItem - 1), type: "button", children: leftControl ? leftControl : (0, import_jsx_runtime17.jsx)(DefaultLeftControl, {}) }) }), (0, import_jsx_runtime17.jsx)("div", { className: theme2.rightControl, children: (0, import_jsx_runtime17.jsx)("button", { className: "group", "data-testid": "carousel-right-control", onClick: navigateTo(activeItem + 1), type: "button", children: rightControl ? rightControl : (0, import_jsx_runtime17.jsx)(DefaultRightControl, {}) }) })] })] });
};
var DefaultLeftControl = () => {
  const theme2 = useTheme().theme.carousel;
  return (0, import_jsx_runtime17.jsx)("span", { className: theme2.control.base, children: (0, import_jsx_runtime17.jsx)(HiOutlineChevronLeft, { className: theme2.control.icon }) });
};
var DefaultRightControl = () => {
  const theme2 = useTheme().theme.carousel;
  return (0, import_jsx_runtime17.jsx)("span", { className: theme2.control.base, children: (0, import_jsx_runtime17.jsx)(HiOutlineChevronRight, { className: theme2.control.icon }) });
};

// node_modules/flowbite-react/lib/esm/components/Checkbox/Checkbox.js
var import_jsx_runtime18 = __toESM(require_jsx_runtime());
var import_classnames14 = __toESM(require_classnames());
var import_react13 = __toESM(require_react());
var Checkbox = (0, import_react13.forwardRef)(({ className, ...props }, ref) => {
  const theme2 = useTheme().theme.checkbox;
  return (0, import_jsx_runtime18.jsx)("input", { ref, className: (0, import_classnames14.default)(theme2.base, className), type: "checkbox", ...props });
});
Checkbox.displayName = "Checkbox";

// node_modules/flowbite-react/lib/esm/components/DarkThemeToggle/DarkThemeToggle.js
var import_jsx_runtime19 = __toESM(require_jsx_runtime());
var import_classnames15 = __toESM(require_classnames());
var import_react14 = __toESM(require_react());
var DarkThemeToggle = ({ className, ...props }) => {
  const theme2 = useTheme().theme.darkThemeToggle;
  const { mode, toggleMode } = (0, import_react14.useContext)(ThemeContext);
  return (0, import_jsx_runtime19.jsx)("button", { className: (0, import_classnames15.default)(theme2.base, className), "data-testid": "dark-theme-toggle", onClick: toggleMode, type: "button", "aria-label": "Toggle dark mode", ...props, children: mode === "dark" ? (0, import_jsx_runtime19.jsx)(HiSun, { "aria-label": "Currently dark mode", className: theme2.icon }) : (0, import_jsx_runtime19.jsx)(HiMoon, { "aria-label": "Currently light mode", className: theme2.icon }) });
};

// node_modules/flowbite-react/lib/esm/components/Dropdown/Dropdown.js
var import_jsx_runtime24 = __toESM(require_jsx_runtime());
var import_react18 = __toESM(require_react());

// node_modules/flowbite-react/lib/esm/helpers/uuid.js
function uuid() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c2) {
    const r2 = Math.random() * 16 | 0, v = c2 == "x" ? r2 : r2 & 3 | 8;
    return v.toString(16);
  });
}

// node_modules/flowbite-react/lib/esm/components/Floating/Floating.js
var import_jsx_runtime20 = __toESM(require_jsx_runtime());

// node_modules/@floating-ui/core/dist/floating-ui.core.browser.mjs
function getSide(placement) {
  return placement.split("-")[0];
}
function getAlignment(placement) {
  return placement.split("-")[1];
}
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].includes(getSide(placement)) ? "x" : "y";
}
function getLengthFromAxis(axis) {
  return axis === "y" ? "height" : "width";
}
function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const mainAxis = getMainAxisFromPlacement(placement);
  const length = getLengthFromAxis(mainAxis);
  const commonAlign = reference[length] / 2 - floating[length] / 2;
  const side = getSide(placement);
  const isVertical = mainAxis === "x";
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case "start":
      coords[mainAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case "end":
      coords[mainAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}
var computePosition = async (reference, floating, config) => {
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(floating));
  {
    if (platform2 == null) {
      console.error(["Floating UI: `platform` property was not passed to config. If you", "want to use Floating UI on the web, install @floating-ui/dom", "instead of the /core package. Otherwise, you can create your own", "`platform`: https://floating-ui.com/docs/platform"].join(" "));
    }
    if (validMiddleware.filter((_ref) => {
      let {
        name
      } = _ref;
      return name === "autoPlacement" || name === "flip";
    }).length > 1) {
      throw new Error(["Floating UI: duplicate `flip` and/or `autoPlacement` middleware", "detected. This will lead to an infinite loop. Ensure only one of", "either has been passed to the `middleware` array."].join(" "));
    }
    if (!reference || !floating) {
      console.error(["Floating UI: The reference and/or floating element was not defined", "when `computePosition()` was called. Ensure that both elements have", "been created and can be measured."].join(" "));
    }
  }
  let rects = await platform2.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i2 = 0; i2 < validMiddleware.length; i2++) {
    const {
      name,
      fn
    } = validMiddleware[i2];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform: platform2,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data
      }
    };
    {
      if (resetCount > 50) {
        console.warn(["Floating UI: The middleware lifecycle appears to be running in an", "infinite loop. This is usually caused by a `reset` continually", "being returned without a break condition."].join(" "));
      }
    }
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === "object") {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform2.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i2 = -1;
      continue;
    }
  }
  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getSideObjectFromPadding(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  return {
    ...rect,
    top: rect.y,
    left: rect.x,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  };
}
async function detectOverflow(middlewareArguments, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x,
    y,
    platform: platform2,
    rects,
    elements,
    strategy
  } = middlewareArguments;
  const {
    boundary = "clippingAncestors",
    rootBoundary = "viewport",
    elementContext = "floating",
    altBoundary = false,
    padding = 0
  } = options;
  const paddingObject = getSideObjectFromPadding(padding);
  const altContext = elementContext === "floating" ? "reference" : "floating";
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform2.getClippingRect({
    element: ((_await$platform$isEle = await (platform2.isElement == null ? void 0 : platform2.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === "floating" ? {
    ...rects.floating,
    x,
    y
  } : rects.reference;
  const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect,
    offsetParent: await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating)),
    strategy
  }) : rect);
  return {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
}
var min = Math.min;
var max = Math.max;
function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}
var arrow = (options) => ({
  name: "arrow",
  options,
  async fn(middlewareArguments) {
    const {
      element,
      padding = 0
    } = options != null ? options : {};
    const {
      x,
      y,
      placement,
      rects,
      platform: platform2
    } = middlewareArguments;
    if (element == null) {
      {
        console.warn("Floating UI: No `element` was passed to the `arrow` middleware.");
      }
      return {};
    }
    const paddingObject = getSideObjectFromPadding(padding);
    const coords = {
      x,
      y
    };
    const axis = getMainAxisFromPlacement(placement);
    const alignment = getAlignment(placement);
    const length = getLengthFromAxis(axis);
    const arrowDimensions = await platform2.getDimensions(element);
    const minProp = axis === "y" ? "top" : "left";
    const maxProp = axis === "y" ? "bottom" : "right";
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(element));
    let clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
    if (clientSize === 0) {
      clientSize = rects.floating[length];
    }
    const centerToReference = endDiff / 2 - startDiff / 2;
    const min3 = paddingObject[minProp];
    const max3 = clientSize - arrowDimensions[length] - paddingObject[maxProp];
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset2 = within(min3, center, max3);
    const alignmentPadding = alignment === "start" ? paddingObject[minProp] : paddingObject[maxProp];
    const shouldAddOffset = alignmentPadding > 0 && center !== offset2 && rects.reference[length] <= rects.floating[length];
    const alignmentOffset = shouldAddOffset ? center < min3 ? min3 - center : max3 - center : 0;
    return {
      [axis]: coords[axis] - alignmentOffset,
      data: {
        [axis]: offset2,
        centerOffset: center - offset2
      }
    };
  }
});
var hash$1 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, (matched) => hash$1[matched]);
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const mainAxis = getMainAxisFromPlacement(placement);
  const length = getLengthFromAxis(mainAxis);
  let mainAlignmentSide = mainAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return {
    main: mainAlignmentSide,
    cross: getOppositePlacement(mainAlignmentSide)
  };
}
var hash = {
  start: "end",
  end: "start"
};
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, (matched) => hash[matched]);
}
var sides = ["top", "right", "bottom", "left"];
var allPlacements = sides.reduce((acc, side) => acc.concat(side, side + "-start", side + "-end"), []);
function getPlacementList(alignment, autoAlignment, allowedPlacements) {
  const allowedPlacementsSortedByAlignment = alignment ? [...allowedPlacements.filter((placement) => getAlignment(placement) === alignment), ...allowedPlacements.filter((placement) => getAlignment(placement) !== alignment)] : allowedPlacements.filter((placement) => getSide(placement) === placement);
  return allowedPlacementsSortedByAlignment.filter((placement) => {
    if (alignment) {
      return getAlignment(placement) === alignment || (autoAlignment ? getOppositeAlignmentPlacement(placement) !== placement : false);
    }
    return true;
  });
}
var autoPlacement = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "autoPlacement",
    options,
    async fn(middlewareArguments) {
      var _middlewareData$autoP, _middlewareData$autoP2, _middlewareData$autoP3, _middlewareData$autoP4, _placementsSortedByLe;
      const {
        x,
        y,
        rects,
        middlewareData,
        placement,
        platform: platform2,
        elements
      } = middlewareArguments;
      const {
        alignment = null,
        allowedPlacements = allPlacements,
        autoAlignment = true,
        ...detectOverflowOptions
      } = options;
      const placements = getPlacementList(alignment, autoAlignment, allowedPlacements);
      const overflow = await detectOverflow(middlewareArguments, detectOverflowOptions);
      const currentIndex = (_middlewareData$autoP = (_middlewareData$autoP2 = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP2.index) != null ? _middlewareData$autoP : 0;
      const currentPlacement = placements[currentIndex];
      if (currentPlacement == null) {
        return {};
      }
      const {
        main,
        cross
      } = getAlignmentSides(currentPlacement, rects, await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating)));
      if (placement !== currentPlacement) {
        return {
          x,
          y,
          reset: {
            placement: placements[0]
          }
        };
      }
      const currentOverflows = [overflow[getSide(currentPlacement)], overflow[main], overflow[cross]];
      const allOverflows = [...(_middlewareData$autoP3 = (_middlewareData$autoP4 = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP4.overflows) != null ? _middlewareData$autoP3 : [], {
        placement: currentPlacement,
        overflows: currentOverflows
      }];
      const nextPlacement = placements[currentIndex + 1];
      if (nextPlacement) {
        return {
          data: {
            index: currentIndex + 1,
            overflows: allOverflows
          },
          reset: {
            placement: nextPlacement
          }
        };
      }
      const placementsSortedByLeastOverflow = allOverflows.slice().sort((a2, b) => a2.overflows[0] - b.overflows[0]);
      const placementThatFitsOnAllSides = (_placementsSortedByLe = placementsSortedByLeastOverflow.find((_ref) => {
        let {
          overflows
        } = _ref;
        return overflows.every((overflow2) => overflow2 <= 0);
      })) == null ? void 0 : _placementsSortedByLe.placement;
      const resetPlacement = placementThatFitsOnAllSides != null ? placementThatFitsOnAllSides : placementsSortedByLeastOverflow[0].placement;
      if (resetPlacement !== placement) {
        return {
          data: {
            index: currentIndex + 1,
            overflows: allOverflows
          },
          reset: {
            placement: resetPlacement
          }
        };
      }
      return {};
    }
  };
};
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
var flip = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "flip",
    options,
    async fn(middlewareArguments) {
      var _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform: platform2,
        elements
      } = middlewareArguments;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = "bestFit",
        flipAlignment = true,
        ...detectOverflowOptions
      } = options;
      const side = getSide(placement);
      const isBasePlacement = side === initialPlacement;
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      const placements = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(middlewareArguments, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const {
          main,
          cross
        } = getAlignmentSides(placement, rects, await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating)));
        overflows.push(overflow[main], overflow[cross]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];
      if (!overflows.every((side2) => side2 <= 0)) {
        var _middlewareData$flip$, _middlewareData$flip2;
        const nextIndex = ((_middlewareData$flip$ = (_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) != null ? _middlewareData$flip$ : 0) + 1;
        const nextPlacement = placements[nextIndex];
        if (nextPlacement) {
          return {
            data: {
              index: nextIndex,
              overflows: overflowsData
            },
            reset: {
              placement: nextPlacement
            }
          };
        }
        let resetPlacement = "bottom";
        switch (fallbackStrategy) {
          case "bestFit": {
            var _overflowsData$map$so;
            const placement2 = (_overflowsData$map$so = overflowsData.map((d) => [d, d.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a2, b) => a2[1] - b[1])[0]) == null ? void 0 : _overflowsData$map$so[0].placement;
            if (placement2) {
              resetPlacement = placement2;
            }
            break;
          }
          case "initialPlacement":
            resetPlacement = initialPlacement;
            break;
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};
async function convertValueToCoords(middlewareArguments, value) {
  const {
    placement,
    platform: platform2,
    elements
  } = middlewareArguments;
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getMainAxisFromPlacement(placement) === "x";
  const mainAxisMulti = ["left", "top"].includes(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = typeof value === "function" ? value(middlewareArguments) : value;
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === "number" ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...rawValue
  };
  if (alignment && typeof alignmentAxis === "number") {
    crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}
var offset = function(value) {
  if (value === void 0) {
    value = 0;
  }
  return {
    name: "offset",
    options: value,
    async fn(middlewareArguments) {
      const {
        x,
        y
      } = middlewareArguments;
      const diffCoords = await convertValueToCoords(middlewareArguments, value);
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: diffCoords
      };
    }
  };
};
function getCrossAxis(axis) {
  return axis === "x" ? "y" : "x";
}
var shift = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "shift",
    options,
    async fn(middlewareArguments) {
      const {
        x,
        y,
        placement
      } = middlewareArguments;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: (_ref) => {
            let {
              x: x2,
              y: y2
            } = _ref;
            return {
              x: x2,
              y: y2
            };
          }
        },
        ...detectOverflowOptions
      } = options;
      const coords = {
        x,
        y
      };
      const overflow = await detectOverflow(middlewareArguments, detectOverflowOptions);
      const mainAxis = getMainAxisFromPlacement(getSide(placement));
      const crossAxis = getCrossAxis(mainAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === "y" ? "top" : "left";
        const maxSide = mainAxis === "y" ? "bottom" : "right";
        const min3 = mainAxisCoord + overflow[minSide];
        const max3 = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = within(min3, mainAxisCoord, max3);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === "y" ? "top" : "left";
        const maxSide = crossAxis === "y" ? "bottom" : "right";
        const min3 = crossAxisCoord + overflow[minSide];
        const max3 = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = within(min3, crossAxisCoord, max3);
      }
      const limitedCoords = limiter.fn({
        ...middlewareArguments,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x,
          y: limitedCoords.y - y
        }
      };
    }
  };
};

// node_modules/@floating-ui/dom/dist/floating-ui.dom.browser.mjs
function getWindow(node) {
  var _node$ownerDocument;
  return ((_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeName(node) {
  return isNode(node) ? (node.nodeName || "").toLowerCase() : "";
}
function getUAString() {
  const uaData = navigator.userAgentData;
  if (uaData && Array.isArray(uaData.brands)) {
    return uaData.brands.map((item) => item.brand + "/" + item.version).join(" ");
  }
  return navigator.userAgent;
}
function isHTMLElement(value) {
  return value instanceof getWindow(value).HTMLElement;
}
function isElement(value) {
  return value instanceof getWindow(value).Element;
}
function isNode(value) {
  return value instanceof getWindow(value).Node;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  const OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle(element);
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX) && !["inline", "contents"].includes(display);
}
function isTableElement(element) {
  return ["table", "td", "th"].includes(getNodeName(element));
}
function isContainingBlock(element) {
  const isFirefox = /firefox/i.test(getUAString());
  const css = getComputedStyle(element);
  const backdropFilter = css.backdropFilter || css.WebkitBackdropFilter;
  return css.transform !== "none" || css.perspective !== "none" || (backdropFilter ? backdropFilter !== "none" : false) || isFirefox && css.willChange === "filter" || isFirefox && (css.filter ? css.filter !== "none" : false) || ["transform", "perspective"].some((value) => css.willChange.includes(value)) || ["paint", "layout", "strict", "content"].some(
    // TS 4.1 compat
    (value) => {
      const contain = css.contain;
      return contain != null ? contain.includes(value) : false;
    }
  );
}
function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}
function isLastTraversableNode(node) {
  return ["html", "body", "#document"].includes(getNodeName(node));
}
var min2 = Math.min;
var max2 = Math.max;
var round = Math.round;
function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  var _win$visualViewport$o, _win$visualViewport, _win$visualViewport$o2, _win$visualViewport2;
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  let contextRect = clientRect;
  let elementToCheckForScale = element;
  let scaleX = 1;
  let scaleY = 1;
  if (!isElement(element) && element.contextElement) {
    contextRect = element.contextElement.getBoundingClientRect();
    elementToCheckForScale = element.contextElement;
  }
  if (includeScale && isHTMLElement(elementToCheckForScale)) {
    scaleX = elementToCheckForScale.offsetWidth > 0 ? round(contextRect.width) / elementToCheckForScale.offsetWidth || 1 : 1;
    scaleY = elementToCheckForScale.offsetHeight > 0 ? round(contextRect.height) / elementToCheckForScale.offsetHeight || 1 : 1;
  }
  const win = isElement(element) ? getWindow(element) : window;
  const addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  const x = (clientRect.left + (addVisualOffsets ? (_win$visualViewport$o = (_win$visualViewport = win.visualViewport) == null ? void 0 : _win$visualViewport.offsetLeft) != null ? _win$visualViewport$o : 0 : 0)) / scaleX;
  const y = (clientRect.top + (addVisualOffsets ? (_win$visualViewport$o2 = (_win$visualViewport2 = win.visualViewport) == null ? void 0 : _win$visualViewport2.offsetTop) != null ? _win$visualViewport$o2 : 0 : 0)) / scaleY;
  const width = clientRect.width / scaleX;
  const height = clientRect.height / scaleY;
  return {
    width,
    height,
    top: y,
    right: x + width,
    bottom: y + height,
    left: x,
    x,
    y
  };
}
function getDocumentElement(node) {
  return ((isNode(node) ? node.ownerDocument : node.document) || window.document).documentElement;
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.pageXOffset,
    scrollTop: element.pageYOffset
  };
}
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
}
function isScaled(element) {
  const rect = getBoundingClientRect(element);
  return round(rect.width) !== element.offsetWidth || round(rect.height) !== element.offsetHeight;
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const rect = getBoundingClientRect(
    element,
    // @ts-ignore - checked above (TS 4.1 compat)
    isOffsetParentAnElement && isScaled(offsetParent),
    strategy === "fixed"
  );
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== "fixed") {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent, true);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  const result = (
    // Step into the shadow DOM of the parent of a slotted node
    node.assignedSlot || // DOM Element detected
    node.parentNode || // ShadowRoot detected
    (isShadowRoot(node) ? node.host : null) || // Fallback
    getDocumentElement(node)
  );
  return isShadowRoot(result) ? result.host : result;
}
function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || getComputedStyle(element).position === "fixed") {
    return null;
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else {
      currentNode = getParentNode(currentNode);
    }
  }
  return null;
}
function getOffsetParent(element) {
  const window2 = getWindow(element);
  let offsetParent = getTrueOffsetParent(element);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle(offsetParent).position === "static" && !isContainingBlock(offsetParent))) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}
function getDimensions(element) {
  if (isHTMLElement(element)) {
    return {
      width: element.offsetWidth,
      height: element.offsetHeight
    };
  }
  const rect = getBoundingClientRect(element);
  return {
    width: rect.width,
    height: rect.height
  };
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  if (offsetParent === documentElement) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== "fixed") {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  return {
    ...rect,
    x: rect.x - scroll.scrollLeft + offsets.x,
    y: rect.y - scroll.scrollTop + offsets.y
  };
}
function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const layoutViewport = isLayoutViewport();
    if (layoutViewport || !layoutViewport && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getDocumentRect(element) {
  var _element$ownerDocumen;
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  const width = max2(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  const height = max2(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y = -scroll.scrollTop;
  if (getComputedStyle(body || html).direction === "rtl") {
    x += max2(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list) {
  var _node$ownerDocument;
  if (list === void 0) {
    list = [];
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor));
}
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, false, strategy === "fixed");
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  return {
    top,
    left,
    x: left,
    y: top,
    right: left + element.clientWidth,
    bottom: top + element.clientHeight,
    width: element.clientWidth,
    height: element.clientHeight
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  if (clippingAncestor === "viewport") {
    return rectToClientRect(getViewportRect(element, strategy));
  }
  if (isElement(clippingAncestor)) {
    return getInnerBoundingClientRect(clippingAncestor, strategy);
  }
  return rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingElementAncestors(element) {
  let result = getOverflowAncestors(element).filter((el) => isElement(el) && getNodeName(el) !== "body");
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle(element).position === "fixed";
  let currentNode = elementIsFixed ? getParentNode(element) : element;
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle(currentNode);
    const containingBlock = isContainingBlock(currentNode);
    const shouldDropCurrentNode = elementIsFixed ? !containingBlock && !currentContainingBlockComputedStyle : !containingBlock && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && ["absolute", "fixed"].includes(currentContainingBlockComputedStyle.position);
    if (shouldDropCurrentNode) {
      result = result.filter((ancestor) => ancestor !== currentNode);
    } else {
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  return result;
}
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === "clippingAncestors" ? getClippingElementAncestors(element) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max2(rect.top, accRect.top);
    accRect.right = min2(rect.right, accRect.right);
    accRect.bottom = min2(rect.bottom, accRect.bottom);
    accRect.left = max2(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}
var platform = {
  getClippingRect,
  convertOffsetParentRelativeRectToViewportRelativeRect,
  isElement,
  getDimensions,
  getOffsetParent,
  getDocumentElement,
  async getElementRects(_ref) {
    let {
      reference,
      floating,
      strategy
    } = _ref;
    const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
    const getDimensionsFn = this.getDimensions;
    return {
      reference: getRectRelativeToOffsetParent(reference, await getOffsetParentFn(floating), strategy),
      floating: {
        x: 0,
        y: 0,
        ...await getDimensionsFn(floating)
      }
    };
  },
  getClientRects: (element) => Array.from(element.getClientRects()),
  isRTL: (element) => getComputedStyle(element).direction === "rtl"
};
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll: _ancestorScroll = true,
    ancestorResize = true,
    elementResize = true,
    animationFrame = false
  } = options;
  const ancestorScroll = _ancestorScroll && !animationFrame;
  const ancestors = ancestorScroll || ancestorResize ? [...isElement(reference) ? getOverflowAncestors(reference) : reference.contextElement ? getOverflowAncestors(reference.contextElement) : [], ...getOverflowAncestors(floating)] : [];
  ancestors.forEach((ancestor) => {
    ancestorScroll && ancestor.addEventListener("scroll", update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener("resize", update);
  });
  let observer = null;
  if (elementResize) {
    let initialUpdate = true;
    observer = new ResizeObserver(() => {
      if (!initialUpdate) {
        update();
      }
      initialUpdate = false;
    });
    isElement(reference) && !animationFrame && observer.observe(reference);
    if (!isElement(reference) && reference.contextElement && !animationFrame) {
      observer.observe(reference.contextElement);
    }
    observer.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    var _observer;
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.removeEventListener("scroll", update);
      ancestorResize && ancestor.removeEventListener("resize", update);
    });
    (_observer = observer) == null ? void 0 : _observer.disconnect();
    observer = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}
var computePosition2 = (reference, floating, options) => computePosition(reference, floating, {
  platform,
  ...options
});

// node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.esm.js
var React3 = __toESM(require_react());
var import_react15 = __toESM(require_react());
var ReactDOM = __toESM(require_react_dom());
var index = typeof document !== "undefined" ? import_react15.useLayoutEffect : import_react15.useEffect;
function deepEqual(a2, b) {
  if (a2 === b) {
    return true;
  }
  if (typeof a2 !== typeof b) {
    return false;
  }
  if (typeof a2 === "function" && a2.toString() === b.toString()) {
    return true;
  }
  let length, i2, keys;
  if (a2 && b && typeof a2 == "object") {
    if (Array.isArray(a2)) {
      length = a2.length;
      if (length != b.length)
        return false;
      for (i2 = length; i2-- !== 0; ) {
        if (!deepEqual(a2[i2], b[i2])) {
          return false;
        }
      }
      return true;
    }
    keys = Object.keys(a2);
    length = keys.length;
    if (length !== Object.keys(b).length) {
      return false;
    }
    for (i2 = length; i2-- !== 0; ) {
      if (!Object.prototype.hasOwnProperty.call(b, keys[i2])) {
        return false;
      }
    }
    for (i2 = length; i2-- !== 0; ) {
      const key = keys[i2];
      if (key === "_owner" && a2.$$typeof) {
        continue;
      }
      if (!deepEqual(a2[key], b[key])) {
        return false;
      }
    }
    return true;
  }
  return a2 !== a2 && b !== b;
}
function useLatestRef(value) {
  const ref = React3.useRef(value);
  index(() => {
    ref.current = value;
  });
  return ref;
}
function useFloating(_temp) {
  let {
    middleware = [],
    placement = "bottom",
    strategy = "absolute",
    whileElementsMounted
  } = _temp === void 0 ? {} : _temp;
  const [data, setData] = React3.useState({
    // Setting these to `null` will allow the consumer to determine if
    // `computePosition()` has run yet
    x: null,
    y: null,
    strategy,
    placement,
    middlewareData: {}
  });
  const [latestMiddleware, setLatestMiddleware] = React3.useState(middleware);
  if (!deepEqual(latestMiddleware, middleware)) {
    setLatestMiddleware(middleware);
  }
  const reference = React3.useRef(null);
  const floating = React3.useRef(null);
  const cleanupRef = React3.useRef(null);
  const dataRef = React3.useRef(data);
  const whileElementsMountedRef = useLatestRef(whileElementsMounted);
  const update = React3.useCallback(() => {
    if (!reference.current || !floating.current) {
      return;
    }
    computePosition2(reference.current, floating.current, {
      middleware: latestMiddleware,
      placement,
      strategy
    }).then((data2) => {
      if (isMountedRef.current && !deepEqual(dataRef.current, data2)) {
        dataRef.current = data2;
        ReactDOM.flushSync(() => {
          setData(data2);
        });
      }
    });
  }, [latestMiddleware, placement, strategy]);
  index(() => {
    if (isMountedRef.current) {
      update();
    }
  }, [update]);
  const isMountedRef = React3.useRef(false);
  index(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  const runElementMountCallback = React3.useCallback(() => {
    if (typeof cleanupRef.current === "function") {
      cleanupRef.current();
      cleanupRef.current = null;
    }
    if (reference.current && floating.current) {
      if (whileElementsMountedRef.current) {
        const cleanupFn = whileElementsMountedRef.current(reference.current, floating.current, update);
        cleanupRef.current = cleanupFn;
      } else {
        update();
      }
    }
  }, [update, whileElementsMountedRef]);
  const setReference = React3.useCallback((node) => {
    reference.current = node;
    runElementMountCallback();
  }, [runElementMountCallback]);
  const setFloating = React3.useCallback((node) => {
    floating.current = node;
    runElementMountCallback();
  }, [runElementMountCallback]);
  const refs = React3.useMemo(() => ({
    reference,
    floating
  }), []);
  return React3.useMemo(() => ({
    ...data,
    update,
    refs,
    reference: setReference,
    floating: setFloating
  }), [data, update, refs, setReference, setFloating]);
}

// node_modules/@floating-ui/react-dom-interactions/dist/floating-ui.react-dom-interactions.esm.js
var React4 = __toESM(require_react());
var import_react16 = __toESM(require_react());
var import_react_dom2 = __toESM(require_react_dom());
var index2 = typeof document !== "undefined" ? import_react16.useLayoutEffect : import_react16.useEffect;
function createPubSub() {
  const map = /* @__PURE__ */ new Map();
  return {
    emit(event, data) {
      var _map$get;
      (_map$get = map.get(event)) == null ? void 0 : _map$get.forEach((handler) => handler(data));
    },
    on(event, listener) {
      map.set(event, [...map.get(event) || [], listener]);
    },
    off(event, listener) {
      map.set(event, (map.get(event) || []).filter((l2) => l2 !== listener));
    }
  };
}
var serverHandoffComplete = false;
var count = 0;
var genId = () => "floating-ui-" + count++;
function useFloatingId() {
  const [id, setId] = React4.useState(() => serverHandoffComplete ? genId() : void 0);
  index2(() => {
    if (id == null) {
      setId(genId());
    }
  }, []);
  React4.useEffect(() => {
    if (!serverHandoffComplete) {
      serverHandoffComplete = true;
    }
  }, []);
  return id;
}
var useReactId = React4["useId".toString()];
var useId = useReactId != null ? useReactId : useFloatingId;
var FloatingNodeContext = React4.createContext(null);
var FloatingTreeContext = React4.createContext(null);
var useFloatingParentNodeId = () => {
  var _React$useContext$id, _React$useContext;
  return (_React$useContext$id = (_React$useContext = React4.useContext(FloatingNodeContext)) == null ? void 0 : _React$useContext.id) != null ? _React$useContext$id : null;
};
var useFloatingTree = () => React4.useContext(FloatingTreeContext);
function getDocument(floating) {
  var _floating$ownerDocume;
  return (_floating$ownerDocume = floating == null ? void 0 : floating.ownerDocument) != null ? _floating$ownerDocume : document;
}
function getWindow2(value) {
  var _getDocument$defaultV;
  return (_getDocument$defaultV = getDocument(value).defaultView) != null ? _getDocument$defaultV : window;
}
function isElement2(value) {
  return value ? value instanceof getWindow2(value).Element : false;
}
function isHTMLElement2(value) {
  return value ? value instanceof getWindow2(value).HTMLElement : false;
}
var useInsertionEffect = React4["useInsertionEffect".toString()];
function useEvent(callback) {
  const ref = React4.useRef(() => {
    if (true) {
      throw new Error("Cannot call an event handler while rendering.");
    }
  });
  if (useInsertionEffect) {
    useInsertionEffect(() => {
      ref.current = callback;
    });
  } else {
    ref.current = callback;
  }
  return React4.useCallback(function() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return ref.current == null ? void 0 : ref.current(...args);
  }, []);
}
function useFloating2(_temp) {
  let {
    open = false,
    onOpenChange: unstable_onOpenChange,
    whileElementsMounted,
    placement,
    middleware,
    strategy,
    nodeId
  } = _temp === void 0 ? {} : _temp;
  const [domReference, setDomReference] = React4.useState(null);
  const tree = useFloatingTree();
  const domReferenceRef = React4.useRef(null);
  const dataRef = React4.useRef({});
  const events = React4.useState(() => createPubSub())[0];
  const position = useFloating({
    placement,
    middleware,
    strategy,
    whileElementsMounted
  });
  const onOpenChange = useEvent(unstable_onOpenChange);
  const refs = React4.useMemo(() => ({
    ...position.refs,
    domReference: domReferenceRef
  }), [position.refs]);
  const context = React4.useMemo(() => ({
    ...position,
    refs,
    dataRef,
    nodeId,
    events,
    open,
    onOpenChange,
    _: {
      domReference
    }
  }), [position, nodeId, events, open, onOpenChange, refs, domReference]);
  index2(() => {
    const node = tree == null ? void 0 : tree.nodesRef.current.find((node2) => node2.id === nodeId);
    if (node) {
      node.context = context;
    }
  });
  const {
    reference
  } = position;
  const setReference = React4.useCallback((node) => {
    if (isElement2(node) || node === null) {
      context.refs.domReference.current = node;
      setDomReference(node);
    }
    reference(node);
  }, [reference, context.refs]);
  return React4.useMemo(() => ({
    ...position,
    context,
    refs,
    reference: setReference
  }), [position, refs, context, setReference]);
}
function mergeProps(userProps, propsList, elementKey) {
  const map = /* @__PURE__ */ new Map();
  return {
    ...elementKey === "floating" && {
      tabIndex: -1
    },
    ...userProps,
    ...propsList.map((value) => value ? value[elementKey] : null).concat(userProps).reduce((acc, props) => {
      if (!props) {
        return acc;
      }
      Object.entries(props).forEach((_ref) => {
        let [key, value] = _ref;
        if (key.indexOf("on") === 0) {
          if (!map.has(key)) {
            map.set(key, []);
          }
          if (typeof value === "function") {
            var _map$get;
            (_map$get = map.get(key)) == null ? void 0 : _map$get.push(value);
            acc[key] = function() {
              var _map$get2;
              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }
              (_map$get2 = map.get(key)) == null ? void 0 : _map$get2.forEach((fn) => fn(...args));
            };
          }
        } else {
          acc[key] = value;
        }
      });
      return acc;
    }, {})
  };
}
var useInteractions = function(propsList) {
  if (propsList === void 0) {
    propsList = [];
  }
  return {
    getReferenceProps: (userProps) => mergeProps(userProps, propsList, "reference"),
    getFloatingProps: (userProps) => mergeProps(userProps, propsList, "floating"),
    getItemProps: (userProps) => mergeProps(userProps, propsList, "item")
  };
};
function getChildren(nodes, id) {
  var _nodes$filter;
  let allChildren = (_nodes$filter = nodes.filter((node) => {
    var _node$context;
    return node.parentId === id && ((_node$context = node.context) == null ? void 0 : _node$context.open);
  })) != null ? _nodes$filter : [];
  let currentChildren = allChildren;
  while (currentChildren.length) {
    var _nodes$filter2;
    currentChildren = (_nodes$filter2 = nodes.filter((node) => {
      var _currentChildren;
      return (_currentChildren = currentChildren) == null ? void 0 : _currentChildren.some((n2) => {
        var _node$context2;
        return node.parentId === n2.id && ((_node$context2 = node.context) == null ? void 0 : _node$context2.open);
      });
    })) != null ? _nodes$filter2 : [];
    allChildren = allChildren.concat(currentChildren);
  }
  return allChildren;
}
function isPointInPolygon(point, polygon) {
  const [x, y] = point;
  let isInside = false;
  const length = polygon.length;
  for (let i2 = 0, j = length - 1; i2 < length; j = i2++) {
    const [xi, yi] = polygon[i2] || [0, 0];
    const [xj, yj] = polygon[j] || [0, 0];
    const intersect = yi >= y !== yj >= y && x <= (xj - xi) * (y - yi) / (yj - yi) + xi;
    if (intersect) {
      isInside = !isInside;
    }
  }
  return isInside;
}
function safePolygon(_temp) {
  let {
    restMs = 0,
    buffer = 0.5,
    blockPointerEvents = true,
    debug = null
  } = _temp === void 0 ? {} : _temp;
  let timeoutId;
  let polygonIsDestroyed = false;
  const fn = (_ref) => {
    let {
      x,
      y,
      placement,
      refs,
      onClose,
      nodeId,
      tree,
      leave = false
    } = _ref;
    return function onPointerMove(event) {
      var _refs$domReference$cu, _refs$floating$curren;
      clearTimeout(timeoutId);
      function close() {
        clearTimeout(timeoutId);
        onClose();
      }
      if (event.pointerType && event.pointerType !== "mouse") {
        return;
      }
      const {
        clientX,
        clientY
      } = event;
      const target = "composedPath" in event ? event.composedPath()[0] : event.target;
      const targetNode = target;
      if (event.type === "pointermove" && (_refs$domReference$cu = refs.domReference.current) != null && _refs$domReference$cu.contains(targetNode)) {
        return;
      }
      if (tree && getChildren(tree.nodesRef.current, nodeId).some((_ref2) => {
        let {
          context
        } = _ref2;
        return context == null ? void 0 : context.open;
      })) {
        return;
      }
      if ((_refs$floating$curren = refs.floating.current) != null && _refs$floating$curren.contains(targetNode) && !leave) {
        polygonIsDestroyed = true;
        return;
      }
      if (!refs.domReference.current || !refs.floating.current || placement == null || x == null || y == null) {
        return;
      }
      const refRect = refs.domReference.current.getBoundingClientRect();
      const rect = refs.floating.current.getBoundingClientRect();
      const side = placement.split("-")[0];
      const cursorLeaveFromRight = x > rect.right - rect.width / 2;
      const cursorLeaveFromBottom = y > rect.bottom - rect.height / 2;
      if (side === "top" && y >= refRect.bottom - 1 || side === "bottom" && y <= refRect.top + 1 || side === "left" && x >= refRect.right - 1 || side === "right" && x <= refRect.left + 1) {
        return close();
      }
      switch (side) {
        case "top":
          if (clientX >= rect.left && clientX <= rect.right && clientY >= rect.top && clientY <= refRect.top + 1) {
            return;
          }
          break;
        case "bottom":
          if (clientX >= rect.left && clientX <= rect.right && clientY >= refRect.bottom - 1 && clientY <= rect.bottom) {
            return;
          }
          break;
        case "left":
          if (clientX >= rect.left && clientX <= refRect.left + 1 && clientY >= rect.top && clientY <= rect.bottom) {
            return;
          }
          break;
        case "right":
          if (clientX >= refRect.right - 1 && clientX <= rect.right && clientY >= rect.top && clientY <= rect.bottom) {
            return;
          }
          break;
      }
      if (polygonIsDestroyed) {
        return close();
      }
      function getPolygon(_ref3) {
        let [x2, y2] = _ref3;
        const isFloatingWider = rect.width > refRect.width;
        const isFloatingTaller = rect.height > refRect.height;
        switch (side) {
          case "top": {
            const cursorPointOne = [isFloatingWider ? x2 + buffer / 2 : cursorLeaveFromRight ? x2 + buffer * 4 : x2 - buffer * 4, y2 + buffer + 1];
            const cursorPointTwo = [isFloatingWider ? x2 - buffer / 2 : cursorLeaveFromRight ? x2 + buffer * 4 : x2 - buffer * 4, y2 + buffer + 1];
            const commonPoints = [[rect.left, cursorLeaveFromRight ? rect.bottom - buffer : isFloatingWider ? rect.bottom - buffer : rect.top], [rect.right, cursorLeaveFromRight ? isFloatingWider ? rect.bottom - buffer : rect.top : rect.bottom - buffer]];
            return [cursorPointOne, cursorPointTwo, ...commonPoints];
          }
          case "bottom": {
            const cursorPointOne = [isFloatingWider ? x2 + buffer / 2 : cursorLeaveFromRight ? x2 + buffer * 4 : x2 - buffer * 4, y2 - buffer];
            const cursorPointTwo = [isFloatingWider ? x2 - buffer / 2 : cursorLeaveFromRight ? x2 + buffer * 4 : x2 - buffer * 4, y2 - buffer];
            const commonPoints = [[rect.left, cursorLeaveFromRight ? rect.top + buffer : isFloatingWider ? rect.top + buffer : rect.bottom], [rect.right, cursorLeaveFromRight ? isFloatingWider ? rect.top + buffer : rect.bottom : rect.top + buffer]];
            return [cursorPointOne, cursorPointTwo, ...commonPoints];
          }
          case "left": {
            const cursorPointOne = [x2 + buffer + 1, isFloatingTaller ? y2 + buffer / 2 : cursorLeaveFromBottom ? y2 + buffer * 4 : y2 - buffer * 4];
            const cursorPointTwo = [x2 + buffer + 1, isFloatingTaller ? y2 - buffer / 2 : cursorLeaveFromBottom ? y2 + buffer * 4 : y2 - buffer * 4];
            const commonPoints = [[cursorLeaveFromBottom ? rect.right - buffer : isFloatingTaller ? rect.right - buffer : rect.left, rect.top], [cursorLeaveFromBottom ? isFloatingTaller ? rect.right - buffer : rect.left : rect.right - buffer, rect.bottom]];
            return [...commonPoints, cursorPointOne, cursorPointTwo];
          }
          case "right": {
            const cursorPointOne = [x2 - buffer, isFloatingTaller ? y2 + buffer / 2 : cursorLeaveFromBottom ? y2 + buffer * 4 : y2 - buffer * 4];
            const cursorPointTwo = [x2 - buffer, isFloatingTaller ? y2 - buffer / 2 : cursorLeaveFromBottom ? y2 + buffer * 4 : y2 - buffer * 4];
            const commonPoints = [[cursorLeaveFromBottom ? rect.left + buffer : isFloatingTaller ? rect.left + buffer : rect.right, rect.top], [cursorLeaveFromBottom ? isFloatingTaller ? rect.left + buffer : rect.right : rect.left + buffer, rect.bottom]];
            return [cursorPointOne, cursorPointTwo, ...commonPoints];
          }
        }
      }
      const poly = getPolygon([x, y]);
      if (true) {
        debug == null ? void 0 : debug(poly.slice(0, 4).join(", "));
      }
      if (!isPointInPolygon([clientX, clientY], poly)) {
        close();
      } else if (restMs) {
        timeoutId = setTimeout(onClose, restMs);
      }
    };
  };
  fn.__options = {
    blockPointerEvents
  };
  return fn;
}
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function getPlatform() {
  const uaData = navigator.userAgentData;
  if (uaData != null && uaData.platform) {
    return uaData.platform;
  }
  return navigator.platform;
}
var identifier = "data-floating-ui-scroll-lock";
var FloatingOverlay = React4.forwardRef(function FloatingOverlay2(_ref, ref) {
  let {
    lockScroll = false,
    ...rest
  } = _ref;
  index2(() => {
    var _window$visualViewpor, _window$visualViewpor2, _window$visualViewpor3, _window$visualViewpor4;
    if (!lockScroll) {
      return;
    }
    const alreadyLocked = document.body.hasAttribute(identifier);
    if (alreadyLocked) {
      return;
    }
    document.body.setAttribute(identifier, "");
    const scrollbarX = Math.round(document.documentElement.getBoundingClientRect().left) + document.documentElement.scrollLeft;
    const paddingProp = scrollbarX ? "paddingLeft" : "paddingRight";
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    if (!/iP(hone|ad|od)|iOS/.test(getPlatform())) {
      Object.assign(document.body.style, {
        overflow: "hidden",
        [paddingProp]: scrollbarWidth + "px"
      });
      return () => {
        document.body.removeAttribute(identifier);
        Object.assign(document.body.style, {
          overflow: "",
          [paddingProp]: ""
        });
      };
    }
    const offsetLeft = (_window$visualViewpor = (_window$visualViewpor2 = window.visualViewport) == null ? void 0 : _window$visualViewpor2.offsetLeft) != null ? _window$visualViewpor : 0;
    const offsetTop = (_window$visualViewpor3 = (_window$visualViewpor4 = window.visualViewport) == null ? void 0 : _window$visualViewpor4.offsetTop) != null ? _window$visualViewpor3 : 0;
    const scrollX = window.pageXOffset;
    const scrollY = window.pageYOffset;
    Object.assign(document.body.style, {
      position: "fixed",
      overflow: "hidden",
      top: -(scrollY - Math.floor(offsetTop)) + "px",
      left: -(scrollX - Math.floor(offsetLeft)) + "px",
      right: "0",
      [paddingProp]: scrollbarWidth + "px"
    });
    return () => {
      Object.assign(document.body.style, {
        position: "",
        overflow: "",
        top: "",
        left: "",
        right: "",
        [paddingProp]: ""
      });
      document.body.removeAttribute(identifier);
      window.scrollTo(scrollX, scrollY);
    };
  }, [lockScroll]);
  return React4.createElement("div", _extends({
    ref
  }, rest, {
    style: {
      position: "fixed",
      overflow: "auto",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...rest.style
    }
  }));
});
var TYPEABLE_SELECTOR = "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
function isTypeableElement(element) {
  return isHTMLElement2(element) && element.matches(TYPEABLE_SELECTOR);
}
function useLatestRef2(value) {
  const ref = (0, import_react16.useRef)(value);
  index2(() => {
    ref.current = value;
  });
  return ref;
}
var SELECTOR = "select:not([disabled]),a[href],button:not([disabled]),[tabindex],iframe,object,embed,area[href],audio[controls],video[controls]," + TYPEABLE_SELECTOR;
var FocusGuard = React4.forwardRef(function FocusGuard2(props, ref) {
  return React4.createElement("span", _extends({}, props, {
    ref,
    tabIndex: 0,
    style: {
      position: "fixed",
      opacity: "0",
      pointerEvents: "none",
      outline: "0"
    }
  }));
});
function usePrevious(value) {
  const ref = (0, import_react16.useRef)();
  index2(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}
function getDelay(value, prop, pointerType) {
  if (pointerType && pointerType !== "mouse") {
    return 0;
  }
  if (typeof value === "number") {
    return value;
  }
  return value == null ? void 0 : value[prop];
}
var useHover = function(context, _temp) {
  let {
    enabled = true,
    delay = 0,
    handleClose = null,
    mouseOnly = false,
    restMs = 0,
    move = true
  } = _temp === void 0 ? {} : _temp;
  const {
    open,
    onOpenChange,
    dataRef,
    events,
    refs,
    _
  } = context;
  const tree = useFloatingTree();
  const parentId = useFloatingParentNodeId();
  const handleCloseRef = useLatestRef2(handleClose);
  const delayRef = useLatestRef2(delay);
  const previousOpen = usePrevious(open);
  const pointerTypeRef = React4.useRef();
  const timeoutRef = React4.useRef();
  const handlerRef = React4.useRef();
  const restTimeoutRef = React4.useRef();
  const blockMouseMoveRef = React4.useRef(true);
  const performedPointerEventsMutationRef = React4.useRef(false);
  const isHoverOpen = React4.useCallback(() => {
    var _dataRef$current$open;
    const type = (_dataRef$current$open = dataRef.current.openEvent) == null ? void 0 : _dataRef$current$open.type;
    return (type == null ? void 0 : type.includes("mouse")) && type !== "mousedown";
  }, [dataRef]);
  React4.useEffect(() => {
    if (!enabled) {
      return;
    }
    function onDismiss() {
      clearTimeout(timeoutRef.current);
      clearTimeout(restTimeoutRef.current);
      blockMouseMoveRef.current = true;
    }
    events.on("dismiss", onDismiss);
    return () => {
      events.off("dismiss", onDismiss);
    };
  }, [enabled, events, refs]);
  React4.useEffect(() => {
    if (!enabled || !handleCloseRef.current) {
      return;
    }
    function onLeave() {
      if (isHoverOpen()) {
        onOpenChange(false);
      }
    }
    const html = getDocument(refs.floating.current).documentElement;
    html.addEventListener("mouseleave", onLeave);
    return () => {
      html.removeEventListener("mouseleave", onLeave);
    };
  }, [refs, onOpenChange, enabled, handleCloseRef, dataRef, isHoverOpen]);
  const closeWithDelay = React4.useCallback(function(runElseBranch) {
    if (runElseBranch === void 0) {
      runElseBranch = true;
    }
    const closeDelay = getDelay(delayRef.current, "close", pointerTypeRef.current);
    if (closeDelay && !handlerRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => onOpenChange(false), closeDelay);
    } else if (runElseBranch) {
      clearTimeout(timeoutRef.current);
      onOpenChange(false);
    }
  }, [delayRef, onOpenChange]);
  const cleanupPointerMoveHandler = React4.useCallback(() => {
    if (handlerRef.current) {
      getDocument(refs.floating.current).removeEventListener("pointermove", handlerRef.current);
      handlerRef.current = void 0;
    }
  }, [refs]);
  const clearPointerEvents = React4.useCallback(() => {
    getDocument(refs.floating.current).body.style.pointerEvents = "";
    performedPointerEventsMutationRef.current = false;
  }, [refs]);
  React4.useEffect(() => {
    if (!enabled) {
      return;
    }
    function isClickLikeOpenEvent() {
      return dataRef.current.openEvent ? ["click", "mousedown"].includes(dataRef.current.openEvent.type) : false;
    }
    function onMouseEnter(event) {
      clearTimeout(timeoutRef.current);
      blockMouseMoveRef.current = false;
      if (mouseOnly && pointerTypeRef.current !== "mouse" || restMs > 0 && getDelay(delayRef.current, "open") === 0) {
        return;
      }
      dataRef.current.openEvent = event;
      const openDelay = getDelay(delayRef.current, "open", pointerTypeRef.current);
      if (openDelay) {
        timeoutRef.current = setTimeout(() => {
          onOpenChange(true);
        }, openDelay);
      } else {
        onOpenChange(true);
      }
    }
    function onMouseLeave(event) {
      if (isClickLikeOpenEvent()) {
        return;
      }
      const doc = getDocument(refs.floating.current);
      clearTimeout(restTimeoutRef.current);
      if (handleCloseRef.current) {
        clearTimeout(timeoutRef.current);
        handlerRef.current && doc.removeEventListener("pointermove", handlerRef.current);
        handlerRef.current = handleCloseRef.current({
          ...context,
          tree,
          x: event.clientX,
          y: event.clientY,
          onClose() {
            clearPointerEvents();
            cleanupPointerMoveHandler();
            closeWithDelay();
          }
        });
        doc.addEventListener("pointermove", handlerRef.current);
        return;
      }
      closeWithDelay();
    }
    function onScrollMouseLeave(event) {
      if (isClickLikeOpenEvent()) {
        return;
      }
      handleCloseRef.current == null ? void 0 : handleCloseRef.current({
        ...context,
        tree,
        x: event.clientX,
        y: event.clientY,
        leave: true,
        onClose() {
          clearPointerEvents();
          cleanupPointerMoveHandler();
          closeWithDelay();
        }
      })(event);
    }
    const floating = refs.floating.current;
    const reference = refs.domReference.current;
    if (isElement2(reference)) {
      open && reference.addEventListener("mouseleave", onScrollMouseLeave);
      floating == null ? void 0 : floating.addEventListener("mouseleave", onScrollMouseLeave);
      move && reference.addEventListener("mousemove", onMouseEnter, {
        once: true
      });
      reference.addEventListener("mouseenter", onMouseEnter);
      reference.addEventListener("mouseleave", onMouseLeave);
      return () => {
        open && reference.removeEventListener("mouseleave", onScrollMouseLeave);
        floating == null ? void 0 : floating.removeEventListener("mouseleave", onScrollMouseLeave);
        move && reference.removeEventListener("mousemove", onMouseEnter);
        reference.removeEventListener("mouseenter", onMouseEnter);
        reference.removeEventListener("mouseleave", onMouseLeave);
      };
    }
  }, [
    // Ensure the effect is re-run when the reference changes.
    // https://github.com/floating-ui/floating-ui/issues/1833
    _.domReference,
    enabled,
    context,
    mouseOnly,
    restMs,
    move,
    closeWithDelay,
    cleanupPointerMoveHandler,
    clearPointerEvents,
    onOpenChange,
    open,
    tree,
    refs,
    delayRef,
    handleCloseRef,
    dataRef
  ]);
  index2(() => {
    if (!enabled) {
      return;
    }
    if (open && handleCloseRef.current && handleCloseRef.current.__options.blockPointerEvents && isHoverOpen()) {
      getDocument(refs.floating.current).body.style.pointerEvents = "none";
      performedPointerEventsMutationRef.current = true;
      const reference = refs.domReference.current;
      const floating = refs.floating.current;
      if (isElement2(reference) && floating) {
        var _tree$nodesRef$curren, _tree$nodesRef$curren2;
        const parentFloating = tree == null ? void 0 : (_tree$nodesRef$curren = tree.nodesRef.current.find((node) => node.id === parentId)) == null ? void 0 : (_tree$nodesRef$curren2 = _tree$nodesRef$curren.context) == null ? void 0 : _tree$nodesRef$curren2.refs.floating.current;
        if (parentFloating) {
          parentFloating.style.pointerEvents = "";
        }
        reference.style.pointerEvents = "auto";
        floating.style.pointerEvents = "auto";
        return () => {
          reference.style.pointerEvents = "";
          floating.style.pointerEvents = "";
        };
      }
    }
  }, [enabled, open, parentId, refs, tree, handleCloseRef, dataRef, isHoverOpen]);
  index2(() => {
    if (previousOpen && !open) {
      pointerTypeRef.current = void 0;
      cleanupPointerMoveHandler();
      clearPointerEvents();
    }
  });
  React4.useEffect(() => {
    return () => {
      cleanupPointerMoveHandler();
      clearTimeout(timeoutRef.current);
      clearTimeout(restTimeoutRef.current);
      if (performedPointerEventsMutationRef.current) {
        clearPointerEvents();
      }
    };
  }, [enabled, cleanupPointerMoveHandler, clearPointerEvents]);
  if (!enabled) {
    return {};
  }
  function setPointerRef(event) {
    pointerTypeRef.current = event.pointerType;
  }
  return {
    reference: {
      onPointerDown: setPointerRef,
      onPointerEnter: setPointerRef,
      onMouseMove() {
        if (open || restMs === 0) {
          return;
        }
        clearTimeout(restTimeoutRef.current);
        restTimeoutRef.current = setTimeout(() => {
          if (!blockMouseMoveRef.current) {
            onOpenChange(true);
          }
        }, restMs);
      }
    },
    floating: {
      onMouseEnter() {
        clearTimeout(timeoutRef.current);
      },
      onMouseLeave() {
        closeWithDelay(false);
      }
    }
  };
};
var FloatingDelayGroupContext = React4.createContext({
  delay: 1e3,
  initialDelay: 1e3,
  currentId: null,
  setCurrentId: () => {
  },
  setState: () => {
  }
});
var useRole = function(_ref, _temp) {
  let {
    open
  } = _ref;
  let {
    enabled = true,
    role = "dialog"
  } = _temp === void 0 ? {} : _temp;
  const rootId = useId();
  const referenceId = useId();
  const floatingProps = {
    id: rootId,
    role
  };
  if (!enabled) {
    return {};
  }
  if (role === "tooltip") {
    return {
      reference: {
        "aria-describedby": open ? rootId : void 0
      },
      floating: floatingProps
    };
  }
  return {
    reference: {
      "aria-expanded": open ? "true" : "false",
      "aria-haspopup": role === "alertdialog" ? "dialog" : role,
      "aria-controls": open ? rootId : void 0,
      ...role === "listbox" && {
        role: "combobox"
      },
      ...role === "menu" && {
        id: referenceId
      }
    },
    floating: {
      ...floatingProps,
      ...role === "menu" && {
        "aria-labelledby": referenceId
      }
    }
  };
};
function isButtonTarget(event) {
  return isHTMLElement2(event.target) && event.target.tagName === "BUTTON";
}
var useClick = function(_ref, _temp) {
  let {
    open,
    onOpenChange,
    dataRef,
    refs
  } = _ref;
  let {
    enabled = true,
    pointerDown = false,
    toggle = true,
    ignoreMouse = false,
    keyboardHandlers = true
  } = _temp === void 0 ? {} : _temp;
  const pointerTypeRef = React4.useRef();
  function isSpaceIgnored() {
    return isTypeableElement(refs.domReference.current);
  }
  if (!enabled) {
    return {};
  }
  return {
    reference: {
      onPointerDown(event) {
        pointerTypeRef.current = event.pointerType;
      },
      onMouseDown(event) {
        if (event.button !== 0) {
          return;
        }
        if (pointerTypeRef.current === "mouse" && ignoreMouse) {
          return;
        }
        if (!pointerDown) {
          return;
        }
        if (open) {
          if (toggle && (dataRef.current.openEvent ? dataRef.current.openEvent.type === "mousedown" : true)) {
            onOpenChange(false);
          }
        } else {
          onOpenChange(true);
        }
        dataRef.current.openEvent = event.nativeEvent;
      },
      onClick(event) {
        if (pointerDown && pointerTypeRef.current) {
          pointerTypeRef.current = void 0;
          return;
        }
        if (pointerTypeRef.current === "mouse" && ignoreMouse) {
          return;
        }
        if (open) {
          if (toggle && (dataRef.current.openEvent ? dataRef.current.openEvent.type === "click" : true)) {
            onOpenChange(false);
          }
        } else {
          onOpenChange(true);
        }
        dataRef.current.openEvent = event.nativeEvent;
      },
      onKeyDown(event) {
        pointerTypeRef.current = void 0;
        if (!keyboardHandlers) {
          return;
        }
        if (isButtonTarget(event)) {
          return;
        }
        if (event.key === " " && !isSpaceIgnored()) {
          event.preventDefault();
        }
        if (event.key === "Enter") {
          if (open) {
            if (toggle) {
              onOpenChange(false);
            }
          } else {
            onOpenChange(true);
          }
        }
      },
      onKeyUp(event) {
        if (!keyboardHandlers) {
          return;
        }
        if (isButtonTarget(event) || isSpaceIgnored()) {
          return;
        }
        if (event.key === " ") {
          if (open) {
            if (toggle) {
              onOpenChange(false);
            }
          } else {
            onOpenChange(true);
          }
        }
      }
    }
  };
};
var useFocus = function(_ref, _temp) {
  let {
    open,
    onOpenChange,
    dataRef,
    refs,
    events
  } = _ref;
  let {
    enabled = true,
    keyboardOnly = true
  } = _temp === void 0 ? {} : _temp;
  const pointerTypeRef = React4.useRef("");
  const blockFocusRef = React4.useRef(false);
  const timeoutRef = React4.useRef();
  React4.useEffect(() => {
    var _doc$defaultView;
    if (!enabled) {
      return;
    }
    const doc = getDocument(refs.floating.current);
    const win = (_doc$defaultView = doc.defaultView) != null ? _doc$defaultView : window;
    function onBlur() {
      if (!open && isHTMLElement2(refs.domReference.current)) {
        refs.domReference.current.blur();
      }
    }
    win.addEventListener("blur", onBlur);
    return () => {
      win.removeEventListener("blur", onBlur);
    };
  }, [refs, open, enabled]);
  React4.useEffect(() => {
    if (!enabled) {
      return;
    }
    function onDismiss() {
      blockFocusRef.current = true;
    }
    events.on("dismiss", onDismiss);
    return () => {
      events.off("dismiss", onDismiss);
    };
  }, [events, enabled]);
  React4.useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);
  if (!enabled) {
    return {};
  }
  return {
    reference: {
      onPointerDown(_ref2) {
        let {
          pointerType
        } = _ref2;
        pointerTypeRef.current = pointerType;
        blockFocusRef.current = !!(pointerType && keyboardOnly);
      },
      onPointerLeave() {
        blockFocusRef.current = false;
      },
      onFocus(event) {
        var _dataRef$current$open, _refs$domReference$cu, _dataRef$current$open2;
        if (blockFocusRef.current) {
          return;
        }
        if (event.type === "focus" && ((_dataRef$current$open = dataRef.current.openEvent) == null ? void 0 : _dataRef$current$open.type) === "mousedown" && (_refs$domReference$cu = refs.domReference.current) != null && _refs$domReference$cu.contains((_dataRef$current$open2 = dataRef.current.openEvent) == null ? void 0 : _dataRef$current$open2.target)) {
          return;
        }
        dataRef.current.openEvent = event.nativeEvent;
        onOpenChange(true);
      },
      onBlur(event) {
        const target = event.relatedTarget;
        timeoutRef.current = setTimeout(() => {
          var _refs$floating$curren, _refs$domReference$cu2;
          if ((_refs$floating$curren = refs.floating.current) != null && _refs$floating$curren.contains(target) || (_refs$domReference$cu2 = refs.domReference.current) != null && _refs$domReference$cu2.contains(target)) {
            return;
          }
          blockFocusRef.current = false;
          onOpenChange(false);
        });
      }
    }
  };
};

// node_modules/flowbite-react/lib/esm/components/Floating/Floating.js
var import_classnames16 = __toESM(require_classnames());
var import_react17 = __toESM(require_react());

// node_modules/flowbite-react/lib/esm/helpers/floating.js
var getMiddleware = ({ arrowRef, placement }) => {
  const middleware = [];
  middleware.push(offset(8));
  middleware.push(placement === "auto" ? autoPlacement() : flip());
  middleware.push(shift({ padding: 8 }));
  if (arrowRef.current) {
    middleware.push(arrow({ element: arrowRef.current }));
  }
  return middleware;
};
var getPlacement = ({ placement }) => {
  return placement === "auto" ? void 0 : placement;
};
var getArrowPlacement = ({ placement }) => {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[placement.split("-")[0]];
};

// node_modules/flowbite-react/lib/esm/components/Floating/Floating.js
var Floating = ({ children, content, theme: theme2, animation = "duration-300", arrow: arrow2 = true, placement = "top", style = "dark", trigger = "hover", closeRequestKey, className, ...props }) => {
  const arrowRef = (0, import_react17.useRef)(null);
  const [open, setOpen] = (0, import_react17.useState)(false);
  const floatingTooltip = useFloating2({
    middleware: getMiddleware({ arrowRef, placement }),
    onOpenChange: setOpen,
    open,
    placement: getPlacement({ placement })
  });
  const { context, floating, middlewareData: { arrow: { x: arrowX, y: arrowY } = {} }, reference, refs, strategy, update, x, y } = floatingTooltip;
  const { getFloatingProps, getReferenceProps } = useInteractions([
    useClick(context, { enabled: trigger === "click" }),
    useFocus(context),
    useHover(context, {
      enabled: trigger === "hover",
      handleClose: safePolygon()
    }),
    useRole(context, { role: "tooltip" })
  ]);
  (0, import_react17.useEffect)(() => {
    if (refs.reference.current && refs.floating.current && open) {
      return autoUpdate(refs.reference.current, refs.floating.current, update);
    }
  }, [open, refs.floating, refs.reference, update]);
  (0, import_react17.useEffect)(() => {
    if (closeRequestKey !== void 0)
      setOpen(false);
  }, [closeRequestKey]);
  return (0, import_jsx_runtime20.jsxs)(import_jsx_runtime20.Fragment, { children: [(0, import_jsx_runtime20.jsx)("div", { className: theme2.target, ...getReferenceProps({ ref: reference }), "data-testid": "flowbite-tooltip-target", children }), (0, import_jsx_runtime20.jsxs)("div", { "data-testid": "flowbite-tooltip", ...getFloatingProps({
    className: (0, import_classnames16.default)(theme2.base, animation && `${theme2.animation} ${animation}`, !open && theme2.hidden, theme2.style[style], className),
    ref: floating,
    style: {
      position: strategy,
      top: y ?? " ",
      left: x ?? " "
    },
    ...props
  }), children: [(0, import_jsx_runtime20.jsx)("div", { className: theme2.content, children: content }), arrow2 && (0, import_jsx_runtime20.jsx)("div", { className: (0, import_classnames16.default)(theme2.arrow.base, {
    [theme2.arrow.style.dark]: style === "dark",
    [theme2.arrow.style.light]: style === "light",
    [theme2.arrow.style.auto]: style === "auto"
  }), "data-testid": "flowbite-tooltip-arrow", ref: arrowRef, style: {
    top: arrowY ?? " ",
    left: arrowX ?? " ",
    right: " ",
    bottom: " ",
    [getArrowPlacement({ placement: floatingTooltip.placement })]: theme2.arrow.placement
  }, children: " " })] })] });
};

// node_modules/flowbite-react/lib/esm/components/Dropdown/DropdownDivider.js
var import_jsx_runtime21 = __toESM(require_jsx_runtime());
var DropdownDivider = () => {
  const theme2 = useTheme().theme.dropdown.floating.divider;
  return (0, import_jsx_runtime21.jsx)("div", { className: theme2 });
};

// node_modules/flowbite-react/lib/esm/components/Dropdown/DropdownHeader.js
var import_jsx_runtime22 = __toESM(require_jsx_runtime());
var import_classnames17 = __toESM(require_classnames());
var DropdownHeader = ({ children, className, ...props }) => {
  const theme2 = useTheme().theme.dropdown.floating.header;
  return (0, import_jsx_runtime22.jsxs)(import_jsx_runtime22.Fragment, { children: [(0, import_jsx_runtime22.jsx)("div", { className: (0, import_classnames17.default)(theme2, className), ...props, children }), (0, import_jsx_runtime22.jsx)(DropdownDivider, {})] });
};

// node_modules/flowbite-react/lib/esm/components/Dropdown/DropdownItem.js
var import_jsx_runtime23 = __toESM(require_jsx_runtime());
var import_classnames18 = __toESM(require_classnames());
var DropdownItem = ({ children, className, onClick, icon: Icon }) => {
  const theme2 = useTheme().theme.dropdown.floating.item;
  return (0, import_jsx_runtime23.jsxs)("li", { className: (0, import_classnames18.default)(theme2.base, className), onClick, children: [Icon && (0, import_jsx_runtime23.jsx)(Icon, { className: theme2.icon }), children] });
};

// node_modules/flowbite-react/lib/esm/components/Dropdown/Dropdown.js
var icons = {
  top: HiOutlineChevronUp,
  right: HiOutlineChevronRight,
  bottom: HiOutlineChevronDown,
  left: HiOutlineChevronLeft
};
var DropdownComponent = ({ children, className, dismissOnClick = true, ...props }) => {
  const theme2 = useTheme().theme.dropdown;
  const theirProps = props;
  const { placement = props.inline ? "bottom-start" : "bottom", trigger = "click", label, inline: inline2, floatingArrow = false, arrowIcon = true, ...buttonProps } = theirProps;
  const Icon = (0, import_react18.useMemo)(() => {
    const [p2] = placement.split("-");
    return icons[p2] ?? HiOutlineChevronDown;
  }, [placement]);
  const [closeRequestKey, setCloseRequestKey] = (0, import_react18.useState)(void 0);
  const attachCloseListener = (node) => {
    if (!import_react18.default.isValidElement(node))
      return node;
    if (node.type === DropdownItem)
      return import_react18.default.cloneElement(node, {
        onClick: () => {
          var _a, _b;
          (_b = (_a = node.props).onClick) == null ? void 0 : _b.call(_a);
          dismissOnClick && setCloseRequestKey(uuid());
        }
      });
    if (node.props.children && typeof node.props.children === "object") {
      return import_react18.default.cloneElement(node, {
        // @ts-ignore
        children: import_react18.Children.map(node.props.children, attachCloseListener)
      });
    }
    return node;
  };
  const content = (0, import_react18.useMemo)(() => (0, import_jsx_runtime24.jsx)("ul", { className: theme2.content, children: import_react18.Children.map(children, attachCloseListener) }), [children, theme2]);
  const TriggerWrapper = ({ children: children2 }) => inline2 ? (0, import_jsx_runtime24.jsx)("button", { className: theme2.inlineWrapper, children: children2 }) : (0, import_jsx_runtime24.jsx)(Button, { ...buttonProps, children: children2 });
  return (0, import_jsx_runtime24.jsx)(Floating, { content, style: "auto", animation: "duration-100", placement, arrow: floatingArrow, trigger, theme: theme2.floating, closeRequestKey, className, children: (0, import_jsx_runtime24.jsxs)(TriggerWrapper, { children: [label, arrowIcon && (0, import_jsx_runtime24.jsx)(Icon, { className: theme2.arrowIcon })] }) });
};
DropdownComponent.displayName = "Dropdown";
DropdownItem.displayName = "Dropdown.Item";
DropdownHeader.displayName = "Dropdown.Header";
DropdownDivider.displayName = "Dropdown.Divider";
var Dropdown = Object.assign(DropdownComponent, {
  Item: DropdownItem,
  Header: DropdownHeader,
  Divider: DropdownDivider
});

// node_modules/flowbite-react/lib/esm/components/FileInput/FileInput.js
var import_jsx_runtime26 = __toESM(require_jsx_runtime());
var import_classnames20 = __toESM(require_classnames());
var import_react19 = __toESM(require_react());

// node_modules/flowbite-react/lib/esm/components/HelperText/HelperText.js
var import_jsx_runtime25 = __toESM(require_jsx_runtime());
var import_classnames19 = __toESM(require_classnames());
var HelperText = ({ value, children, color = "default", className, ...props }) => {
  const theme2 = useTheme().theme.helperText;
  return (0, import_jsx_runtime25.jsx)("p", { className: (0, import_classnames19.default)(theme2.base, theme2.colors[color], className), ...props, children: value ?? children ?? "" });
};

// node_modules/flowbite-react/lib/esm/components/FileInput/FileInput.js
var FileInput = (0, import_react19.forwardRef)(({ sizing = "md", helperText, color = "gray", className, ...props }, ref) => {
  const theme2 = useTheme().theme.fileInput;
  return (0, import_jsx_runtime26.jsxs)(import_jsx_runtime26.Fragment, { children: [(0, import_jsx_runtime26.jsx)("div", { className: (0, import_classnames20.default)(theme2.base, className), children: (0, import_jsx_runtime26.jsx)("div", { className: theme2.field.base, children: (0, import_jsx_runtime26.jsx)("input", { className: (0, import_classnames20.default)(theme2.field.input.base, theme2.field.input.colors[color], theme2.field.input.sizes[sizing]), ...props, type: "file", ref }) }) }), helperText && (0, import_jsx_runtime26.jsx)(HelperText, { color, children: helperText })] });
});
FileInput.displayName = "FileInput";

// node_modules/flowbite-react/lib/esm/components/Footer/Footer.js
var import_jsx_runtime34 = __toESM(require_jsx_runtime());
var import_classnames28 = __toESM(require_classnames());

// node_modules/flowbite-react/lib/esm/components/Footer/FooterBrand.js
var import_jsx_runtime27 = __toESM(require_jsx_runtime());
var import_classnames21 = __toESM(require_classnames());
var FooterBrand = ({ alt, className, children, href, name, src }) => {
  const theme2 = useTheme().theme.footer.brand;
  return (0, import_jsx_runtime27.jsx)("div", { children: href ? (0, import_jsx_runtime27.jsxs)("a", { "data-testid": "flowbite-footer-brand", href, className: (0, import_classnames21.default)(theme2.base, className), children: [(0, import_jsx_runtime27.jsx)("img", { alt, src, className: theme2.img }), (0, import_jsx_runtime27.jsx)("span", { "data-testid": "flowbite-footer-brand-span", className: theme2.span, children: name }), children] }) : (0, import_jsx_runtime27.jsx)("img", { alt, "data-testid": "flowbite-footer-brand", src, className: theme2.img }) });
};

// node_modules/flowbite-react/lib/esm/components/Footer/FooterCopyright.js
var import_jsx_runtime28 = __toESM(require_jsx_runtime());
var import_classnames22 = __toESM(require_classnames());
var FooterCopyright = ({ href, by, year, className }) => {
  const theme2 = useTheme().theme.footer.copyright;
  return (0, import_jsx_runtime28.jsx)("div", { children: (0, import_jsx_runtime28.jsxs)("span", { className: (0, import_classnames22.default)(theme2.base, className), "data-testid": "flowbite-footer-copyright", children: ["© ", year, href ? (0, import_jsx_runtime28.jsx)("a", { href, className: theme2.href, children: by }) : (0, import_jsx_runtime28.jsx)("span", { "data-testid": "flowbite-footer-copyright-span", className: theme2.span, children: by })] }) });
};

// node_modules/flowbite-react/lib/esm/components/Footer/FooterDivider.js
var import_jsx_runtime29 = __toESM(require_jsx_runtime());
var import_classnames23 = __toESM(require_classnames());
var FooterDivider = ({ className }) => {
  const theme2 = useTheme().theme.footer.divider;
  return (0, import_jsx_runtime29.jsx)("hr", { "data-testid": "footer-divider", className: (0, import_classnames23.default)(theme2.base, className) });
};

// node_modules/flowbite-react/lib/esm/components/Footer/FooterIcon.js
var import_jsx_runtime30 = __toESM(require_jsx_runtime());
var import_classnames24 = __toESM(require_classnames());
var FooterIcon = ({ href, className, ariaLabel, icon: Icon }) => {
  const theme2 = useTheme().theme.footer.icon;
  return (0, import_jsx_runtime30.jsx)("div", { children: href ? (0, import_jsx_runtime30.jsx)("a", { "aria-label": ariaLabel, "data-testid": "flowbite-footer-icon", href, className: (0, import_classnames24.default)(theme2.base, className), children: (0, import_jsx_runtime30.jsx)(Icon, { className: theme2.size }) }) : (0, import_jsx_runtime30.jsx)(Icon, { "data-testid": "flowbite-footer-icon", className: theme2.size }) });
};

// node_modules/flowbite-react/lib/esm/components/Footer/FooterLink.js
var import_jsx_runtime31 = __toESM(require_jsx_runtime());
var import_classnames25 = __toESM(require_classnames());
var FooterLink = ({ children, className, href }) => {
  const theme2 = useTheme().theme.footer.groupLink.link;
  return (0, import_jsx_runtime31.jsx)("li", { className: (0, import_classnames25.default)(theme2.base, className), children: (0, import_jsx_runtime31.jsx)("a", { href, className: theme2.href, children }) });
};

// node_modules/flowbite-react/lib/esm/components/Footer/FooterLinkGroup.js
var import_jsx_runtime32 = __toESM(require_jsx_runtime());
var import_classnames26 = __toESM(require_classnames());
var FooterLinkGroup = ({ children, className, col = false }) => {
  const theme2 = useTheme().theme.footer.groupLink;
  return (0, import_jsx_runtime32.jsx)("ul", { "data-testid": "footer-groupLink", className: (0, import_classnames26.default)(theme2.base, col && theme2.col, className), children });
};

// node_modules/flowbite-react/lib/esm/components/Footer/FooterTitle.js
var import_jsx_runtime33 = __toESM(require_jsx_runtime());
var import_classnames27 = __toESM(require_classnames());
var FooterTitle = ({ title, className }) => {
  const theme2 = useTheme().theme.footer.title;
  return (0, import_jsx_runtime33.jsx)("h2", { "data-testid": "flowbite-footer-title", className: (0, import_classnames27.default)(theme2.base, className), children: title });
};

// node_modules/flowbite-react/lib/esm/components/Footer/Footer.js
var FooterComponent = ({ children, className, bgDark = false, container = false }) => {
  const theme2 = useTheme().theme.footer;
  return (0, import_jsx_runtime34.jsx)("footer", { "data-testid": "flowbite-footer", className: (0, import_classnames28.default)(theme2.base, bgDark && theme2.bgDark, container && theme2.container, className), children });
};
FooterComponent.displayName = "Footer";
FooterCopyright.displayName = "Footer.Copyright";
FooterLink.displayName = "Footer.Link";
FooterBrand.displayName = "Footer.Brand";
FooterLinkGroup.displayName = "Footer.LinkGroup";
FooterIcon.displayName = "Footer.Icon";
FooterTitle.displayName = "Footer.Title";
FooterDivider.displayName = "Footer.Divider";
var Footer = Object.assign(FooterComponent, {
  Copyright: FooterCopyright,
  Link: FooterLink,
  LinkGroup: FooterLinkGroup,
  Brand: FooterBrand,
  Icon: FooterIcon,
  Title: FooterTitle,
  Divider: FooterDivider
});

// node_modules/flowbite-react/lib/esm/components/Label/Label.js
var import_jsx_runtime35 = __toESM(require_jsx_runtime());
var import_classnames29 = __toESM(require_classnames());
var Label = ({ children, color = "default", disabled = false, value, className, ...props }) => {
  const theme2 = useTheme().theme.label;
  return (0, import_jsx_runtime35.jsx)("label", { className: (0, import_classnames29.default)(theme2.base, theme2.colors[color], disabled ?? theme2.disabled, className), ...props, children: value ?? children ?? "" });
};

// node_modules/flowbite-react/lib/esm/components/ListGroup/ListGroup.js
var import_jsx_runtime37 = __toESM(require_jsx_runtime());
var import_classnames31 = __toESM(require_classnames());

// node_modules/flowbite-react/lib/esm/components/ListGroup/ListGroupItem.js
var import_jsx_runtime36 = __toESM(require_jsx_runtime());
var import_classnames30 = __toESM(require_classnames());
var ListGroupItem = ({ active: isActive, children, href, icon: Icon, onClick, className, ...props }) => {
  const isLink = typeof href !== "undefined";
  const Component = isLink ? "a" : "button";
  const theme2 = useTheme().theme.listGroup.item;
  const theirProps = props;
  return (0, import_jsx_runtime36.jsx)("li", { children: (0, import_jsx_runtime36.jsxs)(Component, { className: (0, import_classnames30.default)(theme2.active[isActive ? "on" : "off"], theme2.base, theme2.href[isLink ? "on" : "off"]), href, onClick, type: isLink ? void 0 : "button", ...theirProps, children: [Icon && (0, import_jsx_runtime36.jsx)(Icon, { "aria-hidden": true, className: theme2.icon, "data-testid": "flowbite-list-group-item-icon" }), children] }) });
};

// node_modules/flowbite-react/lib/esm/components/ListGroup/ListGroup.js
var ListGroupComponent = ({ children, className, ...props }) => {
  const theme2 = useTheme().theme.listGroup.base;
  const theirProps = props;
  return (0, import_jsx_runtime37.jsx)("ul", { className: (0, import_classnames31.default)(theme2, className), ...theirProps, children });
};
ListGroupComponent.displayName = "ListGroup";
ListGroupItem.displayName = "ListGroup.Item";
var ListGroup = Object.assign(ListGroupComponent, { Item: ListGroupItem });

// node_modules/flowbite-react/lib/esm/components/Modal/Modal.js
var import_jsx_runtime41 = __toESM(require_jsx_runtime());
var import_classnames35 = __toESM(require_classnames());
var import_react21 = __toESM(require_react());
var import_react_dom3 = __toESM(require_react_dom());

// node_modules/flowbite-react/lib/esm/components/Modal/ModalBody.js
var import_jsx_runtime38 = __toESM(require_jsx_runtime());
var import_classnames32 = __toESM(require_classnames());

// node_modules/flowbite-react/lib/esm/components/Modal/ModalContext.js
var import_react20 = __toESM(require_react());
var ModalContext = (0, import_react20.createContext)(void 0);
function useModalContext() {
  const context = (0, import_react20.useContext)(ModalContext);
  if (!context) {
    throw new Error("useModalContext should be used within the ModalContext provider!");
  }
  return context;
}

// node_modules/flowbite-react/lib/esm/components/Modal/ModalBody.js
var ModalBody = ({ children, className, ...props }) => {
  const { popup } = useModalContext();
  const theme2 = useTheme().theme.modal.body;
  return (0, import_jsx_runtime38.jsx)("div", { className: (0, import_classnames32.default)(theme2.base, {
    [theme2.popup]: popup
  }, className), ...props, children });
};

// node_modules/flowbite-react/lib/esm/components/Modal/ModalFooter.js
var import_jsx_runtime39 = __toESM(require_jsx_runtime());
var import_classnames33 = __toESM(require_classnames());
var ModalFooter = ({ children, className, ...props }) => {
  const { popup } = useModalContext();
  const theme2 = useTheme().theme.modal.footer;
  return (0, import_jsx_runtime39.jsx)("div", { className: (0, import_classnames33.default)(theme2.base, {
    [theme2.popup]: !popup
  }, className), ...props, children });
};

// node_modules/flowbite-react/lib/esm/components/Modal/ModalHeader.js
var import_jsx_runtime40 = __toESM(require_jsx_runtime());
var import_classnames34 = __toESM(require_classnames());
var ModalHeader = ({ children, className, ...props }) => {
  const { popup, onClose } = useModalContext();
  const theme2 = useTheme().theme.modal.header;
  return (0, import_jsx_runtime40.jsxs)("div", { className: (0, import_classnames34.default)(theme2.base, {
    [theme2.popup]: popup
  }, className), ...props, children: [(0, import_jsx_runtime40.jsx)("h3", { className: theme2.title, children }), (0, import_jsx_runtime40.jsx)("button", { "aria-label": "Close", className: theme2.close.base, type: "button", onClick: onClose, children: (0, import_jsx_runtime40.jsx)(HiOutlineX, { "aria-hidden": true, className: theme2.close.icon }) })] });
};

// node_modules/flowbite-react/lib/esm/components/Modal/Modal.js
var ModalComponent = ({ children, show, root, popup, size: size2 = "2xl", position = "center", onClose, className, ...props }) => {
  const [parent, setParent] = (0, import_react21.useState)(root);
  const [container, setContainer] = (0, import_react21.useState)();
  const theme2 = useTheme().theme.modal;
  (0, import_react21.useEffect)(() => {
    if (!parent)
      setParent(document.body);
    if (!container)
      setContainer(document.createElement("div"));
  }, []);
  (0, import_react21.useEffect)(() => {
    if (!container || !parent || !show) {
      return;
    }
    parent.appendChild(container);
    return () => {
      if (container) {
        parent.removeChild(container);
      }
    };
  }, [container, parent, show]);
  return container ? (0, import_react_dom3.createPortal)((0, import_jsx_runtime41.jsx)(ModalContext.Provider, { value: { popup, onClose }, children: (0, import_jsx_runtime41.jsx)("div", { "aria-hidden": !show, className: (0, import_classnames35.default)(theme2.base, theme2.positions[position], show ? theme2.show.on : theme2.show.off, className), "data-testid": "modal", role: "dialog", ...props, children: (0, import_jsx_runtime41.jsx)("div", { className: (0, import_classnames35.default)(theme2.content.base, theme2.sizes[size2]), children: (0, import_jsx_runtime41.jsx)("div", { className: theme2.content.inner, children }) }) }) }), container) : null;
};
ModalComponent.displayName = "Modal";
ModalHeader.displayName = "Modal.Header";
ModalBody.displayName = "Modal.Body";
ModalFooter.displayName = "Modal.Footer";
var Modal = Object.assign(ModalComponent, { Header: ModalHeader, Body: ModalBody, Footer: ModalFooter });

// node_modules/flowbite-react/lib/esm/components/Navbar/Navbar.js
var import_jsx_runtime46 = __toESM(require_jsx_runtime());
var import_classnames40 = __toESM(require_classnames());
var import_react23 = __toESM(require_react());

// node_modules/flowbite-react/lib/esm/components/Navbar/NavbarBrand.js
var import_jsx_runtime42 = __toESM(require_jsx_runtime());
var import_classnames36 = __toESM(require_classnames());
var NavbarBrand = ({ children, href, className, ...props }) => {
  const theme2 = useTheme().theme.navbar;
  return (0, import_jsx_runtime42.jsx)("a", { href, className: (0, import_classnames36.default)(theme2.brand, className), ...props, children });
};

// node_modules/flowbite-react/lib/esm/components/Navbar/NavbarCollapse.js
var import_jsx_runtime43 = __toESM(require_jsx_runtime());
var import_classnames37 = __toESM(require_classnames());

// node_modules/flowbite-react/lib/esm/components/Navbar/NavbarContext.js
var import_react22 = __toESM(require_react());
var NavbarContext = (0, import_react22.createContext)(void 0);
function useNavbarContext() {
  const context = (0, import_react22.useContext)(NavbarContext);
  if (!context) {
    throw new Error("useNavBarContext should be used within the NavbarContext provider!");
  }
  return context;
}

// node_modules/flowbite-react/lib/esm/components/Navbar/NavbarCollapse.js
var NavbarCollapse = ({ children, className, ...props }) => {
  const { isOpen } = useNavbarContext();
  const theme2 = useTheme().theme.navbar.collapse;
  return (0, import_jsx_runtime43.jsx)("div", { className: (0, import_classnames37.default)(theme2.base, theme2.hidden[!isOpen ? "on" : "off"], className), "data-testid": "flowbite-navbar-collapse", ...props, children: (0, import_jsx_runtime43.jsx)("ul", { className: theme2.list, children }) });
};

// node_modules/flowbite-react/lib/esm/components/Navbar/NavbarLink.js
var import_jsx_runtime44 = __toESM(require_jsx_runtime());
var import_classnames38 = __toESM(require_classnames());
var NavbarLink = ({ active, disabled, href, children, className, ...props }) => {
  const theme2 = useTheme().theme.navbar.link;
  return (0, import_jsx_runtime44.jsx)("li", { children: (0, import_jsx_runtime44.jsx)("a", { href, className: (0, import_classnames38.default)(theme2.base, {
    [theme2.active.on]: active,
    [theme2.active.off]: !active && !disabled
  }, theme2.disabled[disabled ? "on" : "off"], className), ...props, children }) });
};

// node_modules/flowbite-react/lib/esm/components/Navbar/NavbarToggle.js
var import_jsx_runtime45 = __toESM(require_jsx_runtime());
var import_classnames39 = __toESM(require_classnames());

// node_modules/react-icons/go/index.esm.js
function GoThreeBars(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 12 16" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z" } }] })(props);
}

// node_modules/flowbite-react/lib/esm/components/Navbar/NavbarToggle.js
var NavbarToggle = ({ barIcon: BarIcon = GoThreeBars, className, ...props }) => {
  const { isOpen, setIsOpen } = useNavbarContext();
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const theme2 = useTheme().theme.navbar.toggle;
  return (0, import_jsx_runtime45.jsxs)("button", { className: (0, import_classnames39.default)(theme2.base, className), "data-testid": "flowbite-navbar-toggle", onClick: handleClick, ...props, children: [(0, import_jsx_runtime45.jsx)("span", { className: "sr-only", children: "Open main menu" }), (0, import_jsx_runtime45.jsx)(BarIcon, { className: theme2.icon })] });
};

// node_modules/flowbite-react/lib/esm/components/Navbar/Navbar.js
var NavbarComponent = ({ children, menuOpen, fluid = false, rounded, border, className, ...props }) => {
  const [isOpen, setIsOpen] = (0, import_react23.useState)(menuOpen);
  const theme2 = useTheme().theme.navbar;
  return (0, import_jsx_runtime46.jsx)(NavbarContext.Provider, { value: { isOpen, setIsOpen }, children: (0, import_jsx_runtime46.jsx)("nav", { className: (0, import_classnames40.default)(theme2.base, theme2.bordered[border ? "on" : "off"], theme2.rounded[rounded ? "on" : "off"], className), ...props, children: (0, import_jsx_runtime46.jsx)("div", { className: (0, import_classnames40.default)(theme2.inner.base, theme2.inner.fluid[fluid ? "on" : "off"]), children }) }) });
};
NavbarComponent.displayName = "Navbar";
NavbarBrand.displayName = "Navbar.Brand";
NavbarCollapse.displayName = "Navbar.Collapse";
NavbarLink.displayName = "Navbar.Link";
NavbarToggle.displayName = "Navbar.Toggle";
var Navbar = Object.assign(NavbarComponent, {
  Brand: NavbarBrand,
  Collapse: NavbarCollapse,
  Link: NavbarLink,
  Toggle: NavbarToggle
});

// node_modules/flowbite-react/lib/esm/components/Pagination/Pagination.js
var import_jsx_runtime48 = __toESM(require_jsx_runtime());
var import_classnames42 = __toESM(require_classnames());

// node_modules/flowbite-react/lib/esm/helpers/range.js
var range_default = (start, end) => {
  if (start >= end) {
    return [];
  }
  return [...Array(end - start + 1).keys()].map((key) => key + start);
};

// node_modules/flowbite-react/lib/esm/components/Pagination/PaginationButton.js
var import_jsx_runtime47 = __toESM(require_jsx_runtime());
var import_classnames41 = __toESM(require_classnames());
var PaginationButton = ({ active, onClick, children, className }) => {
  const theme2 = useTheme().theme.pagination;
  return (0, import_jsx_runtime47.jsx)("button", { className: (0, import_classnames41.default)({
    [theme2.pages.selector.active]: active
  }, className), onClick, children });
};
var PaginationButton_default = PaginationButton;

// node_modules/flowbite-react/lib/esm/components/Pagination/Pagination.js
var Pagination = ({ currentPage, layout = "pagination", onPageChange, showIcons: showIcon = false, totalPages, previousLabel = "Previous", nextLabel = "Next", className, renderPaginationButton = (props2) => (0, import_jsx_runtime48.jsx)(PaginationButton_default, { ...props2 }), ...props }) => {
  const firstPage = Math.max(1, currentPage - 3);
  const lastPage = Math.min(currentPage + 3, totalPages);
  const theme2 = useTheme().theme.pagination;
  const goToNextPage = () => {
    onPageChange(Math.min(currentPage + 1, totalPages));
  };
  const goToPreviousPage = () => {
    onPageChange(Math.max(currentPage - 1, 1));
  };
  return (0, import_jsx_runtime48.jsxs)("nav", { className: (0, import_classnames42.default)(theme2.base, className), ...props, children: [layout === "table" && (0, import_jsx_runtime48.jsxs)("div", { className: theme2.layout.table.base, children: ["Showing ", (0, import_jsx_runtime48.jsx)("span", { className: theme2.layout.table.span, children: firstPage }), " to ", (0, import_jsx_runtime48.jsx)("span", { className: theme2.layout.table.span, children: lastPage }), " of ", (0, import_jsx_runtime48.jsx)("span", { className: theme2.layout.table.span, children: totalPages }), " Entries"] }), (0, import_jsx_runtime48.jsxs)("ul", { className: theme2.pages.base, children: [(0, import_jsx_runtime48.jsx)("li", { children: renderPaginationButton({
    className: (0, import_classnames42.default)((0, import_classnames42.default)(theme2.pages.previous.base, showIcon && theme2.pages.showIcon)),
    onClick: goToPreviousPage,
    children: (0, import_jsx_runtime48.jsxs)(import_jsx_runtime48.Fragment, { children: [showIcon && (0, import_jsx_runtime48.jsx)(HiChevronLeft, { "aria-hidden": true, className: theme2.pages.previous.icon }), previousLabel] })
  }) }), layout === "pagination" && range_default(firstPage, lastPage).map((page) => (0, import_jsx_runtime48.jsx)("li", { "aria-current": page === currentPage ? "page" : void 0, children: renderPaginationButton({
    className: (0, import_classnames42.default)(theme2.pages.selector.base, {
      [theme2.pages.selector.active]: currentPage === page
    }),
    active: page === currentPage,
    onClick: () => onPageChange(page),
    children: page
  }) }, page)), (0, import_jsx_runtime48.jsx)("li", { children: renderPaginationButton({
    className: (0, import_classnames42.default)(theme2.pages.next.base, showIcon && theme2.pages.showIcon),
    onClick: goToNextPage,
    children: (0, import_jsx_runtime48.jsxs)(import_jsx_runtime48.Fragment, { children: [nextLabel, showIcon && (0, import_jsx_runtime48.jsx)(HiChevronRight, { "aria-hidden": true, className: theme2.pages.next.icon })] })
  }) })] })] });
};
Pagination.Button = PaginationButton_default;

// node_modules/flowbite-react/lib/esm/components/Progress/Progress.js
var import_jsx_runtime49 = __toESM(require_jsx_runtime());
var import_classnames43 = __toESM(require_classnames());
var import_react24 = __toESM(require_react());
var Progress = ({ color = "blue", label = "progressbar", labelPosition = "none", labelProgress = false, progress, size: size2 = "md", className, ...props }) => {
  const id = (0, import_react24.useId)();
  const theme2 = useTheme().theme.progress;
  return (0, import_jsx_runtime49.jsx)(import_jsx_runtime49.Fragment, { children: (0, import_jsx_runtime49.jsxs)("div", { id, "aria-label": label, "aria-valuenow": progress, role: "progressbar", ...props, children: [label && labelPosition === "outside" && (0, import_jsx_runtime49.jsxs)("div", { className: theme2.label, children: [(0, import_jsx_runtime49.jsx)("span", { children: label }), labelProgress && (0, import_jsx_runtime49.jsxs)("span", { children: [progress, "%"] })] }), (0, import_jsx_runtime49.jsx)("div", { className: (0, import_classnames43.default)(theme2.base, theme2.size[size2], className), children: (0, import_jsx_runtime49.jsx)("div", { className: (0, import_classnames43.default)(theme2.bar, theme2.color[color], theme2.size[size2]), style: { width: `${progress}%` }, children: label && labelPosition === "inside" && label }) })] }) });
};

// node_modules/flowbite-react/lib/esm/components/Radio/Radio.js
var import_jsx_runtime50 = __toESM(require_jsx_runtime());
var import_classnames44 = __toESM(require_classnames());
var import_react25 = __toESM(require_react());
var Radio = (0, import_react25.forwardRef)(({ className, ...props }, ref) => {
  const theme2 = useTheme().theme.radio;
  return (0, import_jsx_runtime50.jsx)("input", { ref, className: (0, import_classnames44.default)(theme2.base, className), type: "radio", ...props });
});
Radio.displayName = "Radio";

// node_modules/flowbite-react/lib/esm/components/Rating/Rating.js
var import_jsx_runtime53 = __toESM(require_jsx_runtime());
var import_classnames47 = __toESM(require_classnames());

// node_modules/flowbite-react/lib/esm/components/Rating/RatingAdvanced.js
var import_jsx_runtime51 = __toESM(require_jsx_runtime());
var import_classnames45 = __toESM(require_classnames());
var RatingAdvanced = ({ percentFilled = 0, children, className, ...props }) => {
  const theme2 = useTheme().theme.rating.advanced;
  return (0, import_jsx_runtime51.jsxs)("div", { className: (0, import_classnames45.default)(theme2.base, className), ...props, children: [(0, import_jsx_runtime51.jsx)("span", { className: theme2.label, children }), (0, import_jsx_runtime51.jsx)("div", { className: theme2.progress.base, children: (0, import_jsx_runtime51.jsx)("div", { className: theme2.progress.fill, "data-testid": "flowbite-rating-fill", style: { width: `${percentFilled}%` } }) }), (0, import_jsx_runtime51.jsx)("span", { className: theme2.progress.label, children: `${percentFilled}%` })] });
};

// node_modules/flowbite-react/lib/esm/components/Rating/RatingContext.js
var import_react26 = __toESM(require_react());
var RatingContext = (0, import_react26.createContext)(void 0);
function useRatingContext() {
  const context = (0, import_react26.useContext)(RatingContext);
  if (!context) {
    throw new Error("useRatingContext should be used within the RatingContext provider!");
  }
  return context;
}

// node_modules/flowbite-react/lib/esm/components/Rating/RatingStar.js
var import_jsx_runtime52 = __toESM(require_jsx_runtime());
var import_classnames46 = __toESM(require_classnames());
var RatingStar = ({ filled = true, starIcon: Icon = HiStar, className }) => {
  const { size: size2 = "sm" } = useRatingContext();
  const theme2 = useTheme().theme.rating.star;
  return (0, import_jsx_runtime52.jsx)(Icon, { className: (0, import_classnames46.default)(theme2.sizes[size2], theme2[filled ? "filled" : "empty"], className), "data-testid": "flowbite-rating-star" });
};

// node_modules/flowbite-react/lib/esm/components/Rating/Rating.js
var RatingComponent = ({ children, size: size2 = "sm", className, ...props }) => {
  const theme2 = useTheme().theme.rating;
  return (0, import_jsx_runtime53.jsx)(RatingContext.Provider, { value: { size: size2 }, children: (0, import_jsx_runtime53.jsx)("div", { className: (0, import_classnames47.default)(theme2.base, className), ...props, children }) });
};
RatingComponent.displayName = "Rating";
RatingStar.displayName = "Rating.Star";
RatingAdvanced.displayName = "Rating.Advanced";
var Rating = Object.assign(RatingComponent, {
  Star: RatingStar,
  Advanced: RatingAdvanced
});

// node_modules/flowbite-react/lib/esm/components/Select/Select.js
var import_jsx_runtime54 = __toESM(require_jsx_runtime());
var import_classnames48 = __toESM(require_classnames());
var import_react27 = __toESM(require_react());
var Select = (0, import_react27.forwardRef)(({ children, sizing = "md", shadow, helperText, addon, icon: Icon, color = "gray", className, ...props }, ref) => {
  const theme2 = useTheme().theme.select;
  return (0, import_jsx_runtime54.jsxs)("div", { className: (0, import_classnames48.default)(theme2.base, className), children: [addon && (0, import_jsx_runtime54.jsx)("span", { className: theme2.addon, children: addon }), (0, import_jsx_runtime54.jsxs)("div", { className: theme2.field.base, children: [Icon && (0, import_jsx_runtime54.jsx)("div", { className: theme2.field.icon.base, children: (0, import_jsx_runtime54.jsx)(Icon, { className: theme2.field.icon.svg }) }), (0, import_jsx_runtime54.jsx)("select", { className: (0, import_classnames48.default)(theme2.field.select.base, theme2.field.select.colors[color], theme2.field.select.withIcon[Icon ? "on" : "off"], theme2.field.select.withAddon[addon ? "on" : "off"], theme2.field.select.withShadow[shadow ? "on" : "off"], theme2.field.select.sizes[sizing]), ...props, ref, children }), helperText && (0, import_jsx_runtime54.jsx)(HelperText, { color, children: helperText })] })] });
});
Select.displayName = "Select";

// node_modules/flowbite-react/lib/esm/components/Sidebar/Sidebar.js
var import_jsx_runtime62 = __toESM(require_jsx_runtime());
var import_classnames55 = __toESM(require_classnames());

// node_modules/flowbite-react/lib/esm/components/Sidebar/SidebarCollapse.js
var import_jsx_runtime56 = __toESM(require_jsx_runtime());
var import_classnames49 = __toESM(require_classnames());
var import_react30 = __toESM(require_react());

// node_modules/flowbite-react/lib/esm/components/Tooltip/Tooltip.js
var import_jsx_runtime55 = __toESM(require_jsx_runtime());
var Tooltip = ({ animation = "duration-300", arrow: arrow2 = true, children, content, placement = "top", style = "dark", trigger = "hover", className, ...props }) => {
  const theme2 = useTheme().theme.tooltip;
  return (0, import_jsx_runtime55.jsx)(Floating, { content, style, animation, placement, arrow: arrow2, trigger, theme: theme2, className, ...props, children });
};

// node_modules/flowbite-react/lib/esm/components/Sidebar/SidebarContext.js
var import_react28 = __toESM(require_react());
var SidebarContext = (0, import_react28.createContext)(void 0);
function useSidebarContext() {
  const context = (0, import_react28.useContext)(SidebarContext);
  if (!context) {
    throw new Error("useSidebarContext should be used within the SidebarContext provider!");
  }
  return context;
}

// node_modules/flowbite-react/lib/esm/components/Sidebar/SidebarItemContext.js
var import_react29 = __toESM(require_react());
var SidebarItemContext = (0, import_react29.createContext)(void 0);
function useSidebarItemContext() {
  const context = (0, import_react29.useContext)(SidebarItemContext);
  if (!context) {
    throw new Error("useSidebarItemContext should be used within the SidebarItemContext provider!");
  }
  return context;
}

// node_modules/flowbite-react/lib/esm/components/Sidebar/SidebarCollapse.js
var SidebarCollapse = ({ children, icon: Icon, label, className, open = false, ...props }) => {
  const id = (0, import_react30.useId)();
  const { isCollapsed } = useSidebarContext();
  const [isOpen, setOpen] = (0, import_react30.useState)(open);
  const theme2 = useTheme().theme.sidebar.collapse;
  (0, import_react30.useEffect)(() => setOpen(open), [open]);
  const Wrapper = ({ children: children2 }) => (0, import_jsx_runtime56.jsx)("li", { children: isCollapsed && !isOpen ? (0, import_jsx_runtime56.jsx)(Tooltip, { content: label, placement: "right", children: children2 }) : children2 });
  return (0, import_jsx_runtime56.jsxs)(Wrapper, { children: [(0, import_jsx_runtime56.jsxs)("button", { className: (0, import_classnames49.default)(theme2.button, className), id: `flowbite-sidebar-collapse-${id}`, onClick: () => setOpen(!isOpen), title: label, type: "button", ...props, children: [Icon && (0, import_jsx_runtime56.jsx)(Icon, { "aria-hidden": true, className: (0, import_classnames49.default)(theme2.icon.base, theme2.icon.open[isOpen ? "on" : "off"]), "data-testid": "flowbite-sidebar-collapse-icon" }), isCollapsed ? (0, import_jsx_runtime56.jsx)("span", { className: "sr-only", children: label }) : (0, import_jsx_runtime56.jsxs)(import_jsx_runtime56.Fragment, { children: [(0, import_jsx_runtime56.jsx)("span", { className: theme2.label.base, "data-testid": "flowbite-sidebar-collapse-label", children: label }), (0, import_jsx_runtime56.jsx)(HiChevronDown, { "aria-hidden": true, className: theme2.label.icon })] })] }), (0, import_jsx_runtime56.jsx)("ul", { "aria-labelledby": `flowbite-sidebar-collapse-${id}`, className: theme2.list, hidden: !isOpen, children: (0, import_jsx_runtime56.jsx)(SidebarItemContext.Provider, { value: { isInsideCollapse: true }, children }) })] });
};
SidebarCollapse.displayName = "Sidebar.Collapse";
var SidebarCollapse_default = SidebarCollapse;

// node_modules/flowbite-react/lib/esm/components/Sidebar/SidebarCTA.js
var import_jsx_runtime57 = __toESM(require_jsx_runtime());
var import_classnames50 = __toESM(require_classnames());
var SidebarCTA = ({ children, color = "info", className, ...props }) => {
  const { isCollapsed } = useSidebarContext();
  const theme2 = useTheme().theme.sidebar.cta;
  return (0, import_jsx_runtime57.jsx)("div", { className: (0, import_classnames50.default)(theme2.base, theme2.color[color], className), "data-testid": "sidebar-cta", hidden: isCollapsed, ...props, children });
};
SidebarCTA.displayName = "Sidebar.CTA";
var SidebarCTA_default = SidebarCTA;

// node_modules/flowbite-react/lib/esm/components/Sidebar/SidebarItem.js
var import_jsx_runtime58 = __toESM(require_jsx_runtime());
var import_classnames51 = __toESM(require_classnames());
var import_react31 = __toESM(require_react());
var SidebarItem = (0, import_react31.forwardRef)(({ as: Component = "a", children, icon: Icon, active: isActive, label, labelColor = "info", className, ...props }, ref) => {
  const id = (0, import_react31.useId)();
  const { isCollapsed } = useSidebarContext();
  const { isInsideCollapse } = useSidebarItemContext();
  const theme2 = useTheme().theme.sidebar.item;
  const ListItem = ({ children: wrapperChildren }) => (0, import_jsx_runtime58.jsx)("li", { children: isCollapsed ? (0, import_jsx_runtime58.jsx)(Tooltip, { content: (0, import_jsx_runtime58.jsx)(TooltipContent, { children }), placement: "right", children: wrapperChildren }) : wrapperChildren });
  const TooltipContent = ({ children: children2 }) => (0, import_jsx_runtime58.jsx)(Children6, { children: children2 });
  const Children6 = ({ children: children2 }) => (0, import_jsx_runtime58.jsx)("span", { className: (0, import_classnames51.default)(theme2.content.base), "data-testid": "flowbite-sidebar-item-content", id: `flowbite-sidebar-item-${id}`, children: children2 });
  return (0, import_jsx_runtime58.jsx)(ListItem, { children: (0, import_jsx_runtime58.jsxs)(Component, { "aria-labelledby": `flowbite-sidebar-item-${id}`, className: (0, import_classnames51.default)(theme2.base, isActive && theme2.active, !isCollapsed && isInsideCollapse && theme2.collapsed.insideCollapse, className), ref, ...props, children: [Icon && (0, import_jsx_runtime58.jsx)(Icon, { "aria-hidden": true, className: (0, import_classnames51.default)(theme2.icon.base, isActive && theme2.icon.active), "data-testid": "flowbite-sidebar-item-icon" }), isCollapsed && !Icon && (0, import_jsx_runtime58.jsx)("span", { className: theme2.collapsed.noIcon, children: children.charAt(0).toLocaleUpperCase() ?? "?" }), !isCollapsed && (0, import_jsx_runtime58.jsx)(Children6, { children }), !isCollapsed && label && (0, import_jsx_runtime58.jsx)(Badge, { color: labelColor, "data-testid": "flowbite-sidebar-label", hidden: isCollapsed, className: theme2.label, children: label })] }) });
});
SidebarItem.displayName = "Sidebar.Item";
var SidebarItem_default = SidebarItem;

// node_modules/flowbite-react/lib/esm/components/Sidebar/SidebarItemGroup.js
var import_jsx_runtime59 = __toESM(require_jsx_runtime());
var import_classnames52 = __toESM(require_classnames());
var SidebarItemGroup = ({ children, className, ...props }) => {
  const theme2 = useTheme().theme.sidebar.itemGroup;
  return (0, import_jsx_runtime59.jsx)("ul", { className: (0, import_classnames52.default)(theme2, className), "data-testid": "flowbite-sidebar-item-group", ...props, children: (0, import_jsx_runtime59.jsx)(SidebarItemContext.Provider, { value: { isInsideCollapse: false }, children }) });
};
SidebarItemGroup.displayName = "Sidebar.ItemGroup";
var SidebarItemGroup_default = SidebarItemGroup;

// node_modules/flowbite-react/lib/esm/components/Sidebar/SidebarItems.js
var import_jsx_runtime60 = __toESM(require_jsx_runtime());
var import_classnames53 = __toESM(require_classnames());
var SidebarItems = ({ children, className, ...props }) => {
  const theme2 = useTheme().theme.sidebar.items;
  return (0, import_jsx_runtime60.jsx)("div", { className: (0, import_classnames53.default)(theme2, className), "data-testid": "flowbite-sidebar-items", ...props, children });
};
SidebarItems.displayName = "Sidebar.Items";
var SidebarItems_default = SidebarItems;

// node_modules/flowbite-react/lib/esm/components/Sidebar/SidebarLogo.js
var import_jsx_runtime61 = __toESM(require_jsx_runtime());
var import_classnames54 = __toESM(require_classnames());
var import_react32 = __toESM(require_react());
var SidebarLogo = ({ children, href, img, imgAlt = "", className, ...props }) => {
  const id = (0, import_react32.useId)();
  const { isCollapsed } = useSidebarContext();
  const theme2 = useTheme().theme.sidebar.logo;
  return (0, import_jsx_runtime61.jsxs)("a", { "aria-labelledby": `flowbite-sidebar-logo-${id}`, className: (0, import_classnames54.default)(theme2.base, className), href, ...props, children: [(0, import_jsx_runtime61.jsx)("img", { alt: imgAlt, className: theme2.img, src: img }), (0, import_jsx_runtime61.jsx)("span", { className: theme2.collapsed[isCollapsed ? "on" : "off"], id: `flowbite-sidebar-logo-${id}`, children })] });
};
SidebarLogo.displayName = "Sidebar.Logo";
var SidebarLogo_default = SidebarLogo;

// node_modules/flowbite-react/lib/esm/components/Sidebar/Sidebar.js
var SidebarComponent = ({ children, collapseBehavior = "collapse", collapsed: isCollapsed = false, ...props }) => {
  const theme2 = useTheme().theme.sidebar;
  return (0, import_jsx_runtime62.jsx)(SidebarContext.Provider, { value: { isCollapsed }, children: (0, import_jsx_runtime62.jsx)("aside", { "aria-label": "Sidebar", className: (0, import_classnames55.default)(theme2.base, theme2.collapsed[isCollapsed ? "on" : "off"]), hidden: isCollapsed && collapseBehavior === "hide", ...props, children: (0, import_jsx_runtime62.jsx)("div", { className: theme2.inner, children }) }) });
};
SidebarComponent.displayName = "Sidebar";
var Sidebar = Object.assign(SidebarComponent, {
  Collapse: SidebarCollapse_default,
  CTA: SidebarCTA_default,
  Item: SidebarItem_default,
  Items: SidebarItems_default,
  ItemGroup: SidebarItemGroup_default,
  Logo: SidebarLogo_default
});

// node_modules/flowbite-react/lib/esm/components/Spinner/Spinner.js
var import_jsx_runtime63 = __toESM(require_jsx_runtime());
var import_classnames56 = __toESM(require_classnames());
var Spinner = ({ color = "info", light, size: size2 = "md", className, ...props }) => {
  const theme2 = useTheme().theme.spinner;
  return (0, import_jsx_runtime63.jsx)("span", { role: "status", ...props, children: (0, import_jsx_runtime63.jsxs)("svg", { className: (0, import_classnames56.default)(theme2.base, theme2.color[color], theme2.light[light ? "on" : "off"].base, theme2.light[light ? "on" : "off"].color[color], theme2.size[size2], className), fill: "none", viewBox: "0 0 100 101", children: [(0, import_jsx_runtime63.jsx)("path", { d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z", fill: "currentColor" }), (0, import_jsx_runtime63.jsx)("path", { d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z", fill: "currentFill" })] }) });
};

// node_modules/flowbite-react/lib/esm/components/Tab/Tabs.js
var import_jsx_runtime65 = __toESM(require_jsx_runtime());
var import_classnames57 = __toESM(require_classnames());
var import_react33 = __toESM(require_react());

// node_modules/flowbite-react/lib/esm/components/Tab/TabItem.js
var import_jsx_runtime64 = __toESM(require_jsx_runtime());
var TabItem = ({ children, className }) => (0, import_jsx_runtime64.jsx)("div", { className, children });

// node_modules/flowbite-react/lib/esm/components/Tab/Tabs.js
var TabsComponent = ({ children, style = "default", className, ...rest }) => {
  const theme2 = useTheme().theme.tab;
  const id = (0, import_react33.useId)();
  const tabs = (0, import_react33.useMemo)(() => import_react33.Children.map(children, ({ props }) => props), [children]);
  const tabRefs = (0, import_react33.useRef)([]);
  const [activeTab, setActiveTab] = (0, import_react33.useState)(Math.max(0, tabs.findIndex((tab) => tab.active)));
  const [focusedTab, setFocusedTab] = (0, import_react33.useState)(Math.max(0, tabs.findIndex((tab) => tab.active)));
  const handleClick = ({ target }) => {
    setActiveTab(target);
    setFocusedTab(target);
  };
  const handleKeyboard = ({ event, target }) => {
    if (event.key === "ArrowLeft") {
      setFocusedTab(Math.max(0, focusedTab - 1));
    }
    if (event.key === "ArrowRight") {
      setFocusedTab(Math.min(tabs.length - 1, focusedTab + 1));
    }
    if (event.key === "Enter") {
      setActiveTab(target);
      setFocusedTab(target);
    }
  };
  const tabItemStyle = theme2.tablist.tabitem.styles[style];
  (0, import_react33.useEffect)(() => {
    var _a;
    (_a = tabRefs.current[focusedTab]) == null ? void 0 : _a.focus();
  }, [focusedTab]);
  return (0, import_jsx_runtime65.jsxs)("div", { className: (0, import_classnames57.default)(theme2.base, className), children: [(0, import_jsx_runtime65.jsx)("div", { "aria-label": "Tabs", role: "tablist", className: (0, import_classnames57.default)(theme2.tablist.base, theme2.tablist.styles[style], className), ...rest, children: tabs.map((tab, index3) => (0, import_jsx_runtime65.jsxs)("button", { type: "button", "aria-controls": `${id}-tabpanel-${index3}`, "aria-selected": index3 === activeTab, className: (0, import_classnames57.default)(theme2.tablist.tabitem.base, { ...tabItemStyle }, {
    [tabItemStyle.active.on]: index3 === activeTab,
    [tabItemStyle.active.off]: index3 !== activeTab && !tab.disabled
  }), disabled: tab.disabled, id: `${id}-tab-${index3}`, onClick: () => handleClick({ target: index3 }), onKeyDown: (event) => handleKeyboard({ event, target: index3 }), ref: (element) => tabRefs.current[index3] = element, role: "tab", tabIndex: index3 === focusedTab ? 0 : -1, children: [tab.icon && (0, import_jsx_runtime65.jsx)(tab.icon, { className: theme2.tablist.tabitem.icon }), tab.title] }, index3)) }), (0, import_jsx_runtime65.jsx)("div", { children: tabs.map((tab, index3) => (0, import_jsx_runtime65.jsx)("div", { "aria-labelledby": `${id}-tab-${index3}`, className: theme2.tabpanel, hidden: index3 !== activeTab, id: `${id}-tabpanel-${index3}`, role: "tabpanel", tabIndex: 0, children: tab.children }, index3)) })] });
};
TabsComponent.displayName = "Tabs.Group";
TabItem.displayName = "Tabs.Item";
var Tabs = { Group: TabsComponent, Item: TabItem };

// node_modules/flowbite-react/lib/esm/components/Table/Table.js
var import_jsx_runtime71 = __toESM(require_jsx_runtime());
var import_classnames62 = __toESM(require_classnames());

// node_modules/flowbite-react/lib/esm/components/Table/TableBody.js
var import_jsx_runtime66 = __toESM(require_jsx_runtime());
var TableBody = ({ children, ...props }) => {
  return (0, import_jsx_runtime66.jsx)("tbody", { ...props, children });
};

// node_modules/flowbite-react/lib/esm/components/Table/TableCell.js
var import_jsx_runtime67 = __toESM(require_jsx_runtime());
var import_classnames58 = __toESM(require_classnames());
var TableCell = ({ children, className, ...props }) => {
  const theme2 = useTheme().theme.table.cell;
  return (0, import_jsx_runtime67.jsx)("td", { className: (0, import_classnames58.default)(theme2.base, className), ...props, children });
};

// node_modules/flowbite-react/lib/esm/components/Table/TableContext.js
var import_react34 = __toESM(require_react());
var TableContext = (0, import_react34.createContext)(void 0);
function useTableContext() {
  const context = (0, import_react34.useContext)(TableContext);
  if (!context) {
    throw new Error("useTableContext should be used within the TableContext provider!");
  }
  return context;
}

// node_modules/flowbite-react/lib/esm/components/Table/TableHead.js
var import_jsx_runtime68 = __toESM(require_jsx_runtime());
var import_classnames59 = __toESM(require_classnames());
var TableHead = ({ children, className, ...props }) => {
  const theme2 = useTheme().theme.table;
  return (0, import_jsx_runtime68.jsx)("thead", { className: (0, import_classnames59.default)(theme2.head.base, className), ...props, children: (0, import_jsx_runtime68.jsx)("tr", { children }) });
};

// node_modules/flowbite-react/lib/esm/components/Table/TableHeadCell.js
var import_jsx_runtime69 = __toESM(require_jsx_runtime());
var import_classnames60 = __toESM(require_classnames());
var TableHeadCell = ({ children, className, ...props }) => {
  const theme2 = useTheme().theme.table.head.cell;
  return (0, import_jsx_runtime69.jsx)("th", { className: (0, import_classnames60.default)(theme2.base, className), ...props, children });
};

// node_modules/flowbite-react/lib/esm/components/Table/TableRow.js
var import_jsx_runtime70 = __toESM(require_jsx_runtime());
var import_classnames61 = __toESM(require_classnames());
var TableRow = ({ children, className, ...props }) => {
  const theme2 = useTheme().theme.table.row;
  const { striped, hoverable } = useTableContext();
  return (0, import_jsx_runtime70.jsx)("tr", { "data-testid": "table-row-element", className: (0, import_classnames61.default)(striped && theme2.striped, hoverable && theme2.hovered, className), ...props, children });
};

// node_modules/flowbite-react/lib/esm/components/Table/Table.js
var TableComponent = ({ children, striped, hoverable, className, ...props }) => {
  const theme2 = useTheme().theme.table;
  return (0, import_jsx_runtime71.jsx)("div", { "data-testid": "table-element", className: (0, import_classnames62.default)(theme2.wrapper), children: (0, import_jsx_runtime71.jsx)(TableContext.Provider, { value: { striped, hoverable }, children: (0, import_jsx_runtime71.jsx)("table", { className: (0, import_classnames62.default)(theme2.base, className), ...props, children }) }) });
};
TableComponent.displayName = "Table";
TableHead.displayName = "Table.Head";
TableBody.displayName = "Table.Body";
TableRow.displayName = "Table.Row";
TableCell.displayName = "Table.Cell";
TableHeadCell.displayName = "Table.HeadCell";
var Table = Object.assign(TableComponent, {
  Head: TableHead,
  Body: TableBody,
  Row: TableRow,
  Cell: TableCell,
  HeadCell: TableHeadCell
});

// node_modules/flowbite-react/lib/esm/components/Textarea/Textarea.js
var import_jsx_runtime72 = __toESM(require_jsx_runtime());
var import_classnames63 = __toESM(require_classnames());
var import_react35 = __toESM(require_react());
var Textarea = (0, import_react35.forwardRef)(({ shadow, helperText, color = "gray", className, ...props }, ref) => {
  const theme2 = useTheme().theme.textarea;
  return (0, import_jsx_runtime72.jsxs)(import_jsx_runtime72.Fragment, { children: [(0, import_jsx_runtime72.jsx)("textarea", { ref, className: (0, import_classnames63.default)(theme2.base, theme2.colors[color], theme2.withShadow[shadow ? "on" : "off"], className), ...props }), helperText && (0, import_jsx_runtime72.jsx)(HelperText, { color, children: helperText })] });
});
Textarea.displayName = "Textarea";

// node_modules/flowbite-react/lib/esm/components/TextInput/TextInput.js
var import_jsx_runtime73 = __toESM(require_jsx_runtime());
var import_classnames64 = __toESM(require_classnames());
var import_react36 = __toESM(require_react());
var TextInput = (0, import_react36.forwardRef)(({ sizing = "md", shadow, helperText, addon, icon: Icon, color = "gray", className, ...props }, ref) => {
  const theme2 = useTheme().theme.textInput;
  return (0, import_jsx_runtime73.jsxs)(import_jsx_runtime73.Fragment, { children: [(0, import_jsx_runtime73.jsxs)("div", { className: (0, import_classnames64.default)(theme2.base, className), children: [addon && (0, import_jsx_runtime73.jsx)("span", { className: theme2.addon, children: addon }), (0, import_jsx_runtime73.jsxs)("div", { className: theme2.field.base, children: [Icon && (0, import_jsx_runtime73.jsx)("div", { className: theme2.field.icon.base, children: (0, import_jsx_runtime73.jsx)(Icon, { className: theme2.field.icon.svg }) }), (0, import_jsx_runtime73.jsx)("input", { className: (0, import_classnames64.default)(theme2.field.input.base, theme2.field.input.colors[color], theme2.field.input.withIcon[Icon ? "on" : "off"], theme2.field.input.withAddon[addon ? "on" : "off"], theme2.field.input.withShadow[shadow ? "on" : "off"], theme2.field.input.sizes[sizing]), ...props, ref })] })] }), helperText && (0, import_jsx_runtime73.jsx)(HelperText, { color, children: helperText })] });
});
TextInput.displayName = "TextInput";

// node_modules/flowbite-react/lib/esm/components/Timeline/Timeline.js
var import_jsx_runtime80 = __toESM(require_jsx_runtime());
var import_classnames71 = __toESM(require_classnames());

// node_modules/flowbite-react/lib/esm/components/Timeline/TimelineBody.js
var import_jsx_runtime74 = __toESM(require_jsx_runtime());
var import_classnames65 = __toESM(require_classnames());
var TimelineBody = ({ children, className, ...props }) => {
  const theme2 = useTheme().theme.timeline.item.content;
  return (0, import_jsx_runtime74.jsx)("p", { className: (0, import_classnames65.default)(theme2.body, className), ...props, children });
};

// node_modules/flowbite-react/lib/esm/components/Timeline/TimelineContent.js
var import_jsx_runtime75 = __toESM(require_jsx_runtime());
var import_classnames66 = __toESM(require_classnames());

// node_modules/flowbite-react/lib/esm/components/Timeline/TimelineContext.js
var import_react37 = __toESM(require_react());
var TimelineContext = (0, import_react37.createContext)(void 0);
function useTimelineContext() {
  const context = (0, import_react37.useContext)(TimelineContext);
  if (!context) {
    throw new Error("useTimelineContext should be used within the TimelineContext providor!");
  }
  return context;
}

// node_modules/flowbite-react/lib/esm/components/Timeline/TimelineContent.js
var TimelineContent = ({ children, className, ...props }) => {
  const theme2 = useTheme().theme.timeline.item.content;
  const { horizontal } = useTimelineContext();
  return (0, import_jsx_runtime75.jsx)("div", { "data-testid": "timeline-content", className: (0, import_classnames66.default)(horizontal && theme2.base, className), ...props, children });
};

// node_modules/flowbite-react/lib/esm/components/Timeline/TimelineItem.js
var import_jsx_runtime76 = __toESM(require_jsx_runtime());
var import_classnames67 = __toESM(require_classnames());
var TimelineItem = ({ children, className, ...props }) => {
  const theme2 = useTheme().theme.timeline.item;
  const { horizontal } = useTimelineContext();
  return (0, import_jsx_runtime76.jsx)("li", { "data-testid": "timeline-item", className: (0, import_classnames67.default)(horizontal && theme2.base.horizontal, !horizontal && theme2.base.vertical, className), ...props, children });
};

// node_modules/flowbite-react/lib/esm/components/Timeline/TimelinePoint.js
var import_jsx_runtime77 = __toESM(require_jsx_runtime());
var import_classnames68 = __toESM(require_classnames());
var TimelinePoint = ({ children, className, icon: Icon, ...props }) => {
  const theme2 = useTheme().theme.timeline.item.point;
  const { horizontal } = useTimelineContext();
  return (0, import_jsx_runtime77.jsxs)("div", { "data-testid": "timeline-point", className: (0, import_classnames68.default)(horizontal && theme2.base.horizontal, !horizontal && theme2.base.vertical, className), ...props, children: [children, Icon ? (0, import_jsx_runtime77.jsx)("span", { className: (0, import_classnames68.default)(theme2.marker.icon.wrapper), children: (0, import_jsx_runtime77.jsx)(Icon, { "aria-hidden": true, className: (0, import_classnames68.default)(theme2.marker.icon.base) }) }) : (0, import_jsx_runtime77.jsx)("div", { className: (0, import_classnames68.default)(theme2.marker.base) }), horizontal && (0, import_jsx_runtime77.jsx)("div", { className: (0, import_classnames68.default)(theme2.line) })] });
};

// node_modules/flowbite-react/lib/esm/components/Timeline/TimelineTime.js
var import_jsx_runtime78 = __toESM(require_jsx_runtime());
var import_classnames69 = __toESM(require_classnames());
var TimelineTime = ({ children, className, ...props }) => {
  const theme2 = useTheme().theme.timeline.item.content;
  return (0, import_jsx_runtime78.jsx)("time", { className: (0, import_classnames69.default)(theme2.time, className), ...props, children });
};

// node_modules/flowbite-react/lib/esm/components/Timeline/TimelineTitle.js
var import_jsx_runtime79 = __toESM(require_jsx_runtime());
var import_classnames70 = __toESM(require_classnames());
var TimelineTitle = ({ children, className, as = "h3", ...props }) => {
  const theme2 = useTheme().theme.timeline.item.content;
  const Tag = as;
  return (0, import_jsx_runtime79.jsx)(Tag, { className: (0, import_classnames70.default)(theme2.title, className), ...props, children });
};

// node_modules/flowbite-react/lib/esm/components/Timeline/Timeline.js
var TimelineComponent = ({ children, horizontal, className }) => {
  const theme2 = useTheme().theme.timeline;
  return (0, import_jsx_runtime80.jsx)(TimelineContext.Provider, { value: { horizontal }, children: (0, import_jsx_runtime80.jsx)("ol", { "data-testid": "timeline-component", className: (0, import_classnames71.default)(horizontal && theme2.direction.horizontal, !horizontal && theme2.direction.vertical, className), children }) });
};
TimelineComponent.displayName = "Timeline";
TimelineItem.displayName = "Timeline.Item";
TimelinePoint.displayName = "Timeline.Point";
TimelineContent.displayName = "Timeline.Content";
TimelineTime.displayName = "Timeline.Time";
TimelineTitle.displayName = "Timeline.Title";
TimelineBody.displayName = "Timeline.Body";
var Timeline = Object.assign(TimelineComponent, {
  Item: TimelineItem,
  Point: TimelinePoint,
  Content: TimelineContent,
  Time: TimelineTime,
  Title: TimelineTitle,
  Body: TimelineBody
});

// node_modules/flowbite-react/lib/esm/components/Toast/Toast.js
var import_jsx_runtime82 = __toESM(require_jsx_runtime());
var import_classnames73 = __toESM(require_classnames());
var import_react39 = __toESM(require_react());

// node_modules/flowbite-react/lib/esm/components/Toast/ToastContext.js
var import_react38 = __toESM(require_react());
var ToastContext = (0, import_react38.createContext)(void 0);
function useToastContext() {
  const context = (0, import_react38.useContext)(ToastContext);
  if (!context) {
    throw new Error("useToastContext should be used within the ToastContext provider!");
  }
  return context;
}

// node_modules/flowbite-react/lib/esm/components/Toast/ToastToggle.js
var import_jsx_runtime81 = __toESM(require_jsx_runtime());
var import_classnames72 = __toESM(require_classnames());
var ToastToggle = ({ className, xIcon: XIcon = HiX }) => {
  const { duration, isClosed, isRemoved, setIsClosed, setIsRemoved } = useToastContext();
  const theme2 = useTheme().theme.toast.toggle;
  const handleClick = () => {
    setIsClosed(!isClosed);
    setTimeout(() => setIsRemoved(!isRemoved), duration);
  };
  return (0, import_jsx_runtime81.jsx)("button", { "aria-label": "Close", onClick: handleClick, type: "button", className: (0, import_classnames72.default)(theme2.base, className), children: (0, import_jsx_runtime81.jsx)(XIcon, { className: theme2.icon }) });
};

// node_modules/flowbite-react/lib/esm/components/Toast/Toast.js
var durationClasses = {
  75: "duration-75",
  100: "duration-100",
  150: "duration-150",
  200: "duration-200",
  300: "duration-300",
  500: "duration-500",
  700: "duration-700",
  1e3: "duration-1000"
};
var ToastComponent = ({ children, duration = 300, className, ...props }) => {
  const [isClosed, setIsClosed] = (0, import_react39.useState)(false);
  const [isRemoved, setIsRemoved] = (0, import_react39.useState)(false);
  const theme2 = useTheme().theme.toast;
  return (0, import_jsx_runtime82.jsx)(ToastContext.Provider, { value: { duration, isClosed, isRemoved, setIsClosed, setIsRemoved }, children: (0, import_jsx_runtime82.jsx)("div", { "data-testid": "flowbite-toast", className: (0, import_classnames73.default)(theme2.base, durationClasses[duration], { [theme2.closed]: isClosed }, { [theme2.removed]: isRemoved }, className), ...props, children }) });
};
ToastComponent.displayName = "Toast";
ToastToggle.displayName = "Toast.Toggle";
var Toast = Object.assign(ToastComponent, {
  Toggle: ToastToggle
});

// node_modules/flowbite-react/lib/esm/components/ToggleSwitch/ToggleSwitch.js
var import_jsx_runtime83 = __toESM(require_jsx_runtime());
var import_classnames74 = __toESM(require_classnames());
var import_react40 = __toESM(require_react());
var ToggleSwitch = ({ checked, disabled, label, name, onChange, className, color = "blue", ...props }) => {
  const theme2 = useTheme().theme.toggleSwitch;
  const id = (0, import_react40.useId)();
  const toggle = () => onChange(!checked);
  const handleClick = (event) => {
    event.preventDefault();
    toggle();
  };
  const handleKeyPress = (event) => {
    event.preventDefault();
  };
  return (0, import_jsx_runtime83.jsxs)(import_jsx_runtime83.Fragment, { children: [name && checked && (0, import_jsx_runtime83.jsx)("input", { checked, hidden: true, name, readOnly: true, type: "checkbox", className: "sr-only" }), (0, import_jsx_runtime83.jsxs)("button", { "aria-checked": checked, "aria-labelledby": `${id}-flowbite-toggleswitch-label`, disabled, id: `${id}-flowbite-toggleswitch`, onClick: handleClick, onKeyPress: handleKeyPress, role: "switch", tabIndex: 0, type: "button", className: (0, import_classnames74.default)(theme2.base, theme2.active[disabled ? "off" : "on"], className), ...props, children: [(0, import_jsx_runtime83.jsx)("div", { className: (0, import_classnames74.default)(theme2.toggle.base, theme2.toggle.checked[checked ? "on" : "off"], !disabled && theme2.toggle.checked.color[color]) }), (0, import_jsx_runtime83.jsx)("span", { "data-testid": "flowbite-toggleswitch-label", id: `${id}-flowbite-toggleswitch-label`, className: theme2.label, children: label })] })] });
};
export {
  Accordion,
  Alert,
  Avatar,
  Badge,
  Breadcrumb,
  Button,
  Card,
  Carousel,
  Checkbox,
  DarkThemeToggle,
  Dropdown,
  FileInput,
  Flowbite,
  Footer,
  FooterComponent,
  HelperText,
  Label,
  ListGroup,
  Modal,
  Navbar,
  Pagination,
  Progress,
  Radio,
  Rating,
  Select,
  Sidebar,
  Spinner,
  Table,
  Tabs,
  TabsComponent,
  TextInput,
  Textarea,
  Timeline,
  Toast,
  ToggleSwitch,
  Tooltip,
  useTheme,
  useThemeMode
};
/*! Bundled license information:

react/cjs/react-jsx-runtime.development.js:
  (**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

classnames/index.js:
  (*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  *)

react-indiana-drag-scroll/dist/index.es.js:
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
  (*!
    Copyright (c) 2017 Jed Watson.
    Licensed under the MIT License (MIT), see
    http://jedwatson.github.io/classnames
  *)
*/
//# sourceMappingURL=flowbite-react.js.map
