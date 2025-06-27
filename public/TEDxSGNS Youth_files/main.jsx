import { injectQuery as __vite__injectQuery } from "/@vite/client";import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/main.jsx");import { jsxDEV } from "/@id/__x00__react/jsx-dev-runtime";
import RefreshRuntime from "/@react-refresh";
let prevRefreshReg;
let prevRefreshSig;
if (import.meta.hot) {
  if (!window.__vite_plugin_react_preamble_installed__) {
    throw new Error("@vitejs/plugin-react can't detect preamble. Something is wrong. See https://github.com/vitejs/vite-plugin-react/pull/11#discussion_r430879201");
  }
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    RefreshRuntime.register(type, "C:/Users/Preeti/OneDrive/Desktop/TEDxUPES/src/main.jsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=511d2cde"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react;
import __vite__cjsImport4_reactDom_client from "/node_modules/.vite/deps/react-dom_client.js?v=511d2cde"; const ReactDOM = __vite__cjsImport4_reactDom_client.__esModule ? __vite__cjsImport4_reactDom_client.default : __vite__cjsImport4_reactDom_client;
import { BrowserRouter } from "/node_modules/.vite/deps/react-router-dom.js?v=511d2cde";
import App from "/src/App.jsx";
import "/src/index.css";
import __vite__cjsImport8_react from "/node_modules/.vite/deps/react.js?v=511d2cde"; const useEffect = __vite__cjsImport8_react["useEffect"];
import { useLocation } from "/node_modules/.vite/deps/react-router-dom.js?v=511d2cde";
function ScrollToTop() {
  _s();
  const {
    pathname
  } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
_s(ScrollToTop, "+8VPq4+XDMjo/kjL3WLkbwU2Amg=", false, function() {
  return [useLocation];
});
_c = ScrollToTop;
ReactDOM.createRoot(document.getElementById("root")).render(/* @__PURE__ */ jsxDEV(React.StrictMode, { children: /* @__PURE__ */ jsxDEV(BrowserRouter, { children: [
  /* @__PURE__ */ jsxDEV(ScrollToTop, {}, void 0, false, {
    fileName: "C:/Users/Preeti/OneDrive/Desktop/TEDxUPES/src/main.jsx",
    lineNumber: 27,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ jsxDEV(App, {}, void 0, false, {
    fileName: "C:/Users/Preeti/OneDrive/Desktop/TEDxUPES/src/main.jsx",
    lineNumber: 28,
    columnNumber: 7
  }, this)
] }, void 0, true, {
  fileName: "C:/Users/Preeti/OneDrive/Desktop/TEDxUPES/src/main.jsx",
  lineNumber: 26,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "C:/Users/Preeti/OneDrive/Desktop/TEDxUPES/src/main.jsx",
  lineNumber: 25,
  columnNumber: 61
}, this));
var _c;
$RefreshReg$(_c, "ScrollToTop");
if (import.meta.hot) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
  import(
    /* @vite-ignore */
    __vite__injectQuery(import.meta.url, 'import')).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("C:/Users/Preeti/OneDrive/Desktop/TEDxUPES/src/main.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports)
        return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate(currentExports, nextExports);
      if (invalidateMessage)
        import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBb0JNOzs7Ozs7Ozs7Ozs7Ozs7O0FBcEJOLE9BQU9BLFdBQVc7QUFDbEIsT0FBT0MsY0FBYztBQUNyQixTQUFTQyxxQkFBcUI7QUFDOUIsT0FBT0MsU0FBUztBQUNoQixPQUFPO0FBR1AsU0FBU0MsaUJBQWlCO0FBQzFCLFNBQVNDLG1CQUFtQjtBQUM1QixTQUFTQyxjQUFjO0FBQUFDLEtBQUE7QUFDckIsUUFBTTtBQUFBLElBQUVDO0FBQUFBLEVBQVMsSUFBSUgsWUFBWTtBQUNqQ0QsWUFBVSxNQUFNO0FBQ2RLLFdBQU9DLFNBQVMsR0FBRyxDQUFDO0FBQUEsRUFDdEIsR0FBRyxDQUFDRixRQUFRLENBQUM7QUFDYixTQUFPO0FBQ1Q7QUFBQ0QsR0FOUUQsYUFBVztBQUFBLFVBQ0dELFdBQVc7QUFBQTtBQUFBTSxLQUR6Qkw7QUFRVEwsU0FBU1csV0FBV0MsU0FBU0MsZUFBZSxNQUFNLENBQUMsRUFBRUMsT0FDbkQsdUJBQUMsTUFBTSxZQUFOLEVBQ0MsaUNBQUMsaUJBQ0M7QUFBQSx5QkFBQyxpQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQVk7QUFBQSxFQUNaLHVCQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFJO0FBQUEsS0FGTjtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BR0EsS0FKRjtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BS0EsQ0FDRjtBQUFFLElBQUFKO0FBQUFLLGFBQUFMLElBQUEiLCJuYW1lcyI6WyJSZWFjdCIsIlJlYWN0RE9NIiwiQnJvd3NlclJvdXRlciIsIkFwcCIsInVzZUVmZmVjdCIsInVzZUxvY2F0aW9uIiwiU2Nyb2xsVG9Ub3AiLCJfcyIsInBhdGhuYW1lIiwid2luZG93Iiwic2Nyb2xsVG8iLCJfYyIsImNyZWF0ZVJvb3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVuZGVyIiwiJFJlZnJlc2hSZWckIl0sInNvdXJjZXMiOlsibWFpbi5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbS9jbGllbnQnO1xyXG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAnO1xyXG5pbXBvcnQgJy4vaW5kZXguY3NzJztcclxuXHJcbi8vIFNjcm9sbFRvVG9wIGNvbXBvbmVudCB0byBzY3JvbGwgdG8gdG9wIG9uIHJvdXRlIGNoYW5nZVxyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlTG9jYXRpb24gfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5mdW5jdGlvbiBTY3JvbGxUb1RvcCgpIHtcclxuICBjb25zdCB7IHBhdGhuYW1lIH0gPSB1c2VMb2NhdGlvbigpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcbiAgfSwgW3BhdGhuYW1lXSk7XHJcbiAgcmV0dXJuIG51bGw7XHJcbn1cclxuXHJcblJlYWN0RE9NLmNyZWF0ZVJvb3QoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSkucmVuZGVyKFxyXG4gIDxSZWFjdC5TdHJpY3RNb2RlPlxyXG4gICAgPEJyb3dzZXJSb3V0ZXI+XHJcbiAgICAgIDxTY3JvbGxUb1RvcCAvPlxyXG4gICAgICA8QXBwIC8+XHJcbiAgICA8L0Jyb3dzZXJSb3V0ZXI+XHJcbiAgPC9SZWFjdC5TdHJpY3RNb2RlPlxyXG4pO1xyXG4iXSwiZmlsZSI6IkM6L1VzZXJzL1ByZWV0aS9PbmVEcml2ZS9EZXNrdG9wL1RFRHhVUEVTL3NyYy9tYWluLmpzeCJ9