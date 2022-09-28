import Link from 'next/link'
import React from 'react'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  title: string
  showMoreHref?: string
}

const HomeSection: React.FC<Props> = ({
  children,
  title,
  showMoreHref,
  className,
  ...props
}) => {
  return (
    <section className={`mb-12 ${className}`} {...props}>
      <div className="flex flex-row justify-between items-center mb-2">
        <h2 className="text-3xl font-bold dark:text-slate-100">{title}</h2>

        {showMoreHref && (
          <Link href={showMoreHref}>
            <a className="text-sm underline text-indigo-500 dark:text-amber-400">
              ver más
            </a>
          </Link>
        )}
      </div>

      {children}
    </section>
  )
}

export default HomeSection
