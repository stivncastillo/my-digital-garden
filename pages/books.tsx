import Head from 'next/head'
import React from 'react'

import { books, BookType } from 'data/data'
import Header from 'books/components/Header'
import BooksList from 'books/components/BooksList'

interface Props {
  bookList: BookType[]
}

const Books = ({ bookList }: Props) => {
  return (
    <>
      <Head>
        <title>Stiven Castillo | Books</title>
      </Head>
      <Header />
      <BooksList books={bookList} />
    </>
  )
}

export const getStaticProps = async () => {
  return {
    props: {
      bookList: books,
    },
  }
}

export default Books
