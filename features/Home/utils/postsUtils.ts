export const sortPosts = (posts: FrontMatter[]): FrontMatter[] => {
  return posts.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  )
}
export const sortNotes = (notes: FrontMatter[]): FrontMatter[] => {
  return notes.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  )
}

export const getPinnedPost = (
  posts: FrontMatter[]
): FrontMatter | undefined => {
  return posts.find((post) => post.pinned)
}

export const getHomePosts = ({
  number,
  posts,
}: {
  number: number
  posts: FrontMatter[]
}) => {
  const pinnedPost = getPinnedPost(posts)
  return sortPosts(posts).filter((post) => post.slug !== pinnedPost?.slug).slice(0, number)
}
export const getHomeNotes = ({
  number,
  notes,
}: {
  number: number
  notes: FrontMatter[]
}) => {
  return sortNotes(notes).slice(0, number)
}
