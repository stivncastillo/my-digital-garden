"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateSortDesc = exports.getAllFilesFrontMatter = exports.getFileBySlug = exports.formatSlug = exports.getFiles = void 0;
const fs_1 = __importDefault(require("fs"));
const gray_matter_1 = __importDefault(require("gray-matter"));
const mdx_prism_1 = __importDefault(require("mdx-prism"));
const path_1 = __importDefault(require("path"));
const reading_time_1 = __importDefault(require("reading-time"));
const serialize_1 = require("next-mdx-remote/serialize");
const rehype_prism_plus_1 = __importDefault(require("rehype-prism-plus"));
const rehype_autolink_headings_1 = __importDefault(require("rehype-autolink-headings"));
const rehype_slug_1 = __importDefault(require("rehype-slug"));
const remark_extended_table_1 = require("remark-extended-table");
const remark_gfm_1 = __importDefault(require("remark-gfm"));
const remark_images_1 = __importDefault(require("remark-images"));
const remark_img_to_jsx_1 = __importDefault(require("./remark-img-to-jsx"));
const remark_toc_headings_1 = __importDefault(require("./remark-toc-headings"));
const remark_file_title_1 = __importDefault(require("./remark-file-title"));
const files_1 = __importDefault(require("../utils/files"));
const root = process.cwd();
function getFiles(type) {
    const prefixPaths = path_1.default.join(root, 'data', type);
    const files = (0, files_1.default)(prefixPaths);
    return files.map((file) => file.slice(prefixPaths.length + 1).replace(/\\/g, '/'));
}
exports.getFiles = getFiles;
function formatSlug(slug) {
    return slug.replace(/\.(mdx|md)/, '');
}
exports.formatSlug = formatSlug;
async function getFileBySlug(type, slug) {
    const source = slug
        ? fs_1.default.readFileSync(path_1.default.join(root, 'data', type, `${slug}.mdx`), 'utf8')
        : fs_1.default.readFileSync(path_1.default.join(root, 'data', `${type}.mdx`), 'utf8');
    const { data, content } = (0, gray_matter_1.default)(source);
    let toc = [];
    const mdxSource = await (0, serialize_1.serialize)(content, {
        parseFrontmatter: true,
        mdxOptions: {
            remarkPlugins: [
                [remark_toc_headings_1.default, { exportRef: toc }],
                remark_file_title_1.default,
                remark_gfm_1.default,
                remark_extended_table_1.remarkExtendedTable,
                remark_img_to_jsx_1.default,
                remark_images_1.default,
            ],
            rehypePlugins: [
                mdx_prism_1.default,
                rehype_slug_1.default,
                rehype_autolink_headings_1.default,
                [rehype_prism_plus_1.default, { ignoreMissing: true }],
            ],
        },
    });
    return {
        mdxSource,
        frontMatter: {
            toc,
            wordCount: content.split(/\s+/gu).length,
            readingTime: (0, reading_time_1.default)(content),
            slug: slug || null,
            ...data,
        },
    };
}
exports.getFileBySlug = getFileBySlug;
async function getAllFilesFrontMatter(folder) {
    const prefixPaths = path_1.default.join(root, 'data', folder);
    const files = (0, files_1.default)(prefixPaths);
    const allFrontMatter = [];
    files.forEach((file) => {
        const fileName = file.slice(prefixPaths.length + 1).replace(/\\/g, '/');
        if (path_1.default.extname(fileName) !== '.md' && path_1.default.extname(fileName) !== '.mdx') {
            return;
        }
        const source = fs_1.default.readFileSync(file, 'utf8');
        const { data: frontmatter } = (0, gray_matter_1.default)(source);
        if (frontmatter.draft !== true) {
            allFrontMatter.push({
                ...frontmatter,
                slug: formatSlug(fileName),
                date: frontmatter.publishedAt ? new Date(frontmatter.publishedAt).toISOString() : null,
            });
        }
    });
    return allFrontMatter.sort((a, b) => dateSortDesc(a.date, b.date));
}
exports.getAllFilesFrontMatter = getAllFilesFrontMatter;
function dateSortDesc(a, b) {
    if (a > b)
        return -1;
    if (a < b)
        return 1;
    return 0;
}
exports.dateSortDesc = dateSortDesc;
//# sourceMappingURL=mdx.js.map