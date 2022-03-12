import React, { useState } from 'react'
import Head from 'next/head'

import { getAllFilesFrontMatter } from '../lib/mdx'
import BlogPost from '../components/BlogPost'
import { ReadTimeResults } from 'reading-time'

type FrontMatter = {
  wordCount: number
  readingTime: ReadTimeResults
  slug: any
  title: string
  publishedAt: string
}
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
        <title>Blog - Benjamin Carlson</title>
      </Head>
      {!filteredBlogPosts.length && 'No posts found :('}
      {filteredBlogPosts.map((frontMatter: FrontMatter) => (
        <BlogPost key={frontMatter.title} {...frontMatter} />
      ))}
    </>
  )
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}
