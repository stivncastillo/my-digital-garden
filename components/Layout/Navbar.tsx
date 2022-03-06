import React from 'react'
import { IoIosMoon, IoIosSunny } from 'react-icons/io'
import { useTheme } from 'next-themes'

const Navbar: React.VFC = () => {
  const { theme, setTheme } = useTheme()
  return (
    <div className="flex flex-row items-center p-2 md:px-8 w-full max-w-4xl mx-auto">
      <span className="bg-indigo-500 rounded-full w-8 h-8 block mr-8"></span>
      <nav className=" flex-1">
        <ul className="flex space-x-4">
          <li>
            <a
              href="#"
              className="text-slate-900 dark:text-slate-50 hover:text-orange-400 hover:font-bold"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-slate-900 dark:text-slate-50 hover:text-green-500 hover:font-bold"
            >
              Notes
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-slate-900 dark:text-slate-50 hover:text-purple-500 hover:font-bold"
            >
              Playground
            </a>
          </li>
        </ul>
      </nav>

      <button
        type="button"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="text-2xl dark:text-slate-50"
      >
        {theme === 'dark' ? <IoIosSunny /> : <IoIosMoon />}
      </button>
    </div>
  )
}

export default Navbar
