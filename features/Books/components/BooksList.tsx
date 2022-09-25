import { BookType } from 'data/data'
import React from 'react'
import Book from './Book'

type Props = {
  books: BookType[]
}

const BooksList = ({ books }: Props) => {
  return (
    <div className="grid gap-4 grid-cols-2 md:grid-cols-4 lg:gap-6">
      {books.map((book, index) => (
        <Book key={`book-${index}`} {...book} />
      ))}
    </div>
  )
}

export default BooksList
