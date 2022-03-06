import React from 'react'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const Container: React.VFC<Props> = ({ children, ...rest }) => {
  return (
    <div className="container m-auto" {...rest}>
      {children}
    </div>
  )
}

export default Container
