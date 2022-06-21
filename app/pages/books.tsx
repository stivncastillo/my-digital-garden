import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { Book } from '@digitalgarden/core'

import { books, BookType } from '../data/data'

export const getStaticProps = async () => {
  return {
    props: {
      bookList: books,
    },
  }
}

interface Props {
  bookList: BookType[]
}

const Books = ({ bookList }: Props) => {
  return (
    <>
      <Head>
        <title>Stiven Castillo | Books</title>
      </Head>
      <div className="mb-6">
        <h1 className="text-3xl">Books</h1>
        <p className="text-slate-500 dark:text-slate-300 font-thin text-xl">
          Algunos excelentes libros que he tenido la oportunidad de encontrarme.
        </p>
      </div>

      <div className="grid gap-4 grid-cols-2 md:grid-cols-4 lg:gap-6">
        {bookList.map((book, index) => (
          <Book key={`book-${index}`} {...book} />
        ))}
      </div>
    </>
  )
}

export default Books
