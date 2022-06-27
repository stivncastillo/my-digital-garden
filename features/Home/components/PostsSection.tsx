import Link from 'next/link'
import React from 'react'
import PostCard from '../../../components/Posts/PostCard'

type Props = {
  posts: FrontMatter[]
  pinnedPost?: FrontMatter
}

const PostsSection: React.VFC<Props> = ({ posts, pinnedPost }) => {
  return (
    <section className="flex flex-col flex-1 space-y-1 mb-8">
      <div className="flex flex-row justify-between items-center mb-4">
        <h2 className="text-3xl font-bold dark:text-slate-50">Últimos posts</h2>
        <Link href="/blog">
          <a className="text-sm underline text-indigo-500 dark:text-amber-400">
            ver más
          </a>
        </Link>
      </div>

      <div className="flex flex-col">
        {pinnedPost && <PostCard data={pinnedPost} pinned />}
        {posts.map((frontMatter: FrontMatter) => (
          <PostCard key={frontMatter.slug} data={frontMatter} />
        ))}
      </div>
    </section>
  )
}

export default PostsSection
