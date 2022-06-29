import React from 'react'
import Head from 'next/head'

import { getAllFilesFrontMatter } from '../lib/mdx'
import { useRouter } from 'next/router'
import {
  filterByCategory,
  groupByKey,
} from '../features/Notes/utils/notesUtils'
import Header from '../features/Notes/components/Header'
import NotesList from '../features/Notes/components/NotesList'

const Notes = ({ notes }: { notes: FrontMatter[] }) => {
  const { query } = useRouter()

  const filteredNotes = filterByCategory(notes, query.category as string)
  const finalNotes = groupByKey(filteredNotes, 'category')

  return (
    <>
      <Head>
        <title>Stiven Castillo | Notes</title>
      </Head>
      <Header />
      <NotesList notes={finalNotes} category={query.category as string} />
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
