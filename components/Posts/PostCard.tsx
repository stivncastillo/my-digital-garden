import React from 'react'
import Image from 'next/image'
import { IoIosBookmark } from 'react-icons/io'

type Props = {
  pinned?: boolean
}

const PostCard = ({ pinned }: Props) => {
  return (
    <a
      href="#"
      className="group mb-4 hover:bg-slate-50 dark:hover:bg-slate-800 hover:rounded-lg"
    >
      <article className="flex flex-row space-x-4 p-4">
        <div className="flex flex-col items-center">
          <div
            className={`flex flex-col ${
              pinned
                ? 'bg-indigo-100 dark:bg-yellow-100 group-hover:bg-indigo-200 dark:group-hover:bg-yellow-200 text-indigo-500 dark:text-yellow-600'
                : 'bg-slate-100 group-hover:bg-slate-200'
            }  rounded-md py-3 px-4 items-center`}
          >
            <span className="font-thin font-merri leading-3 text-xs mb-1 dark:text-slate-900">
              OCT
            </span>
            <span className="font-bold font-merri leading-3 text-xl dark:text-slate-900">
              12
            </span>
          </div>

          {pinned && (
            <span className="text-indigo-500 dark:text-yellow-500 mt-2">
              <IoIosBookmark size={20} />
            </span>
          )}
        </div>

        <div className="flex-1">
          <h3 className="text-2xl font-bold dark:text-slate-100">
            Design system as knowledge graphs
          </h3>
          <p className="text-slate-500 font-thin dark:text-slate-400">
            Imagining what design system documentation might look like if we
            approached the system as a knowledge graph rather than.
          </p>
        </div>

        <div className="hidden md:block w-24">
          <Image
            objectFit="cover"
            src="/assets/images/tree.jpg"
            alt="Tree"
            width={96}
            height={96}
            className="aspect-square object-cover rounded-md"
          />
        </div>
      </article>
    </a>
  )
}

export default PostCard
