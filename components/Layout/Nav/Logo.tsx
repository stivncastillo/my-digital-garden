import Link from 'next/link'
import React from 'react'

const Logo: React.VFC = () => {
  return (
    <Link href="/">
      <a className="flex items-center" aria-label="Home">
        <span className="bg-indigo-500 rounded-full w-8 h-8 block mr-8"></span>
      </a>
    </Link>
  )
}

export default Logo
