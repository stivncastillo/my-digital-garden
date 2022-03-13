import { ClassAttributes, HTMLAttributes } from 'react'
import CustomLink from './Common/CustomAnchor'
import Divider from './Common/Divider'

export const MDXComponents = {
  ul: (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLUListElement> &
      HTMLAttributes<HTMLUListElement>
  ) => <ul className="list-disc list-inside ml-6 my-2" {...props} />,
  ol: (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLOListElement> &
      HTMLAttributes<HTMLOListElement>
  ) => <ol className="list-decimal list-inside ml-6 my-2" {...props} />,
  p: (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLHeadingElement> &
      HTMLAttributes<HTMLHeadingElement>
  ) => <p {...props} />,
  blockquote: (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLHeadingElement> &
      HTMLAttributes<HTMLHeadingElement>
  ) => (
    <blockquote
      className="p-4 italic border-l-4 bg-slate-100 dark:bg-slate-800 rounded-md dark:text-slate-400 text-slate-500 border-slate-300 dark:border-slate-600 quote"
      {...props}
    />
  ),
  code: (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLHeadingElement> &
      HTMLAttributes<HTMLHeadingElement>
  ) => <code {...props} />,
  hr: (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLHeadingElement> &
      HTMLAttributes<HTMLHeadingElement>
  ) => <Divider {...props} />,
  table: (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLTableElement> &
      HTMLAttributes<HTMLTableElement>
  ) => (
    <div className="mb-4">
      <table className="min-w-full" {...props} />
    </div>
  ),
  img: (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLImageElement> &
      HTMLAttributes<HTMLImageElement>
  ) => (
    <div className="w-full">
      <img className="mx-auto w-full" {...props} />
    </div>
  ),
  a: CustomLink,
}
