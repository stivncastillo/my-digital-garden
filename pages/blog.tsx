import React, { useState } from 'react'
import Head from 'next/head'

import { getAllFilesFrontMatter } from '../lib/mdx'
import PostCard from '../components/Posts/PostCard'

export default function Blog({ posts }: { posts: FrontMatter[] }) {
  const [searchValue, setSearchValue] = useState('')

  const filteredBlogPosts = posts
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .filter((frontMatter: FrontMatter) =>
      frontMatter.title.toLowerCase().includes(searchValue.toLowerCase())
    )

  return (
    <>
      <Head>
        <title>Stiven Castillo | Blog</title>
      </Head>
      {!filteredBlogPosts.length && 'No posts found :('}
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
