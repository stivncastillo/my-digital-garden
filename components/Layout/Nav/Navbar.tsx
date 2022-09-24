import React from 'react'
import Breadcrumbs from './Breadcrumbs/Breadcrumbs'
import Nav from './Nav'

const Navbar: React.VFC = () => {
  return (
    <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row items-center p-2 md:px-8 md:py-4 w-full max-w-4xl mx-auto">
      <Breadcrumbs />
      <nav className="flex-1">
        <Nav />
      </nav>
    </div>
  )
}

export default Navbar
