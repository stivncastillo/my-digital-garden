import React from 'react'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const Container: React.VFC<Props> = ({ children, ...rest }) => {
  return (
    <div className="flex flex-col m-auto h-screen" {...rest}>
      {children}
    </div>
  )
}

export default Container
