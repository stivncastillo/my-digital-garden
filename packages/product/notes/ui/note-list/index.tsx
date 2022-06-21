import React from 'react'
import { MdFolderOpen } from 'react-icons/md'
import { GroupByType } from '../../types'
import { NoteCard } from '../note-card'

type Props = {
  notes: GroupByType
}

export const NoteList: React.VFC<Props> = ({ notes }) => {
  return (
    <>
      {Object.keys(notes).map((category: string, index: number) => {
        const notesCategory = notes[category]

        return (
          <div key={`category-${index}`} className="mb-4">
            <div className="flex flex-row items-center space-x-2 mb-2">
              <div className="text-2xl">
                <MdFolderOpen />
              </div>
              <h3 className="text-2xl mb-0 mt-0">{category}</h3>
            </div>
            {notesCategory.map((frontMatter: FrontMatter, index) => (
              <div key={`note-${index}`} className="flex flex-col px-4">
                <NoteCard data={frontMatter} />
              </div>
            ))}
          </div>
        )
      })}
    </>
  )
}
