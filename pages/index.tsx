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
import TalksSection from 'home/components/TalksSection'
import { talks, TalkType } from 'data/data'

interface Props {
  posts: FrontMatter[]
  notes: FrontMatter[]
  talks: TalkType[]
}

const Home: NextPage<Props> = ({ posts, notes, talks }) => {
  console.log('👻 ~ file: index.tsx ~ line 27 ~ talks', talks)
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
      {sortedPosts && (
        <PostsSection posts={sortedPosts} pinnedPost={pinnedPost} />
      )}
      {sortedNotes && <NotesSection notes={sortedNotes} />}
      {talks && <TalksSection talks={talks} />}
      <FeaturedSection />
    </>
  )
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')
  const notes = await getAllFilesFrontMatter('notes')

  return { props: { posts, notes, talks } }
}

export default Home
