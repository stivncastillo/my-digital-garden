"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getServerSideProps = void 0;
const mdx_1 = require("../lib/mdx");
const EXTERNAL_DATA_URL = process.env.NEXT_PUBLIC_DOMAIN;
function generateSiteMap({ posts, notes, }) {
    return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>${EXTERNAL_DATA_URL}</loc>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/about</loc>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/notes</loc>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/blog</loc>
     </url>
     ${posts
        .map(({ slug }) => `<url><loc>${`${EXTERNAL_DATA_URL}/blog/${slug}`}</loc></url>`)
        .join('')}
     ${notes
        .map(({ slug }) => `<url><loc>${`${EXTERNAL_DATA_URL}/notes/${slug}`}</loc></url>`)
        .join('')}
   </urlset>
 `;
}
function SiteMap() {
}
async function getServerSideProps({ res }) {
    const posts = await (0, mdx_1.getAllFilesFrontMatter)('blog');
    const notes = await (0, mdx_1.getAllFilesFrontMatter)('notes');
    const sitemap = generateSiteMap({ posts, notes });
    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
    res.end();
    return {
        props: {},
    };
}
exports.getServerSideProps = getServerSideProps;
exports.default = SiteMap;
//# sourceMappingURL=sitemap.xml.js.map