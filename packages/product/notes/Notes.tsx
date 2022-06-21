import { ParsedUrlQuery } from 'querystring'
import React from 'react'
import EmptyList from './ui/empty-list'
import { NoteList } from './ui/note-list'
import { filterNotes } from './utils'

type Props = {
  notes: FrontMatter[]
  query: ParsedUrlQuery
}

export const Notes: React.VFC<Props> = ({ notes, query }) => {
  const noteList = filterNotes(notes, query)

  return Object.keys(noteList).length < 0 ? (
    <EmptyList category={query.category as string} />
  ) : (
    <NoteList notes={noteList} />
  )
}
