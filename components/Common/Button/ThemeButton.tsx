import React from 'react'
import { IoIosMoon, IoIosSunny } from 'react-icons/io'

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  theme: 'dark' | 'light'
}

const ThemeButton = ({ onClick, theme }: Props) => {
  return (
    <button
      type="button"
      aria-label="dark mode toggle"
      onClick={onClick}
      className="text-2xl dark:text-slate-50"
    >
      {theme === 'dark' ? <IoIosSunny /> : <IoIosMoon />}
    </button>
  )
}

export default ThemeButton
