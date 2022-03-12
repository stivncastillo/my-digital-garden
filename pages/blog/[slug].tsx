import { getFiles, getFileBySlug } from '../../lib/mdx'
import BlogLayout from '../../layout/blog'
import { MDXComponents } from '../../components/MDXComponents'
import { MDXRemote } from 'next-mdx-remote'
import { ReadTimeResults } from 'reading-time'

interface Props {
  mdxSource: any
  frontMatter: {
    wordCount: number
    readingTime: ReadTimeResults
    slug: any
  }
}

const components = { ...MDXComponents }

export default function Blog({ mdxSource, frontMatter }: Props) {
  return (
    <BlogLayout frontMatter={frontMatter}>
      <MDXRemote {...mdxSource} components={components} />
    </BlogLayout>
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
