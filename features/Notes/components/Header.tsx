import React from 'react'

const Header: React.VFC = () => {
  return (
    <>
      <h1 className="text-3xl mb-2">Notes</h1>

      <p className="text-slate-500 dark:text-slate-300 font-thin text-xl mb-4">
        Bienvenidos a mis notas, recortes y bookmarks que adornan mi Digital
        Garden. Este espacio lo uso para anotar y compartir cosas que me ayudan
        en mi día a día como desarrollador.
      </p>
      <p className="text-sm text-slate-400 dark:text-slate-500">
        Disfutenlo y cuidado me pisa el césped!
      </p>
    </>
  )
}

export default Header
