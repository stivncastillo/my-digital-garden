"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const image_1 = __importDefault(require("next/image"));
const io_1 = require("react-icons/io");
const format_1 = __importDefault(require("date-fns/format"));
const link_1 = __importDefault(require("next/link"));
const PostCard = ({ pinned, slim, data }) => {
    const { title, publishedAt, slug, summary, image } = data;
    const formattedDate = publishedAt.replace(/-/g, '/');
    const day = (0, format_1.default)(new Date(formattedDate), 'dd');
    const month = (0, format_1.default)(new Date(formattedDate), 'MMM');
    return (react_1.default.createElement(link_1.default, { href: `/blog/${slug}` },
        react_1.default.createElement("a", { className: "group mb-4 hover:bg-slate-50 dark:hover:bg-slate-800 hover:rounded-lg" },
            react_1.default.createElement("article", { className: "flex flex-row space-x-4 p-4" },
                react_1.default.createElement("div", { className: "flex flex-col items-center" },
                    react_1.default.createElement("div", { className: `flex flex-col ${pinned
                            ? 'bg-indigo-100 dark:bg-yellow-100 group-hover:bg-indigo-200 dark:group-hover:bg-yellow-200 text-indigo-500 dark:text-yellow-600'
                            : 'bg-slate-100 group-hover:bg-slate-200'}  rounded-md py-3 px-4 items-center` },
                        react_1.default.createElement("span", { className: "font-thin font-merri leading-3 text-xs mb-1 dark:text-slate-900 uppercase" }, month),
                        react_1.default.createElement("span", { className: "font-bold font-merri leading-3 text-xl dark:text-slate-900" }, day)),
                    pinned && (react_1.default.createElement("span", { className: "text-indigo-500 dark:text-yellow-500 mt-2" },
                        react_1.default.createElement(io_1.IoIosBookmark, { size: 20 })))),
                react_1.default.createElement("div", { className: "flex-1" },
                    react_1.default.createElement("h3", { className: "text-2xl mb-2 mt-0 font-bold dark:text-slate-100" }, title),
                    react_1.default.createElement("p", { className: `text-slate-500 font-thin dark:text-slate-400 ${slim ? 'text-sm' : 'text-md'}` }, summary)),
                react_1.default.createElement("div", { className: `hidden md:block ${slim ? 'w-16' : 'w-24'}` },
                    react_1.default.createElement(image_1.default, { objectFit: "cover", src: image, alt: "Tree", width: 96, height: 96, layout: "responsive", className: "aspect-square object-cover rounded-md" }))))));
};
exports.default = PostCard;
//# sourceMappingURL=PostCard.js.map