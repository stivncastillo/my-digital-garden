"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const SocialItem = ({ children, name, href }) => {
    return (react_1.default.createElement("li", null,
        react_1.default.createElement("a", { href: href, target: "_blank", className: "text-slate-500 dark:dark:text-slate-300 hover:text-slate-700 dark:hover:text-slate-500 font-bold flex flex-row items-center space-x-1", rel: "noreferrer" },
            children,
            react_1.default.createElement("span", null, name))));
};
exports.default = SocialItem;
//# sourceMappingURL=SocialItem.js.map