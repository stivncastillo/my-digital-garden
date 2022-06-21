"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MDXComponents = void 0;
const CustomAnchor_1 = __importDefault(require("./Common/CustomAnchor"));
const Divider_1 = __importDefault(require("./Common/Divider"));
const Toc_1 = __importDefault(require("./Toc/Toc"));
exports.MDXComponents = {
    TOCInline: Toc_1.default,
    ul: (props) => React.createElement("ul", { className: "list-disc list-inside ml-6 my-2", ...props }),
    ol: (props) => React.createElement("ol", { className: "list-decimal list-inside ml-6 my-2", ...props }),
    p: (props) => React.createElement("p", { ...props }),
    blockquote: (props) => (React.createElement("blockquote", { className: "p-4 italic border-l-4 bg-slate-100 dark:bg-slate-800 rounded-md dark:text-slate-400 text-slate-500 border-slate-300 dark:border-slate-600 quote", ...props })),
    code: (props) => React.createElement("code", { ...props }),
    hr: (props) => React.createElement(Divider_1.default, { ...props }),
    table: (props) => (React.createElement("div", { className: "mb-4" },
        React.createElement("table", { className: "min-w-full", ...props }))),
    img: (props) => (React.createElement("div", { className: "w-full" },
        React.createElement("img", { className: "mx-auto w-full", ...props }))),
    a: CustomAnchor_1.default,
};
//# sourceMappingURL=MDXComponents.js.map