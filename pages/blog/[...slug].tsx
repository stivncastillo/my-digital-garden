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
  const { title, summary, image, slug, publishedAt, updatedAt, author } =
    frontMatter
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={summary} />
        <meta name="author" content={author} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={`${author} | ${title}`} />
        <meta name="twitter:description" content={summary} />
        {image && <meta name="twitter:image" content={`${URL}${image}`} />}

        {/* Facebook */}
        <meta property="og:title" content={`${author} | ${title}`} />
        <meta property="og:description" content={summary} />
        {image && <meta property="og:image" content={`${URL}${image}`} />}
        <meta property="og:url" content={`${URL}/blog/${slug}`} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={publishedAt} />
        <meta property="article:modified_time" content={updatedAt} />
        <meta property="article:author" content={author} />
        <meta property="og:locale" content="es-ES" />
      </Head>

      <BlogLayout frontMatter={frontMatter}>
        <MDXRemote {...mdxSource} components={components} />
      </BlogLayout>
    </>
  )
}

export async function getStaticPaths() {
  const posts = await getFiles('blog')

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
  const post = await getFileBySlug('blog', params.slug.join('/'))

  return { props: post }
}
