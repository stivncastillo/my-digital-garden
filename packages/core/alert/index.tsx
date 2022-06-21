import React from 'react'

type Props = {
  children: React.ReactNode
}

export const Alert = ({ children }: Props) => {
  return (
    <div className="bg-indigo-100 text-indigo-500 py-2 px-4 rounded-md text-center">
      {children}
    </div>
  )
}
