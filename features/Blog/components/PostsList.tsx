import React from 'react'
import Alert from 'components/Common/Alert'
import Link from 'next/link'
import PostCard from 'blog/components/PostCard'

type Props = {
  posts: FrontMatter[]
}

const PostsList = ({ posts }: Props) => {
  if (!posts.length) {
    return (
      <Alert>
        Aún no tengo posts, sorry 🙈.
        <Link href="/">
          <a className="text-indigo-500  underline">Ir al Inicio</a>
        </Link>
      </Alert>
    )
  }
  return (
    <>
      {posts.map((frontMatter: FrontMatter) => (
        <PostCard key={frontMatter.slug} data={frontMatter} slim />
      ))}
    </>
  )
}

export default PostsList
