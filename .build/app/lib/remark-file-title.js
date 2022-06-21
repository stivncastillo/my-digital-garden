"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unist_util_visit_1 = require("unist-util-visit");
function default_1(options) {
    return (tree) => (0, unist_util_visit_1.visit)(tree, 'code', (node, index, parent) => {
        const nodeMeta = (node.meta || '');
        const tag = nodeMeta.match(/filename\s*=\s*([\S\s]+)/gi);
        const filenameMatch = tag ? tag[0].match(/\{(.*?)\}/gi)[0] : null;
        const filename = filenameMatch ? filenameMatch.replace('{', '').replace('}', '') : null;
        if (!filename) {
            return;
        }
        const className = 'remark-code-title';
        const filenameNode = {
            type: 'mdxJsxFlowElement',
            name: 'span',
            attributes: [
                {
                    type: 'mdxJsxAttribute',
                    name: 'className',
                    value: className
                }
            ],
            children: [{ type: 'text', value: filename }],
            data: { _mdxExplicitJsx: true }
        };
        tree.children.splice(index + 1, 0, filenameNode);
    });
}
exports.default = default_1;
//# sourceMappingURL=remark-file-title.js.map