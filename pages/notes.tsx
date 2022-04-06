import React, { useEffect } from 'react'
import Head from 'next/head'

import { getAllFilesFrontMatter } from '../lib/mdx'
import NotesCard from '../components/Notes/NotesCard'
import { MdFolderOpen } from 'react-icons/md'
import { groupBy } from '../utils/notes'
import { useRouter } from 'next/router'
import Link from 'next/link'

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

      <h1 className="text-3xl mb-6">Notes</h1>
      {!Object.keys(finalNotes).length && (
        <p>
          Notes not found.{' '}
          <Link href="/">
            <a className="text-indigo-500 dark:text-yellow-500">Go to Home</a>
          </Link>
        </p>
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
                <h3 className="text-2xl mb-0">{category}</h3>
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
