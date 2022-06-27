import React from 'react'
import { IoIosMoon, IoIosSunny } from 'react-icons/io'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import Nav from './Nav'
import ThemeButton from '../../Common/Button/ThemeButton'
import Logo from './Logo'

const Navbar: React.VFC = () => {
  const { theme, setTheme } = useTheme()

  const handleChangeTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  return (
    <div className="flex flex-row items-center p-2 md:px-8 w-full max-w-4xl mx-auto">
      <Logo />
      <nav className=" flex-1">
        <Nav />
      </nav>
      {theme && <ThemeButton theme={theme} onClick={handleChangeTheme} />}
    </div>
  )
}

export default Navbar
