import React from 'react'

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const Divider = ({ className, ...rest }: Props) => {
  return (
    <hr
      className={`border-slate-200 dark:border-slate-700 my-2 ${className}`}
      {...rest}
    />
  )
}

export default Divider
