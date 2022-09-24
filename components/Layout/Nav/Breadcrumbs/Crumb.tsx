import React from 'react'
import Link from 'next/link'
import Typewriter from 'typewriter-effect'

type Props = {
  text: string
  href: string
  isLast: boolean
}

function Crumb({ text, href, isLast = false }: Props) {
  if (isLast) {
    if (text === '~/') return <span>{text}</span>
    return (
      <Typewriter
        options={{
          strings: text,
          autoStart: true,
          loop: false,
        }}
      />
    )
  }

  return (
    <Link href={href}>
      <a>{text}</a>
    </Link>
  )
}

export default Crumb
