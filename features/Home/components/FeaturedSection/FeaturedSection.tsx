import React from 'react'
import { FaBoxOpen, FaLaptopCode } from 'react-icons/fa'
import { ImPencil } from 'react-icons/im'
import DefaultCard from './Cards/DefaultCard'
import BookCard from './Cards/BookCard'
import HomeSection from 'home/components/HomeSection'

const FeaturedSection: React.VFC = () => {
  return (
    <HomeSection title="Destacado">
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 md:grid-rows-2 gap-6">
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
          title="El despertar del leviatán"
          author="James S.A. Corey"
          image="/assets/images/books/expanse1.jpg"
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
    </HomeSection>
  )
}

export default FeaturedSection
