"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Container = ({ children, ...rest }) => {
    return (react_1.default.createElement("div", { className: "flex flex-col m-auto h-screen", ...rest }, children));
};
exports.default = Container;
//# sourceMappingURL=Container.js.map