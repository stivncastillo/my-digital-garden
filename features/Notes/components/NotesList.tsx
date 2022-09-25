import Link from 'next/link'
import React from 'react'
import Alert from 'components/Common/Alert'
import NotesCard from './NotesCard'
import { GroupByType } from '../types'
import NotesCategory from './NotesCategory'
interface Props {
  notes: GroupByType
  category: string
}

const NotesList: React.VFC<Props> = ({ notes: finalNotes, category }) => {
  if (!Object.keys(finalNotes).length) {
    return (
      <Alert>
        {category
          ? `Aún no tengo notas de ${category}, sorry 🙈`
          : 'Aún no tengo notas de este tema, sorry 🙈.'}{' '}
        <Link href="/">
          <a className="text-indigo-500  underline">Ir al Inicio</a>
        </Link>
      </Alert>
    )
  }

  return (
    <>
      {finalNotes &&
        Object.keys(finalNotes).map((category: string) => {
          const notes = finalNotes[category]

          return (
            <NotesCategory name={category} key={`category-${category}`}>
              {notes.map((frontMatter: FrontMatter, index) => (
                <div key={`note-${index}`} className="flex flex-col px-4">
                  <NotesCard data={frontMatter} />
                </div>
              ))}
            </NotesCategory>
          )
        })}
    </>
  )
}

export default NotesList
