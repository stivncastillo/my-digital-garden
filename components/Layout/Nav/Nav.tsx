import React from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import ThemeButton from '../../Common/Button/ThemeButton'
import NavLink from './NavLink'

const Nav: React.VFC = () => {
  const { theme, setTheme } = useTheme()

  const handleChangeTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  return (
    <ul className="flex space-x-4 justify-end">
      <NavLink href="/">Home</NavLink>
      <NavLink href="/blog">Blog</NavLink>
      <NavLink href="/notes">Notes</NavLink>
      <li className="flex items-center">
        {theme && <ThemeButton theme={theme} onClick={handleChangeTheme} />}
      </li>
    </ul>
  )
}

export default Nav
