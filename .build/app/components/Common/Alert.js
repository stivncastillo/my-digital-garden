"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Alert = ({ children }) => {
    return (react_1.default.createElement("div", { className: "bg-indigo-100 text-indigo-500 py-2 px-4 rounded-md text-center" }, children));
};
exports.default = Alert;
//# sourceMappingURL=Alert.js.map