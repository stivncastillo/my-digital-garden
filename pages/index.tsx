import type { NextPage } from 'next'
import Head from 'next/head'

import { getAllFilesFrontMatter } from '../lib/mdx'
import {
  Hero,
  PostsSection,
  SocialList,
  FeaturedSection,
} from '../features/Home/components'
import { getHomePosts, getPinnedPost } from '../features/Home/utils/postsUtils'

interface Props {
  posts: FrontMatter[]
}

const Home: NextPage<Props> = ({ posts }) => {
  const sortedPosts = getHomePosts({ number: 2, posts })
  const pinnedPost = getPinnedPost(posts)

  return (
    <>
      <Head>
        <title>Stiven Castillo | Digital Garden</title>
        <meta
          name="description"
          content="Stiven Castillo es un desarrollador frontend y diseñador de interfaces de usuario, trabaja en Elenas app."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={process.env.NEXT_PUBLIC_DOMAIN} />
      </Head>

      <Hero />
      <SocialList />
      <PostsSection posts={sortedPosts} pinnedPost={pinnedPost} />
      <FeaturedSection />
    </>
  )
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default Home
