import React from 'react'
import { Alert } from '@digitalgarden/core'
import Link from 'next/link'

type Props = { category: string }

const EmptyList: React.VFC<Props> = (category) => {
  return (
    <Alert>
      {category
        ? `Aún no tengo notas de ${category}, sorry 🙈`
        : 'Aún no tengo notas de este tema, sorry 🙈.'}{' '}
      <Link href="/">
        <a className="text-indigo-500  underline">Ir al Inicio</a>
      </Link>
    </Alert>
  )
}

export default EmptyList
