import React from 'react'
import Head from 'next/head'

import { getAllFilesFrontMatterNested } from '../lib/mdx'
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
      {!filteredBlogPosts.length && <p>No posts found :(</p>}
      {filteredBlogPosts.map((frontMatter: FrontMatter) => (
        <PostCard key={frontMatter.slug} data={frontMatter} slim />
      ))}
    </>
  )
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatterNested('blog')

  return { props: { posts } }
}
