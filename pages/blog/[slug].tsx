import { getFiles, getFileBySlug } from '../../lib/mdx'
import BlogLayout from '../../layout/blog'
import { MDXComponents } from '../../components/MDXComponents'
import { MDXRemote } from 'next-mdx-remote'
import Head from 'next/head'

interface Props {
  mdxSource: any
  frontMatter: FrontMatter
}

const components = { ...MDXComponents }

export default function Blog({ mdxSource, frontMatter }: Props) {
  const { title } = frontMatter
  return (
    <>
      <Head>
        <title>{title}</title>
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
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ''),
      },
    })),
    fallback: false,
  }
}

type ParamsType = {
  slug: string
}

export async function getStaticProps({ params }: { params: ParamsType }) {
  const post = await getFileBySlug('blog', params.slug)

  return { props: post }
}
