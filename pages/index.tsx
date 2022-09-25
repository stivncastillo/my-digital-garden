import type { NextPage } from 'next'
import Head from 'next/head'

import { getAllFilesFrontMatter } from '../lib/mdx'
import {
  Hero,
  PostsSection,
  SocialList,
  FeaturedSection,
} from 'home/components'
import {
  getHomeNotes,
  getHomePosts,
  getPinnedPost,
} from 'home/utils/postsUtils'
import NotesSection from 'home/components/NotesSection'

interface Props {
  posts: FrontMatter[]
  notes: FrontMatter[]
}

const Home: NextPage<Props> = ({ posts, notes }) => {
  const sortedPosts = getHomePosts({ number: 2, posts })
  const sortedNotes = getHomeNotes({ number: 4, notes })
  const pinnedPost = getPinnedPost(posts)

  return (
    <>
      <Head>
        <title>Stiven Castillo | Digital Garden</title>
        <meta
          name="description"
          content="Stiven Castillo es un Frontend Engineer y diseñador de interfaces de usuario, trabaja en Elenas app."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={process.env.NEXT_PUBLIC_DOMAIN} />
      </Head>

      <Hero />
      <SocialList />
      <PostsSection posts={sortedPosts} pinnedPost={pinnedPost} />
      <NotesSection notes={sortedNotes} />
      <FeaturedSection />
    </>
  )
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')
  const notes = await getAllFilesFrontMatter('notes')

  return { props: { posts, notes } }
}

export default Home
