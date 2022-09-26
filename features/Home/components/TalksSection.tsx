import React from 'react'
import HomeSection from './HomeSection'
import { BsPlayFill } from 'react-icons/bs'

type Props = {}

const TalksSection = (props: Props) => {
  return (
    <HomeSection
      title="Últimos Talks"
      className="flex flex-col flex-1 space-y-1 mb-8"
    >
      <ul className="grid grid-flow-col grid-cols-1 md:grid-cols-2 md:grid-rows-3 gap-2">
        <li className="row-start-1 col-start-1 row-span-3">
          <a
            href="https://slides.com/stivncastillo/mama-quiero-ser-programador"
            target="_blank"
            className="flex flex-col p-4 border-none rounded-md bg-slate-100/80 hover:bg-slate-100/100 dark:bg-slate-800/90 dark:hover:bg-slate-800/80 transition duration-150 group"
          >
            <div className="relative rounded-md overflow-hidden">
              <img
                className="object-cover"
                src="/assets/images/talks/mom.png"
                alt="Mamá quiero ser desarrollador"
              />

              <div className="absolute top-0 bottom-0 w-full group-hover:bg-black/40"></div>

              <span className="absolute bg-white/50 text-white group-hover:bg-indigo-500 p-2 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <BsPlayFill />
              </span>
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl mt-2 mb-0">
                Mamá quiero ser desarrollador
              </h3>
              <span className="text-sm text-slate-400">Jul 2022</span>
            </div>
          </a>
        </li>
        <li>
          <a
            href="https://youtu.be/mfIcNZnLnqM"
            target="_blank"
            className="group flex flex-row space-x-2 p-4 border-none rounded-md bg-slate-100/80 hover:bg-slate-100/100 dark:bg-slate-800/90 dark:hover:bg-slate-800/80 transition duration-150"
          >
            <div className="relative rounded-md overflow-hidden h-full w-28">
              <img
                className="object-cover"
                src="/assets/images/talks/tailwind.png"
                alt="Mamá quiero ser desarrollador"
              />
              <div className="absolute top-0 bottom-0 w-full group-hover:bg-black/40"></div>

              <span className="absolute bg-white/50 text-white group-hover:bg-indigo-500 p-1 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <BsPlayFill />
              </span>
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl mt-2 mb-0">Tailwindcss Workshop</h3>
              <span className="text-sm text-slate-400">Apr 2021</span>
            </div>
          </a>
        </li>
      </ul>
    </HomeSection>
  )
}

export default TalksSection
