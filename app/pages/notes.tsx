import React from 'react'
import Head from 'next/head'

import { getAllFilesFrontMatter } from '../lib/mdx'
import NotesCard from '../components/Notes/NotesCard'
import { MdFolderOpen } from 'react-icons/md'
import { groupBy } from '../utils/notes'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Alert from '../components/Common/Alert'

const Notes = ({ notes }: { notes: FrontMatter[] }) => {
  const { query } = useRouter()

  const filteredNotes = notes
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .filter((note) => {
      if (query.category) {
        return note.category === query.category
      }
      return true
    })

  const finalNotes = groupBy(filteredNotes, 'category')

  return (
    <>
      <Head>
        <title>Stiven Castillo | Notes</title>
      </Head>

      <h1 className="text-3xl mb-2">Notes</h1>
      <p className="text-slate-500 dark:text-slate-300 font-thin text-xl mb-4">
        Bienvenidos a mis notas, recortes y bookmarks que adornan mi Digital
        Garden. Este espacio lo uso para anotar y compartir cosas que me ayudan
        en mi día a día como desarrollador.
      </p>
      <p className="text-sm text-slate-400 dark:text-slate-500">
        Disfutenlo y cuidado me pisa el césped!
      </p>

      {!Object.keys(finalNotes).length && (
        <Alert>
          {query.category
            ? `Aún no tengo notas de ${query.category}, sorry 🙈`
            : 'Aún no tengo notas de este tema, sorry 🙈.'}{' '}
          <Link href="/">
            <a className="text-indigo-500  underline">Ir al Inicio</a>
          </Link>
        </Alert>
      )}

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

export async function getStaticProps() {
  const notes = await getAllFilesFrontMatter('notes')

  return {
    props: {
      notes,
    },
  }
}

export default Notes
