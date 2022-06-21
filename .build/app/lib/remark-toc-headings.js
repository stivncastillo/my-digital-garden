"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unist_util_visit_1 = require("unist-util-visit");
const github_slugger_1 = require("github-slugger");
const mdast_util_to_string_1 = require("mdast-util-to-string");
function remarkTocHeadings(options) {
    return (tree) => (0, unist_util_visit_1.visit)(tree, 'heading', (node, index, parent) => {
        const textContent = (0, mdast_util_to_string_1.toString)(node);
        options.exportRef.push({
            value: textContent,
            url: '#' + (0, github_slugger_1.slug)(textContent),
            depth: node.depth,
        });
    });
}
exports.default = remarkTocHeadings;
//# sourceMappingURL=remark-toc-headings.js.map