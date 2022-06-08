// @ts-ignore
import React from 'react'

// Table Of Contents

interface Props {
  toc: TocType[]
  indentDepth: number
  fromHeading: number
  toHeading: number
  asDisclosure: boolean
  exclude: string
}

const Toc = ({
  toc,
  indentDepth = 3,
  fromHeading = 1,
  toHeading = 6,
  asDisclosure = false,
  exclude = '',
}: Props) => {
  if (!toc) {
    return null
  }

  const re = Array.isArray(exclude)
    ? new RegExp('^(' + exclude.join('|') + ')$', 'i')
    : new RegExp('^(' + exclude + ')$', 'i')

  const filteredToc = toc.filter(
    (heading: { depth: number; value: string }) =>
      heading.depth >= fromHeading &&
      heading.depth <= toHeading &&
      !re.test(heading.value)
  )

  const tocList = (
    <ul className="ml-6 text-sm marker:text-slate-400 dark:marker:text-slate-500 list-disc">
      {filteredToc.map(
        (heading: {
          value: string | null | undefined
          depth: number
          url: string | undefined
        }) => (
          <li
            key={heading.value}
            className={`${heading.depth >= indentDepth && 'ml-4'}`}
          >
            <a href={heading.url}>{heading.value}</a>
          </li>
        )
      )}
    </ul>
  )

  return (
    <div className="mt-4 mb-8">
      {asDisclosure ? (
        <details open>
          <summary className="py-4 text-xl font-bold">
            Table of Contents
          </summary>
          <div className="ml-6">{tocList}</div>
        </details>
      ) : (
        tocList
      )}
    </div>
  )
}

export default Toc
