"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const document_1 = __importStar(require("next/document"));
class MyDocument extends document_1.default {
    render() {
        return (React.createElement(document_1.Html, { prefix: "og: https://ogp.me/ns#", className: "scroll-smooth" },
            React.createElement(document_1.Head, null,
                React.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
                React.createElement("meta", { name: "keywords", content: "learning, code posts, notes, tutorials, web development, mobile development" }),
                React.createElement("meta", { name: "theme-color", content: "#6366F1" }),
                React.createElement("meta", { name: "google", content: "notranslate" }),
                React.createElement("meta", { name: "robots", content: "all" }),
                React.createElement("script", { dangerouslySetInnerHTML: {
                        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}');`,
                    } }),
                React.createElement("link", { href: "https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@300;400;500;700&family=Open+Sans:wght@300;400;700&display=swap", rel: "stylesheet" }),
                React.createElement("link", { rel: "manifest", href: "/manifest.json" })),
            React.createElement("body", null,
                React.createElement("noscript", { dangerouslySetInnerHTML: {
                        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
                    } }),
                React.createElement(document_1.Main, null),
                React.createElement(document_1.NextScript, null))));
    }
}
exports.default = MyDocument;
//# sourceMappingURL=_document.js.map