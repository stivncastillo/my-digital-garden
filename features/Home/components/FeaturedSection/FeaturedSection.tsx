import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { FaBoxOpen, FaLaptopCode } from 'react-icons/fa'
import { ImPencil } from 'react-icons/im'
import DefaultCard from './Cards/DefaultCard'
import BookCard from './Cards/BookCard'

const FeaturedSection: React.VFC = () => {
  return (
    <section>
      <div className="flex flex-row justify-between items-center mb-4">
        <h2 className="text-3xl font-bold dark:text-slate-100">Destacado</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 md:grid-rows-2 gap-6 px-2 md:px-4">
        <DefaultCard
          color="default"
          title="Code"
          description="Snnipets, notas y tricks útiles para el desarrollo web/móvil"
          href="/notes?category=Code"
          icon={FaLaptopCode}
        />

        <DefaultCard
          color="green"
          title="UI Design"
          description="Patrones de diseño, design systems, bookmarks, posts
          relacionados, etc."
          href="/notes?category=Design"
          icon={ImPencil}
        />

        <BookCard
          title="Atomic Habits"
          author="James Clear"
          image="/assets/images/books/atomic.jpg"
        />

        <DefaultCard
          color="yellow"
          title="Misc"
          description="Herramientas, apps, librerías, frameworks, setups, comunidades
          web, etc."
          href="/notes?category=Misc"
          icon={FaBoxOpen}
        />
      </div>
    </section>
  )
}

export default FeaturedSection
