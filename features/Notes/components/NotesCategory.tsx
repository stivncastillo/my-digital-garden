import React from 'react'
import { MdFolderOpen } from 'react-icons/md'

type Props = {
  name: string
  children: React.ReactNode
}

const NotesCategory: React.VFC<Props> = ({ name, children }) => {
  return (
    <div className="mb-4">
      <div className="flex flex-row items-center space-x-2 mb-2">
        <div className="text-2xl">
          <MdFolderOpen />
        </div>
        <h3 className="text-2xl mb-0 mt-0">{name}</h3>
      </div>
      {children}
    </div>
  )
}

export default NotesCategory
