import Link from 'next/link'
import React from 'react'
import { Url } from 'url'

type Props = {
  children: React.ReactNode
  href: string
}

const NavLink = ({ children, href }: Props) => {
  return (
    <li>
      <Link href={href}>
        <a
          className={`cursor-pointer relative before:bg-indigo-500 before:content-[''] before:absolute before:w-full before:h-1 before:rounded-sm before:bottom-0 before:left-0 before:origin-right before:scale-x-0 before:transition before:duration-150 before:ease-out hover:before:origin-left hover:before:scale-x-100 text-slate-900 dark:text-slate-50 p-2`}
        >
          {children}
        </a>
      </Link>
    </li>
  )
}

export default NavLink
