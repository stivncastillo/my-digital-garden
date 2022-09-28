import React from 'react'

const Header: React.VFC = () => {
  return (
    <>
      <h1 className="text-3xl mb-2">Notas - Lo que hoy aprendí</h1>

      <p className="text-slate-500 dark:text-slate-300 font-thin text-xl mb-8">
        Este es un wiki personal de cosas (notas) interesantes que he recogido
        mientras trabajo en la web, posteriormente estas notas esperan en
        convertirse en un post y quizá más.
      </p>
      <p className="text-sm text-slate-400 dark:text-slate-500">
        Disfutenlo y cuidado me pisa el césped!
      </p>
    </>
  )
}

export default Header
