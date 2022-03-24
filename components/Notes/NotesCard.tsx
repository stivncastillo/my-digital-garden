import format from 'date-fns/format'
import Link from 'next/link'
import React from 'react'

type Props = {
  data: FrontMatter
}

const NotesCard = ({ data }: Props) => {
  const { title, publishedAt, slug, summary } = data
  const formattedDate = publishedAt.replace(/-/g, '/')
  const date = format(new Date(formattedDate), 'MMM yyyy')

  return (
    <Link href={`/notes/${slug}`}>
      <a className="flex flex-row justify-between items-center py-2 mb-2 w-full border-b border-dashed border-slate-200 dark:border-slate-700">
        <div>
          <h5>{title}</h5>
          <p className="text-slate-400 dark:text-slate-500 font-thin">
            {summary}
          </p>
        </div>

        <span className="text-slate-500">{date}</span>
      </a>
    </Link>
  )
}

export default NotesCard
