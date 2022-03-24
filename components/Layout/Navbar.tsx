import React from 'react'
import { IoIosMoon, IoIosSunny } from 'react-icons/io'
import { useTheme } from 'next-themes'
import Link from 'next/link'

const Navbar: React.VFC = () => {
  const { theme, setTheme } = useTheme()
  return (
    <div className="flex flex-row items-center p-2 md:px-8 w-full max-w-4xl mx-auto">
      <Link href="/">
        <a className="flex items-center">
          <span className="bg-indigo-500 rounded-full w-8 h-8 block mr-8"></span>
        </a>
      </Link>

      <nav className=" flex-1">
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
              // className="text-slate-900 dark:text-slate-50 hover:text-purple-500 dark:hover:text-purple-500"
              className="text-slate-400 dark:text-slate-500 "
            >
              Playground 🚧
            </a>
          </li>
        </ul>
      </nav>
      {theme && (
        <button
          type="button"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="text-2xl dark:text-slate-50"
        >
          {theme === 'dark' ? <IoIosSunny /> : <IoIosMoon />}
        </button>
      )}
    </div>
  )
}

export default Navbar
