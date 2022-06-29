import React from 'react'
import Head from 'next/head'

import { getAllFilesFrontMatter } from '../lib/mdx'
import PostCard from '../components/Posts/PostCard'
import Alert from '../components/Common/Alert'
import { sortPosts } from '../features/Home/utils/postsUtils'
import Link from 'next/link'

export default function Blog({ posts }: { posts: FrontMatter[] }) {
  const blogPosts = sortPosts(posts)

  return (
    <>
      <Head>
        <title>Stiven Castillo | Blog</title>
      </Head>

      <h1 className="text-3xl mb-6">Blog</h1>

      {!blogPosts.length && (
        <Alert>
          Aún no tengo posts, sorry 🙈.
          <Link href="/">
            <a className="text-indigo-500  underline">Ir al Inicio</a>
          </Link>
        </Alert>
      )}

      {blogPosts.map((frontMatter: FrontMatter) => (
        <PostCard key={frontMatter.slug} data={frontMatter} slim />
      ))}
    </>
  )
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}
