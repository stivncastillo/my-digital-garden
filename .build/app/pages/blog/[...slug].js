"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStaticProps = exports.getStaticPaths = void 0;
const mdx_1 = require("../../lib/mdx");
const blog_1 = __importDefault(require("../../layout/blog"));
const MDXComponents_1 = require("../../components/MDXComponents");
const next_mdx_remote_1 = require("next-mdx-remote");
const head_1 = __importDefault(require("next/head"));
const components = { ...MDXComponents_1.MDXComponents };
const URL = process.env.NEXT_PUBLIC_DOMAIN;
function Blog({ mdxSource, frontMatter }) {
    const { title, summary, image, slug, publishedAt, updatedAt, author, toc } = frontMatter;
    return (React.createElement(React.Fragment, null,
        React.createElement(head_1.default, null,
            React.createElement("title", null, title),
            React.createElement("meta", { name: "description", content: summary }),
            React.createElement("meta", { name: "author", content: author }),
            React.createElement("meta", { name: "twitter:card", content: "summary" }),
            React.createElement("meta", { name: "twitter:creator", content: "@stivncastillo_" }),
            React.createElement("meta", { name: "twitter:title", content: `${author} | ${title}` }),
            React.createElement("meta", { name: "twitter:description", content: summary }),
            image && React.createElement("meta", { name: "twitter:image", content: `${URL}${image}` }),
            React.createElement("meta", { property: "og:title", content: `${author} | ${title}` }),
            React.createElement("meta", { property: "og:description", content: summary }),
            image && React.createElement("meta", { property: "og:image", content: `${URL}${image}` }),
            React.createElement("meta", { property: "og:url", content: `${URL}/blog/${slug}` }),
            React.createElement("meta", { property: "og:type", content: "article" }),
            React.createElement("meta", { property: "article:published_time", content: publishedAt }),
            React.createElement("meta", { property: "article:modified_time", content: updatedAt }),
            React.createElement("meta", { property: "article:author", content: author }),
            React.createElement("meta", { property: "og:locale", content: "es-ES" })),
        React.createElement(blog_1.default, { frontMatter: frontMatter },
            React.createElement(next_mdx_remote_1.MDXRemote, { ...mdxSource, components: components, scope: {
                    toc,
                } }))));
}
exports.default = Blog;
async function getStaticPaths() {
    const posts = await (0, mdx_1.getFiles)('blog');
    return {
        paths: posts.map((p) => ({
            params: {
                slug: (0, mdx_1.formatSlug)(p).split('/'),
            },
        })),
        fallback: false,
    };
}
exports.getStaticPaths = getStaticPaths;
async function getStaticProps({ params }) {
    const post = await (0, mdx_1.getFileBySlug)('blog', params.slug.join('/'));
    return { props: post };
}
exports.getStaticProps = getStaticProps;
//# sourceMappingURL=%5B...slug%5D.js.map