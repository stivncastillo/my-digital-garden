import React from 'react'
import PostCard from 'blog/components/PostCard'
import HomeSection from './HomeSection'

type Props = {
  posts: FrontMatter[]
  pinnedPost?: FrontMatter
}

const PostsSection: React.VFC<Props> = ({ posts, pinnedPost }) => {
  return (
    <HomeSection
      title="Posts Recientes"
      showMoreHref="/blog"
      className="flex flex-col flex-1 space-y-1"
    >
      <div className="flex flex-col">
        {pinnedPost && <PostCard data={pinnedPost} pinned slim />}
        {posts.map((frontMatter: FrontMatter) => (
          <PostCard key={frontMatter.slug} data={frontMatter} slim />
        ))}
      </div>
    </HomeSection>
  )
}

export default PostsSection
