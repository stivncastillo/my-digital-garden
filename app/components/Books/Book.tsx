import React from 'react'
import Image from 'next/image'
import { GiRead } from 'react-icons/gi'
import { BookType } from '../../data/data'

const Book = ({ title, author, image, current, link }: BookType) => {
  return (
    <a href={link} target="_blank">
      <div className="relative flex flex-col">
        <Image
          src={image}
          alt="Book"
          width={120}
          height={200}
          layout="responsive"
          className="aspect-auto w-24 object-cover rounded-md hover:scale-110 transition-all duration-75 overflow-hidden"
        />
        <h4 className="text-lg mb-0 mt-2">{title}</h4>
        <div className="flex flex-row items-center space-x-2">
          <span>{author}</span>
        </div>
        {current && (
          <span
            title="Currently reading"
            className="absolute top-1 right-1 bg-indigo-200 dark:bg-yellow-200 text-sm p-2 rounded-full text-indigo-600 dark:text-yellow-600 shadow-lg"
          >
            <GiRead />
          </span>
        )}
      </div>
    </a>
  )
}

export default Book
