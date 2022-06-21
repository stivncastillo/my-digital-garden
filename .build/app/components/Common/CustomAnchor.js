"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const link_1 = __importDefault(require("next/link"));
const CustomLink = ({ href, ...rest }) => {
    const isInternalLink = href && href.startsWith('/');
    const isAnchorLink = href && href.startsWith('#');
    if (isInternalLink) {
        return (React.createElement(link_1.default, { href: href },
            React.createElement("a", { ...rest })));
    }
    if (isAnchorLink) {
        return React.createElement("a", { href: href, ...rest });
    }
    return React.createElement("a", { target: "_blank", rel: "noopener noreferrer", href: href, ...rest });
};
exports.default = CustomLink;
//# sourceMappingURL=CustomAnchor.js.map