import React from 'react'
import BookCard from './Cards/BookCard'
import HomeSection from 'home/components/HomeSection'

const FeaturedSection: React.VFC = () => {
  return (
    <HomeSection title="Destacado">
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-4">
        <BookCard
          title="El despertar del leviatán"
          author="James S.A. Corey"
          image="/assets/images/books/expanse1.jpg"
        />
      </div>
    </HomeSection>
  )
}

export default FeaturedSection
