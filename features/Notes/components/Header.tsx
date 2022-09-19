import React from 'react'

const Header: React.VFC = () => {
  return (
    <>
      <h1 className="text-3xl mb-2">Notas - Lo que hoy aprendí</h1>

      <p className="text-slate-500 dark:text-slate-300 font-thin text-xl mb-8">
        Esta es una colección de notas cortas de cosas que he aprendido desde
        nuevas técnologias, snippets hasta ideas del día.
      </p>
      <p className="text-sm text-slate-400 dark:text-slate-500">
        Disfutenlo y cuidado me pisa el césped!
      </p>
    </>
  )
}

export default Header
