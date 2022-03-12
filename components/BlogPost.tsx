import Link from 'next/link'
import React from 'react'
import { ReadTimeResults } from 'reading-time'

type Props = {
  wordCount: number
  readingTime: ReadTimeResults
  slug: any
  title: string
  publishedAt: string
}

const BlogPost = (props: Props) => {
  console.log('🚀 ~ file: BlogPost.tsx ~ line 6 ~ BlogPost ~ props', props)
  return <Link href={`blog/${props.slug}`}>{props.title}</Link>
}

export default BlogPost
