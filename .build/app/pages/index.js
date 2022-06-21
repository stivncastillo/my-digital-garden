"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStaticProps = void 0;
const head_1 = __importDefault(require("next/head"));
const fa_1 = require("react-icons/fa");
const im_1 = require("react-icons/im");
const fa_2 = require("react-icons/fa");
const image_1 = __importDefault(require("next/image"));
const PostCard_1 = __importDefault(require("../components/Posts/PostCard"));
const mdx_1 = require("../lib/mdx");
const link_1 = __importDefault(require("next/link"));
const SocialList_1 = __importDefault(require("../components/Social/SocialList"));
const Home = ({ posts }) => {
    const filteredBlogPosts = posts.sort((a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)));
    const pinnedPosts = filteredBlogPosts.find((post) => post.pinned);
    return (React.createElement(React.Fragment, null,
        React.createElement(head_1.default, null,
            React.createElement("title", null, "Stiven Castillo | Digital Garden"),
            React.createElement("meta", { name: "description", content: "Stiven Castillo es un desarrollador frontend y dise\u00F1ador de interfaces de usuario, trabaja en Elenas app." }),
            React.createElement("link", { rel: "icon", href: "/favicon.ico" })),
        React.createElement("figure", { className: "flex flex-col-reverse md:flex-row justify-start mb-2" },
            React.createElement("div", { className: "flex flex-col flex-1 space-y-4 mt-4 md:mt-0" },
                React.createElement("h1", { className: "text-4xl dark:text-white" }, "Stiven Castillo"),
                React.createElement("p", { className: "text-slate-500 dark:text-slate-300 font-thin text-xl" },
                    "Frontend developer at",
                    ' ',
                    React.createElement("a", { className: "link", target: "_blank", href: "https://elenas.co/co/" }, "Elenas"),
                    ". Begginer writer, speaker, UI Designer and Tattoo entusiast, based in Armenia, Colombia."),
                React.createElement(link_1.default, { href: '/about' },
                    React.createElement("a", { className: "link text-sm" }, "Acerca de mi"))),
            React.createElement("div", { className: "w-24 md:w-36" },
                React.createElement(image_1.default, { src: "/assets/images/profile.jpg", alt: "Profile", height: 800, width: 800, className: "rounded-full" }))),
        React.createElement(SocialList_1.default, null),
        React.createElement("section", { className: "flex flex-col flex-1 space-y-1 mb-8" },
            React.createElement("div", { className: "flex flex-row justify-between items-center mb-4" },
                React.createElement("h2", { className: "text-3xl font-bold dark:text-slate-50" }, "\u00DAltimos posts"),
                React.createElement(link_1.default, { href: "/blog" },
                    React.createElement("a", { className: "text-sm underline text-indigo-500 dark:text-amber-400" }, "ver m\u00E1s"))),
            React.createElement("div", { className: "flex flex-col" },
                pinnedPosts && React.createElement(PostCard_1.default, { data: pinnedPosts, pinned: true }),
                filteredBlogPosts
                    .filter((post) => post.slug !== pinnedPosts?.slug)
                    .slice(0, 2)
                    .map((frontMatter) => (React.createElement(PostCard_1.default, { key: frontMatter.slug, data: frontMatter }))))),
        React.createElement("section", null,
            React.createElement("div", { className: "flex flex-row justify-between items-center mb-4" },
                React.createElement("h2", { className: "text-3xl font-bold dark:text-slate-100" }, "Destacado")),
            React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 grid-rows-1 md:grid-rows-2 gap-6 px-2 md:px-4" },
                React.createElement(link_1.default, { href: "/notes?category=Code" },
                    React.createElement("a", null,
                        React.createElement("div", { className: "flex flex-col justify-end bg-slate-800 rounded-xl h-56 p-4 hover:shadow-lg hover:shadow-slate-500/50" },
                            React.createElement("div", { className: "" },
                                React.createElement("div", { className: "flex flex-row items-center text-white space-x-2 mb-2" },
                                    React.createElement(fa_1.FaLaptopCode, { size: 24 }),
                                    React.createElement("h4", { className: "text-xl font-bold m-0" }, "Code")),
                                React.createElement("p", { className: "text-slate-400" }, "Snnipets, notas y tricks \u00FAtiles para el desarrollo web/m\u00F3vil"))))),
                React.createElement(link_1.default, { href: "/notes?category=Design" },
                    React.createElement("a", null,
                        React.createElement("div", { className: "flex flex-col justify-end bg-green-200 rounded-xl h-56 p-4 hover:shadow-lg hover:shadow-green-300/50" },
                            React.createElement("div", { className: "" },
                                React.createElement("div", { className: "flex flex-row items-center text-slate-900 space-x-2 mb-2" },
                                    React.createElement(im_1.ImPencil, { size: 20 }),
                                    React.createElement("h4", { className: "text-xl font-bold m-0" }, "UI Design")),
                                React.createElement("p", { className: "text-green-600 dark:text-green-600" }, "Patrones de dise\u00F1o, design systems, bookmarks, posts relacionados, etc."))))),
                React.createElement("div", { className: "bg-slate-100 dark:bg-slate-600 rounded-xl m-h-56 p-4 flex flex-col space-y-4 justify-between" },
                    React.createElement("div", { className: "flex flex-row items-end space-x-4" },
                        React.createElement(image_1.default, { src: "/assets/images/books/atomic.jpg", alt: "Book", width: 100, height: 142, className: "aspect-auto object-cover rounded-md" }),
                        React.createElement("div", { className: "" },
                            React.createElement("span", { className: "text-slate-400 dark:text-slate-200 font-thin text-sm" }, "le\u00EDdo recientemente"),
                            React.createElement("h4", { className: "text-xl font-bold text-slate-700 dark:text-white" }, "Atomic Habits"),
                            React.createElement("span", { className: "text-slate-400 dark:text-slate-200 font-thin text-sm" }, "by James Clear"))),
                    React.createElement(link_1.default, { href: "/books" },
                        React.createElement("a", { className: "block py-2 px-4 bg-indigo-500 dark:bg-amber-500 text-white text-center text-sm font-bold rounded-md" }, "\u00BFQu\u00E9 estoy leyendo?"))),
                React.createElement(link_1.default, { href: "/notes?category=Misc" },
                    React.createElement("a", null,
                        React.createElement("div", { className: "flex flex-col justify-end bg-yellow-100 rounded-xl h-56 p-4 hover:shadow-lg hover:shadow-yellow-300/50" },
                            React.createElement("div", { className: "" },
                                React.createElement("div", { className: "flex flex-row items-center text-slate-900 space-x-2 mb-2" },
                                    React.createElement(fa_2.FaBoxOpen, { size: 20 }),
                                    React.createElement("h4", { className: "text-xl font-bold m-0" }, "Misc")),
                                React.createElement("p", { className: "text-yellow-600 dark:text-yellow-600" }, "Herramientas, apps, librer\u00EDas, frameworks, setups, comunidades web, etc.")))))))));
};
async function getStaticProps() {
    const posts = await (0, mdx_1.getAllFilesFrontMatter)('blog');
    return { props: { posts } };
}
exports.getStaticProps = getStaticProps;
exports.default = Home;
//# sourceMappingURL=index.js.map