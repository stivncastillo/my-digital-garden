import React from 'react'
import Head from 'next/head'

import { getAllFilesFrontMatter } from '../lib/mdx'
import { sortPosts } from 'home/utils/postsUtils'
import PostsList from 'blog/components/PostsList'
import Header from 'blog/components/Header'

export default function Blog({ posts }: { posts: FrontMatter[] }) {
  const blogPosts = sortPosts(posts)

  return (
    <>
      <Head>
        <title>Stiven Castillo | Blog</title>
      </Head>
      <Header />
      <PostsList posts={blogPosts} />
    </>
  )
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}
