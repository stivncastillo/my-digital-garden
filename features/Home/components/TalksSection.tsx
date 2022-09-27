import React from 'react'
import HomeSection from './HomeSection'
import TalkCard from './TalkCard/TalkCard'
import { TalkType } from 'data/data'

type Props = {
  talks: TalkType[]
}

const TalksSection = ({ talks }: Props) => {
  return (
    <HomeSection
      title="Últimos Talks"
      className="flex flex-col flex-1 space-y-1 mb-8"
    >
      <ul className="grid grid-flow-col grid-cols-1 md:grid-cols-2 md:grid-rows-3 gap-2">
        {talks.map((talk, index) => (
          <TalkCard featured={index === 0} key={index} {...talk} />
        ))}
      </ul>
    </HomeSection>
  )
}

export default TalksSection
