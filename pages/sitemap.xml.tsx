import { getAllFilesFrontMatter } from '../lib/mdx'

const EXTERNAL_DATA_URL = process.env.NEXT_PUBLIC_DOMAIN

function generateSiteMap({
  posts,
  notes,
}: {
  posts: FrontMatter[]
  notes: FrontMatter[]
}) {
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
       .map(
         ({ slug }) =>
           `<url><loc>${`${EXTERNAL_DATA_URL}/blog/${slug}`}</loc></url>`
       )
       .join('')}
     ${notes
       .map(
         ({ slug }) =>
           `<url><loc>${`${EXTERNAL_DATA_URL}/notes/${slug}`}</loc></url>`
       )
       .join('')}
   </urlset>
 `
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }: any) {
  // We make an API call to gather the URLs for our site
  const posts = await getAllFilesFrontMatter('blog')
  const notes = await getAllFilesFrontMatter('notes')

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap({ posts, notes })

  res.setHeader('Content-Type', 'text/xml')
  // we send the XML to the browser
  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}

export default SiteMap
