import React from 'react'
import Link from 'next/link'
import format from 'date-fns/format'
import HomeSection from './HomeSection'

type Props = {
  notes: FrontMatter[]
}

const NotesSection = ({ notes }: Props) => {
  return (
    <HomeSection
      title="Notas Recientes"
      showMoreHref="/notes"
      className="flex flex-col flex-1 space-y-1"
    >
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {notes.map(({ title, publishedAt, slug }: FrontMatter) => (
          <li key={slug}>
            <Link href={`/notes/${slug}`}>
              <a className="flex flex-col py-3 px-5 border-none rounded-md bg-slate-100/80 hover:bg-slate-100/100 dark:bg-slate-800/90 dark:hover:bg-slate-800/80 transition duration-150">
                <span>{title}</span>
                <span className="text-slate-400 text-sm">
                  {format(new Date(publishedAt), 'd MMM yyyy')}
                </span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </HomeSection>
  )
}

export default NotesSection
