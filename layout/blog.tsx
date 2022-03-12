import { useRouter } from 'next/router'
import React from 'react'
import { ReadTimeResults } from 'reading-time'

type Props = {
  children: React.ReactNode
  frontMatter: {
    wordCount: number
    readingTime: ReadTimeResults
    slug: any
  }
}

const BlogLayout = ({ children, frontMatter }: Props) => {
  const router = useRouter()
  const slug = router.asPath.replace('/blog', '')
  return (
    <div>
      <p>{slug}</p>
      <p>{frontMatter.readingTime.text}</p>

      {children}
    </div>
  )
}

export default BlogLayout
