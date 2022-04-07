import { getFileBySlug, getFiles, formatSlug } from '../../lib/mdx'
import BlogLayout from '../../layout/blog'
import { MDXComponents } from '../../components/MDXComponents'
import { MDXRemote } from 'next-mdx-remote'
import Head from 'next/head'

interface Props {
  mdxSource: any
  frontMatter: FrontMatter
}

const components = { ...MDXComponents }
const URL = process.env.NEXT_PUBLIC_DOMAIN

export default function Blog({ mdxSource, frontMatter }: Props) {
  const { title, summary, image, slug } = frontMatter
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={summary} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={`Stiven Castillo | ${title}`} />
        <meta name="twitter:description" content={summary} />
        {image && <meta name="twitter:image" content={`${URL}${image}`} />}

        {/* Facebook */}
        <meta property="og:title" content={`Stiven Castillo | ${title}`} />
        <meta property="og:description" content={summary} />
        {image && <meta name="og:image" content={`${URL}${image}`} />}
        <meta property="og:url" content={`${URL}/notes/${slug}`} />
      </Head>

      <BlogLayout frontMatter={frontMatter}>
        <MDXRemote {...mdxSource} components={components} />
      </BlogLayout>
    </>
  )
}

export async function getStaticPaths() {
  const posts = await getFiles('notes')

  return {
    paths: posts.map((p: string) => ({
      params: {
        slug: formatSlug(p).split('/'),
      },
    })),
    fallback: false,
  }
}

type ParamsType = {
  slug: [string]
}

export async function getStaticProps({ params }: { params: ParamsType }) {
  const post = await getFileBySlug('notes', params.slug.join('/'))

  return { props: post }
}
