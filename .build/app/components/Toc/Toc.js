"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Toc = ({ toc, indentDepth = 3, fromHeading = 1, toHeading = 6, asDisclosure = false, exclude = '', }) => {
    if (!toc) {
        return null;
    }
    const re = Array.isArray(exclude)
        ? new RegExp('^(' + exclude.join('|') + ')$', 'i')
        : new RegExp('^(' + exclude + ')$', 'i');
    const filteredToc = toc.filter((heading) => heading.depth >= fromHeading &&
        heading.depth <= toHeading &&
        !re.test(heading.value));
    const tocList = (react_1.default.createElement("ul", { className: "ml-6 text-sm marker:text-slate-400 dark:marker:text-slate-500 list-disc" }, filteredToc.map((heading) => (react_1.default.createElement("li", { key: heading.value, className: `${heading.depth >= indentDepth && 'ml-4'}` },
        react_1.default.createElement("a", { href: heading.url }, heading.value))))));
    return (react_1.default.createElement("div", { className: "mt-4 mb-8" }, asDisclosure ? (react_1.default.createElement("details", { open: true },
        react_1.default.createElement("summary", { className: "py-4 text-xl font-bold" }, "Table of Contents"),
        react_1.default.createElement("div", { className: "ml-6" }, tocList))) : (tocList)));
};
exports.default = Toc;
//# sourceMappingURL=Toc.js.map