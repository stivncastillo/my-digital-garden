import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SocialList from '../components/Social/SocialList'

const About = () => {
  return (
    <>
      <Head>
        <title>Stiven Castillo | About me</title>
        <meta
          name="description"
          content="Stiven Castillo es un desarrollador frontend y diseñador de interfaces de usuario, trabaja en Elenas app."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <figure className="flex flex-col-reverse justify-start mb-2">
        <div className="flex flex-col flex-1 space-y-4 mt-4">
          <p className="text-slate-500 dark:text-slate-300 font-thin text-xl">
            Frontend developer at Elenas. Begginer writer, speaker, UI Designer
            and Tattoo entusiast, based in Armenia, Colombia.
          </p>

          <p className="text-slate-500 dark:text-slate-300 font-thin">
            Desde que aprendí a programar en el colegio mi pasión por crear
            sistemas ha aumentado con el paso del tiempo. Inicie estudiando
            Sistemas pero luego comprendí que mi pasión era trabajar en el lado
            del diseño de interfaces y experiencia de usuario. Desde entonces me
            he preparado para diseñar expeciencias de usuario en aplicaciones
            móviles y web como desarrollador Frontend.
          </p>

          <p className="text-slate-500 dark:text-slate-300 font-thin">
            En mis tiempos libres y para salir de la rutina me dedico al arte
            del tattoo (
            <a
              className="text-sm underline text-indigo-500 dark:text-amber-400"
              href="https://instagram.com/mecastasis"
              target="_blank"
            >
              @mecastasis
            </a>
            ), algo de carpintería y a dedicarle tiempo a mi hijo :).
          </p>

          <p className="text-slate-500 dark:text-slate-300 font-thin">
            Este sitio es mi casa en línea y lo utilizo para compartir
            conocimiento, notas y pensamientos sobre desarrollo y diseño
            web/movil, además, dónde mantengo un registro de mi trabajo y cosas
            que encuentro en la red que me ayuda en mi día a día profesional.
          </p>
        </div>
        <div className="w-24">
          <Image
            src="/assets/images/profile-pic.png"
            alt="Profile"
            height={800}
            width={800}
            className="rounded-full"
          />
        </div>
      </figure>

      <div className="my-4">
        {/* Social */}
        <SocialList />
      </div>
    </>
  )
}

export default About
