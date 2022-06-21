"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const unist_util_visit_1 = require("unist-util-visit");
const image_size_1 = __importDefault(require("image-size"));
const fs_1 = __importDefault(require("fs"));
function remarkImgToJsx() {
    return (tree) => {
        (0, unist_util_visit_1.visit)(tree, (node) => node.type === 'paragraph' && node.children.some((n) => n.type === 'image'), (node) => {
            const imageNode = node.children.find((n) => n.type === 'image');
            if (fs_1.default.existsSync(`${process.cwd()}/public${imageNode.url}`)) {
                const dimensions = (0, image_size_1.default)(`${process.cwd()}/public${imageNode.url}`);
                (imageNode.type = 'mdxJsxFlowElement'),
                    (imageNode.name = 'Image'),
                    (imageNode.attributes = [
                        { type: 'mdxJsxAttribute', name: 'alt', value: imageNode.alt },
                        { type: 'mdxJsxAttribute', name: 'src', value: imageNode.url },
                        { type: 'mdxJsxAttribute', name: 'width', value: dimensions.width },
                        { type: 'mdxJsxAttribute', name: 'height', value: dimensions.height },
                    ]);
                node.type = 'div';
                node.children = [imageNode];
            }
        });
    };
}
exports.default = remarkImgToJsx;
//# sourceMappingURL=remark-img-to-jsx.js.map