import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  image: string
  imageHeight?: number
  imageWidth?: number
  title: string
  author: string
}

const BookCard: React.VFC<Props> = ({
  image,
  imageWidth = 100,
  imageHeight = 142,
  title,
  author,
}) => {
  return (
    <div className="bg-slate-100 dark:bg-slate-600 rounded-xl m-h-56 p-4 flex flex-col space-y-4 justify-between">
      <div className="flex flex-row items-end space-x-4">
        <Image
          src={image}
          alt="Book"
          width={imageWidth}
          height={imageHeight}
          className="aspect-auto object-cover rounded-md"
        />
        <div className="">
          <span className="text-slate-400 dark:text-slate-200 font-thin text-sm">
            leído recientemente
          </span>
          <h4 className="text-xl font-bold text-slate-700 dark:text-white">
            {title}
          </h4>
          <span className="text-slate-400 dark:text-slate-200 font-thin text-sm">
            by {author}
          </span>
        </div>
      </div>

      <Link href="/books">
        <a className="block py-2 px-4 bg-indigo-500 dark:bg-amber-500 text-white text-center text-sm font-bold rounded-md">
          ¿Qué estoy leyendo?
        </a>
      </Link>
    </div>
  )
}

export default BookCard
