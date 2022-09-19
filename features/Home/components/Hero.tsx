import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Hero: React.VFC = () => {
  return (
    <figure className="flex flex-col-reverse md:flex-row justify-start mb-2">
      <div className="flex flex-col flex-1 space-y-4 mt-4 md:mt-0">
        <h1 className="text-4xl dark:text-white">Stiven Castillo</h1>

        <p className="text-slate-500 dark:text-slate-300 font-thin text-xl">
          Frontend developer at{' '}
          <a className="link" target="_blank" href="https://elenas.co/co/">
            Evolve
          </a>
          . Begginer writer, speaker, UI Designer and Tattoo entusiast, based in
          Cali, Colombia.
        </p>
        <Link href="/about">
          <a className="link text-sm">Acerca de mi</a>
        </Link>
      </div>
      <div className="w-24 md:w-36">
        <Image
          src="/assets/images/profile.jpg"
          alt="Profile"
          height={800}
          width={800}
          className="rounded-full"
        />
      </div>
    </figure>
  )
}

export default Hero
