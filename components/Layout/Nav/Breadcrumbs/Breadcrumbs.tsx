import { useRouter } from 'next/router'
import React from 'react'
import Crumb from './Crumb'

type Props = {}

const Breadcrumbs = (props: Props) => {
  const router = useRouter()

  const breadcrumbs = React.useMemo(
    function generateBreadcrumbs() {
      const asPathWithoutQuery = router.asPath.split('?')[0]
      const asPathNestedRoutes = asPathWithoutQuery
        .split('/')
        .filter((v) => v.length > 0)

      const crumblist = asPathNestedRoutes.map((subpath, idx) => {
        const href = '/' + asPathNestedRoutes.slice(0, idx + 1).join('/')
        return { href, text: subpath }
      })

      return [{ href: '/', text: '~/' }, ...crumblist]
    },
    [router.asPath]
  )

  return (
    <div className="flex flex-row items-center font-code text-slate-400 dark:text-slate-400">
      {breadcrumbs.map((crumb, idx) => {
        const isLast = idx === breadcrumbs.length - 1
        const isFirst = idx === 0
        return (
          <>
            <Crumb {...crumb} key={idx} isLast={isLast} />
            {!isFirst && !isLast && <span>/</span>}
          </>
        )
      })}
    </div>
  )
}

export default Breadcrumbs
