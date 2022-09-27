import { TalkType } from 'data/data'
import format from 'date-fns/format'
import React from 'react'
import { BsPlayFill } from 'react-icons/bs'

interface Props extends TalkType {
  featured?: boolean
}

const TalkCard: React.VFC<Props> = ({
  title,
  link,
  date,
  type,
  image,
  featured,
}) => {
  return (
    <li className={featured ? 'row-start-1 col-start-1 row-span-3' : ''}>
      <a
        href={link}
        target="_blank"
        className={`group flex p-4 border-none rounded-md bg-slate-100/80 hover:bg-slate-100/100 dark:bg-slate-800/90 dark:hover:bg-slate-800/80 transition duration-150 ${
          featured ? 'flex-col' : 'flex-row space-x-2'
        }`}
      >
        <div className="relative rounded-md overflow-hidden">
          <img
            className={`object-cover ${
              featured
                ? 'object-cover'
                : 'relative rounded-md overflow-hidden h-full w-28'
            }`}
            src={image}
            alt={title}
          />
          {type === 'video' && (
            <>
              <div className="absolute top-0 bottom-0 w-full group-hover:bg-black/40 transition"></div>
              <span className="absolute bg-white/50 text-white group-hover:bg-indigo-500 p-2 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition">
                <BsPlayFill />
              </span>
            </>
          )}
        </div>
        <div className="flex flex-col">
          <h3 className={`mt-2 mb-0 ${featured ? 'text-xl' : 'text-base'}`}>
            {title}
          </h3>
          <span className="text-sm text-slate-400">
            {format(new Date(date), 'd MMM yyyy')}
          </span>
        </div>
      </a>
    </li>
  )
}

export default TalkCard
