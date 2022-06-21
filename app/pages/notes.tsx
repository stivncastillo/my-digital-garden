import React from 'react'
import Head from 'next/head'
import { Notes as NotesList } from '@digitalgarden/product-notes'

import { getAllFilesFrontMatter } from '../lib/mdx'
import { useRouter } from 'next/router'

const Notes = ({ notes }: { notes: FrontMatter[] }) => {
  const { query } = useRouter()

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

      <NotesList notes={notes} query={query} />
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
