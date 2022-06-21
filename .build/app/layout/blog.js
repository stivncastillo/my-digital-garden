"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Divider_1 = __importDefault(require("../components/Common/Divider"));
const format_1 = __importDefault(require("date-fns/format"));
const BlogLayout = ({ children, frontMatter }) => {
    const { title, readingTime, publishedAt, summary } = frontMatter;
    const date = (0, format_1.default)(new Date(publishedAt), 'MMMM dd, yyyy');
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("header", { className: "mb-4" },
            react_1.default.createElement("h1", { className: "mb-2" }, title),
            react_1.default.createElement("p", { className: "mb-8 text-xl text-slate-500 dark:text-slate-400 leading-relaxed" }, summary),
            react_1.default.createElement("div", { className: "flex flex-row justify-between items-end" },
                react_1.default.createElement("span", { className: "text-sm text-slate-400" }, "Stiven Castillo"),
                react_1.default.createElement("div", { className: "flex flex-row items-center space-x-2" },
                    react_1.default.createElement("span", { className: "dark:text-slate-500 text-slate-400 text-xs" }, readingTime.text),
                    react_1.default.createElement("span", { className: "text-slate-400 text-sm" }, date))),
            react_1.default.createElement(Divider_1.default, null)),
        react_1.default.createElement("div", { id: "blog-layout" }, children)));
};
exports.default = BlogLayout;
//# sourceMappingURL=blog.js.map