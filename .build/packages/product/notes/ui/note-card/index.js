"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteCard = void 0;
const react_1 = __importDefault(require("react"));
const link_1 = __importDefault(require("next/link"));
const utils_1 = require("../../utils");
const NoteCard = ({ data: { title, publishedAt, slug, summary }, }) => {
    const date = (0, utils_1.formatDate)(publishedAt);
    return (react_1.default.createElement(link_1.default, { href: `/notes/${slug}` },
        react_1.default.createElement("a", { className: "flex flex-row justify-between items-center py-2 mb-2 w-full border-b border-dashed border-slate-200 dark:border-slate-700" },
            react_1.default.createElement("div", null,
                react_1.default.createElement("h4", { className: "mb-0 mt-0" }, title),
                react_1.default.createElement("p", { className: "text-slate-400 dark:text-slate-500 font-thin" }, summary)),
            react_1.default.createElement("span", { className: "text-slate-500" }, date))));
};
exports.NoteCard = NoteCard;
//# sourceMappingURL=index.js.map