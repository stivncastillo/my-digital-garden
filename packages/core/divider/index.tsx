import React from 'react'

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

export const Divider = ({ className, ...rest }: Props) => {
  return (
    <hr
      className={`border-slate-200 dark:border-slate-700 my-2 ${className}`}
      {...rest}
    />
  )
}
