"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStaticProps = void 0;
const react_1 = __importDefault(require("react"));
const head_1 = __importDefault(require("next/head"));
const mdx_1 = require("../lib/mdx");
const PostCard_1 = __importDefault(require("../components/Posts/PostCard"));
const core_1 = require("@digitalgarden/core");
function Blog({ posts }) {
    const filteredBlogPosts = posts.sort((a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)));
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(head_1.default, null,
            react_1.default.createElement("title", null, "Stiven Castillo | Blog")),
        react_1.default.createElement("h1", { className: "text-3xl mb-6" }, "Blog"),
        !filteredBlogPosts.length && (react_1.default.createElement(core_1.Alert, null,
            react_1.default.createElement("p", null, "No hay post, lo siento."))),
        filteredBlogPosts.map((frontMatter) => (react_1.default.createElement(PostCard_1.default, { key: frontMatter.slug, data: frontMatter, slim: true })))));
}
exports.default = Blog;
async function getStaticProps() {
    const posts = await (0, mdx_1.getAllFilesFrontMatter)('blog');
    return { props: { posts } };
}
exports.getStaticProps = getStaticProps;
//# sourceMappingURL=blog.js.map