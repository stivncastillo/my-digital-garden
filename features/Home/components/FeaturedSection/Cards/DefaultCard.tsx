import Link from 'next/link'
import React from 'react'
import { IconType } from 'react-icons'
import { FeaturedCard } from './types'
import { getClassesByColor } from './utils'

interface Props extends FeaturedCard {
  title: string
  description: string
  href: string
  icon: IconType
}

const DefaultCard: React.VFC<Props> = ({
  title,
  description,
  color,
  href,
  icon: Icon,
}) => {
  const colors = getClassesByColor(color)

  return (
    <Link href={href}>
      <a>
        <div
          className={`flex flex-col justify-end rounded-xl h-56 p-4 hover:shadow-lg ${colors.background}`}
        >
          <div className="">
            <div
              className={`flex flex-row items-center space-x-2 mb-2 ${colors.title}`}
            >
              <Icon size={20} />
              <h4 className={`text-xl font-bold m-0`}>{title}</h4>
            </div>

            <p className={`${colors.body}`}>{description}</p>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default DefaultCard
