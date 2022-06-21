"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Divider = void 0;
const react_1 = __importDefault(require("react"));
const Divider = ({ className, ...rest }) => {
    return (react_1.default.createElement("hr", { className: `border-slate-200 dark:border-slate-700 my-2 ${className}`, ...rest }));
};
exports.Divider = Divider;
//# sourceMappingURL=index.js.map