"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
const react_1 = __importDefault(require("react"));
const image_1 = __importDefault(require("next/image"));
const gi_1 = require("react-icons/gi");
const Book = ({ title, author, image, current, link, }) => {
    return (react_1.default.createElement("a", { href: link, target: "_blank", rel: "noopener noreferrer" },
        react_1.default.createElement("div", { className: "relative flex flex-col" },
            react_1.default.createElement(image_1.default, { src: image, alt: "Book", width: 120, height: 200, layout: "responsive", className: "aspect-auto w-24 object-cover rounded-md hover:scale-110 transition-all duration-75 overflow-hidden" }),
            react_1.default.createElement("h4", { className: "text-lg mb-0 mt-2" }, title),
            react_1.default.createElement("div", { className: "flex flex-row items-center space-x-2" },
                react_1.default.createElement("span", null, author)),
            current && (react_1.default.createElement("span", { title: "Currently reading", className: "absolute top-1 right-1 bg-indigo-200 dark:bg-yellow-200 text-sm p-2 rounded-full text-indigo-600 dark:text-yellow-600 shadow-lg" },
                react_1.default.createElement(gi_1.GiRead, null))))));
};
exports.Book = Book;
//# sourceMappingURL=index.js.map