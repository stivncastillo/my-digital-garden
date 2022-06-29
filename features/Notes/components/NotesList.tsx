import Link from 'next/link'
import React from 'react'
import { MdFolderOpen } from 'react-icons/md'
import Alert from '../../../components/Common/Alert'
import NotesCard from '../../../components/Notes/NotesCard'
import { GroupByType } from '../types'

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
        Object.keys(finalNotes).map((category: string, index: number) => {
          const notes = finalNotes[category]

          return (
            <div key={`category-${index}`} className="mb-4">
              <div className="flex flex-row items-center space-x-2 mb-2">
                <div className="text-2xl">
                  <MdFolderOpen />
                </div>
                <h3 className="text-2xl mb-0 mt-0">{category}</h3>
              </div>
              {notes.map((frontMatter: FrontMatter, index) => (
                <div key={`note-${index}`} className="flex flex-col px-4">
                  <NotesCard data={frontMatter} />
                </div>
              ))}
            </div>
          )
        })}
    </>
  )
}

export default NotesList
