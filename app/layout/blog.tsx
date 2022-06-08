import React from 'react'
import Divider from '../components/Common/Divider'
import format from 'date-fns/format'

type Props = {
  children: React.ReactNode
  frontMatter: FrontMatter
}

const BlogLayout = ({ children, frontMatter }: Props) => {
  const { title, readingTime, publishedAt, summary } = frontMatter
  const date = format(new Date(publishedAt), 'MMMM dd, yyyy')
  return (
    <>
      <header className="mb-4">
        <h1 className="mb-2">{title}</h1>
        <p className="mb-8 text-xl text-slate-500 dark:text-slate-400 leading-relaxed">
          {summary}
        </p>
        <div className="flex flex-row justify-between items-end">
          <span className="text-sm text-slate-400">Stiven Castillo</span>
          <div className="flex flex-row items-center space-x-2">
            <span className="dark:text-slate-500 text-slate-400 text-xs">
              {readingTime.text}
            </span>
            <span className="text-slate-400 text-sm">{date}</span>
          </div>
        </div>
        <Divider />
      </header>

      <div id="blog-layout">{children}</div>
    </>
  )
}

export default BlogLayout
