import React from 'react'

type Props = {
  children: React.ReactNode
  name: string
  href: string
}

const SocialItem = ({ children, name, href }: Props) => {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        className="text-slate-500 dark:dark:text-slate-300 hover:text-slate-700 dark:hover:text-slate-500 font-bold flex flex-row items-center space-x-1"
        rel="noreferrer"
      >
        {children}
        <span>{name}</span>
      </a>
    </li>
  )
}

export default SocialItem
