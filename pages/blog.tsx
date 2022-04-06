import React from 'react'
import Head from 'next/head'

import { getAllFilesFrontMatter } from '../lib/mdx'
import PostCard from '../components/Posts/PostCard'

export default function Blog({ posts }: { posts: FrontMatter[] }) {
  const filteredBlogPosts = posts.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  )

  return (
    <>
      <Head>
        <title>Stiven Castillo | Blog</title>
      </Head>
      <h1 className="text-3xl mb-6">Blog</h1>
      {!filteredBlogPosts.length && <p>No posts found :(</p>}
      {filteredBlogPosts.map((frontMatter: FrontMatter) => (
        <PostCard key={frontMatter.slug} data={frontMatter} slim />
      ))}
    </>
  )
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}
