"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const io_1 = require("react-icons/io");
const SocialItem_1 = __importDefault(require("./SocialItem"));
const SOCIAL_ITEMS = [
    {
        name: 'Twitter',
        url: 'https://twitter.com/stivncastillo_',
        icon: react_1.default.createElement(io_1.IoLogoTwitter, { size: 19 }),
    },
    {
        name: 'Github',
        url: 'https://github.com/stivncastillo',
        icon: react_1.default.createElement(io_1.IoLogoGithub, { size: 19 }),
    },
    {
        name: 'Linkedin',
        url: 'https://linkedin.com/in/stivncastillo/',
        icon: react_1.default.createElement(io_1.IoLogoLinkedin, { size: 19 }),
    },
    {
        name: 'Dribbble',
        url: 'https://dribbble.com/stivncastillo',
        icon: react_1.default.createElement(io_1.IoLogoDribbble, { size: 19 }),
    },
    {
        name: 'E-mail',
        url: 'mailto:stivencastillo.90@gmail.com',
        icon: react_1.default.createElement(io_1.IoIosMail, { size: 19 }),
    },
];
const SocialList = () => {
    return (react_1.default.createElement("section", { className: "flex flex-col flex-1 space-y-1 mb-8" },
        react_1.default.createElement("span", { className: "text-slate-400 dark:text-slate-500 text-xs" }, "Contacto / S\u00EDgueme"),
        react_1.default.createElement("ul", { className: "flex flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-4" }, SOCIAL_ITEMS.map(({ name, url, icon }) => (react_1.default.createElement(SocialItem_1.default, { key: name, name: name, href: url }, icon))))));
};
exports.default = SocialList;
//# sourceMappingURL=SocialList.js.map