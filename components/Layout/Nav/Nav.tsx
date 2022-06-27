import Link from 'next/link'
import React from 'react'

const Nav: React.VFC = () => {
  return (
    <ul className="flex space-x-4">
      <li>
        <Link href="/blog">
          <a className="text-slate-900 dark:text-slate-50 hover:text-orange-400 dark:hover:text-orange-400">
            Blog
          </a>
        </Link>
      </li>
      <li>
        <Link href="/notes">
          <a className="text-slate-900 dark:text-slate-50 hover:text-green-500 dark:hover:text-green-500">
            Notes
          </a>
        </Link>
      </li>
      <li>
        <a
          href="#"
          title="Coming soon"
          aria-disabled="true"
          className="text-slate-400 dark:text-slate-500 "
        >
          Playground 🚧
        </a>
      </li>
    </ul>
  )
}

export default Nav
