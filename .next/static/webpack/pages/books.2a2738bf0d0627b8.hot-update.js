"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/books",{

/***/ "./components/Books/Book.tsx":
/*!***********************************!*\
  !*** ./components/Books/Book.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_gi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/gi */ \"./node_modules/react-icons/gi/index.esm.js\");\n\n\n\n\nvar _this = undefined;\nvar Book = function(param) {\n    var title = param.title, author = param.author, image = param.image, current = param.current, link = param.link;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        href: link,\n        target: \"_blank\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"relative flex flex-col\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: image,\n                    alt: \"Book\",\n                    width: 120,\n                    height: 200,\n                    layout: \"responsive\",\n                    className: \"aspect-auto w-24 object-cover rounded-md hover:scale-110 transition-all duration-75\"\n                }, void 0, false, {\n                    fileName: \"/Users/stiven/Projects/Frontend/my-digital-garden/components/Books/Book.tsx\",\n                    lineNumber: 10,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                    className: \"text-lg mb-0 mt-2\",\n                    children: title\n                }, void 0, false, {\n                    fileName: \"/Users/stiven/Projects/Frontend/my-digital-garden/components/Books/Book.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-row items-center space-x-2\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: author\n                    }, void 0, false, {\n                        fileName: \"/Users/stiven/Projects/Frontend/my-digital-garden/components/Books/Book.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/stiven/Projects/Frontend/my-digital-garden/components/Books/Book.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, _this),\n                current && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    title: \"Currently reading\",\n                    className: \"absolute top-1 right-1 bg-indigo-200 dark:bg-yellow-200 text-sm p-2 rounded-full text-indigo-600 dark:text-yellow-600 shadow-lg\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_gi__WEBPACK_IMPORTED_MODULE_3__.GiRead, {}, void 0, false, {\n                        fileName: \"/Users/stiven/Projects/Frontend/my-digital-garden/components/Books/Book.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/stiven/Projects/Frontend/my-digital-garden/components/Books/Book.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 11\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/stiven/Projects/Frontend/my-digital-garden/components/Books/Book.tsx\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/stiven/Projects/Frontend/my-digital-garden/components/Books/Book.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, _this));\n};\n_c = Book;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Book);\nvar _c;\n$RefreshReg$(_c, \"Book\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Jvb2tzL0Jvb2sudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF5QjtBQUNLO0FBQ1M7O0FBR3ZDLEdBQUssQ0FBQ0csSUFBSSxHQUFHLFFBQVEsUUFBK0MsQ0FBQztRQUFyREMsS0FBSyxTQUFMQSxLQUFLLEVBQUVDLE1BQU0sU0FBTkEsTUFBTSxFQUFFQyxLQUFLLFNBQUxBLEtBQUssRUFBRUMsT0FBTyxTQUFQQSxPQUFPLEVBQUVDLElBQUksU0FBSkEsSUFBSTtJQUNqRCxNQUFNLDZFQUNIQyxDQUFDO1FBQUNDLElBQUksRUFBRUYsSUFBSTtRQUFFRyxNQUFNLEVBQUMsQ0FBUTs4RkFDM0JDLENBQUc7WUFBQ0MsU0FBUyxFQUFDLENBQXdCOzs0RkFDcENaLG1EQUFLO29CQUNKYSxHQUFHLEVBQUVSLEtBQUs7b0JBQ1ZTLEdBQUcsRUFBQyxDQUFNO29CQUNWQyxLQUFLLEVBQUUsR0FBRztvQkFDVkMsTUFBTSxFQUFFLEdBQUc7b0JBQ1hDLE1BQU0sRUFBQyxDQUFZO29CQUNuQkwsU0FBUyxFQUFDLENBQXFGOzs7Ozs7NEZBRWhHTSxDQUFFO29CQUFDTixTQUFTLEVBQUMsQ0FBbUI7OEJBQUVULEtBQUs7Ozs7Ozs0RkFDdkNRLENBQUc7b0JBQUNDLFNBQVMsRUFBQyxDQUFzQzswR0FDbERPLENBQUk7a0NBQUVmLE1BQU07Ozs7Ozs7Ozs7O2dCQUVkRSxPQUFPLGdGQUNMYSxDQUFJO29CQUNIaEIsS0FBSyxFQUFDLENBQW1CO29CQUN6QlMsU0FBUyxFQUFDLENBQWlJOzBHQUUxSVgsa0RBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1uQixDQUFDO0tBM0JLQyxJQUFJO0FBNkJWLCtEQUFlQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQm9va3MvQm9vay50c3g/OTk3YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCB7IEdpUmVhZCB9IGZyb20gJ3JlYWN0LWljb25zL2dpJ1xuaW1wb3J0IHsgQm9va1R5cGUgfSBmcm9tICcuLi8uLi9kYXRhL2RhdGEnXG5cbmNvbnN0IEJvb2sgPSAoeyB0aXRsZSwgYXV0aG9yLCBpbWFnZSwgY3VycmVudCwgbGluayB9OiBCb29rVHlwZSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxhIGhyZWY9e2xpbmt9IHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgIHNyYz17aW1hZ2V9XG4gICAgICAgICAgYWx0PVwiQm9va1wiXG4gICAgICAgICAgd2lkdGg9ezEyMH1cbiAgICAgICAgICBoZWlnaHQ9ezIwMH1cbiAgICAgICAgICBsYXlvdXQ9XCJyZXNwb25zaXZlXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJhc3BlY3QtYXV0byB3LTI0IG9iamVjdC1jb3ZlciByb3VuZGVkLW1kIGhvdmVyOnNjYWxlLTExMCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi03NVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LWxnIG1iLTAgbXQtMlwiPnt0aXRsZX08L2g0PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIHNwYWNlLXgtMlwiPlxuICAgICAgICAgIDxzcGFuPnthdXRob3J9PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge2N1cnJlbnQgJiYgKFxuICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICB0aXRsZT1cIkN1cnJlbnRseSByZWFkaW5nXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0xIHJpZ2h0LTEgYmctaW5kaWdvLTIwMCBkYXJrOmJnLXllbGxvdy0yMDAgdGV4dC1zbSBwLTIgcm91bmRlZC1mdWxsIHRleHQtaW5kaWdvLTYwMCBkYXJrOnRleHQteWVsbG93LTYwMCBzaGFkb3ctbGdcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxHaVJlYWQgLz5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2E+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9va1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiSW1hZ2UiLCJHaVJlYWQiLCJCb29rIiwidGl0bGUiLCJhdXRob3IiLCJpbWFnZSIsImN1cnJlbnQiLCJsaW5rIiwiYSIsImhyZWYiLCJ0YXJnZXQiLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImxheW91dCIsImg0Iiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Books/Book.tsx\n");

/***/ })

});