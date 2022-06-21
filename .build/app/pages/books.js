"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStaticProps = void 0;
const head_1 = __importDefault(require("next/head"));
const react_1 = __importDefault(require("react"));
const core_1 = require("@digitalgarden/core");
const data_1 = require("../data/data");
const getStaticProps = async () => {
    return {
        props: {
            bookList: data_1.books,
        },
    };
};
exports.getStaticProps = getStaticProps;
const Books = ({ bookList }) => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(head_1.default, null,
            react_1.default.createElement("title", null, "Stiven Castillo | Books")),
        react_1.default.createElement("div", { className: "mb-6" },
            react_1.default.createElement("h1", { className: "text-3xl" }, "Books"),
            react_1.default.createElement("p", { className: "text-slate-500 dark:text-slate-300 font-thin text-xl" }, "Algunos excelentes libros que he tenido la oportunidad de encontrarme.")),
        react_1.default.createElement("div", { className: "grid gap-4 grid-cols-2 md:grid-cols-4 lg:gap-6" }, bookList.map((book, index) => (react_1.default.createElement(core_1.Book, { key: `book-${index}`, ...book }))))));
};
exports.default = Books;
//# sourceMappingURL=books.js.map