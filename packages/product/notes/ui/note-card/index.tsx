import React from 'react'
import Link from 'next/link'
import { formatDate } from '../../utils'

type Props = {
  data: FrontMatter
}

export const NoteCard = ({
  data: { title, publishedAt, slug, summary },
}: Props) => {
  const date = formatDate(publishedAt)

  return (
    <Link href={`/notes/${slug}`}>
      <a className="flex flex-row justify-between items-center py-2 mb-2 w-full border-b border-dashed border-slate-200 dark:border-slate-700">
        <div>
          <h4 className="mb-0 mt-0">{title}</h4>
          <p className="text-slate-400 dark:text-slate-500 font-thin">
            {summary}
          </p>
        </div>

        <span className="text-slate-500">{date}</span>
      </a>
    </Link>
  )
}
