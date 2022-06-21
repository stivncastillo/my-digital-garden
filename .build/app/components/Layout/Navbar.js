"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const io_1 = require("react-icons/io");
const next_themes_1 = require("next-themes");
const link_1 = __importDefault(require("next/link"));
const Navbar = () => {
    const { theme, setTheme } = (0, next_themes_1.useTheme)();
    return (react_1.default.createElement("div", { className: "flex flex-row items-center p-2 md:px-8 w-full max-w-4xl mx-auto" },
        react_1.default.createElement(link_1.default, { href: "/" },
            react_1.default.createElement("a", { className: "flex items-center", "aria-label": "Home" },
                react_1.default.createElement("span", { className: "bg-indigo-500 rounded-full w-8 h-8 block mr-8" }))),
        react_1.default.createElement("nav", { className: " flex-1" },
            react_1.default.createElement("ul", { className: "flex space-x-4" },
                react_1.default.createElement("li", null,
                    react_1.default.createElement(link_1.default, { href: "/blog" },
                        react_1.default.createElement("a", { className: "text-slate-900 dark:text-slate-50 hover:text-orange-400 dark:hover:text-orange-400" }, "Blog"))),
                react_1.default.createElement("li", null,
                    react_1.default.createElement(link_1.default, { href: "/notes" },
                        react_1.default.createElement("a", { className: "text-slate-900 dark:text-slate-50 hover:text-green-500 dark:hover:text-green-500" }, "Notes"))),
                react_1.default.createElement("li", null,
                    react_1.default.createElement("a", { href: "#", title: "Coming soon", "aria-disabled": "true", className: "text-slate-400 dark:text-slate-500 " }, "Playground \uD83D\uDEA7")))),
        theme && (react_1.default.createElement("button", { type: "button", "aria-label": "dark mode toggle", onClick: () => setTheme(theme === 'dark' ? 'light' : 'dark'), className: "text-2xl dark:text-slate-50" }, theme === 'dark' ? react_1.default.createElement(io_1.IoIosSunny, null) : react_1.default.createElement(io_1.IoIosMoon, null)))));
};
exports.default = Navbar;
//# sourceMappingURL=Navbar.js.map