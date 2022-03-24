import type { NextPage } from 'next'
import Head from 'next/head'

import { FaLaptopCode } from 'react-icons/fa'
import { ImPencil } from 'react-icons/im'
import Image from 'next/image'
import PostCard from '../components/Posts/PostCard'
import { getAllFilesFrontMatter } from '../lib/mdx'
import Link from 'next/link'
import SocialList from '../components/Social/SocialList'

const myLoader = ({ src }: { src: string }) => {
  return `${src}`
}

interface Props {
  posts: FrontMatter[]
}

const Home: NextPage<Props> = ({ posts }) => {
  const filteredBlogPosts = posts.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  )

  const pinnedPosts = filteredBlogPosts.find((post) => post.pinned)

  return (
    <>
      <Head>
        <title>Stiven Castillo | Digital Garden</title>
        <meta
          name="description"
          content="Stiven Castillo es un desarrollador frontend y diseñador de interfaces de usuario, trabaja en Elenas app."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* hero */}
      <figure className="flex flex-col-reverse md:flex-row justify-start mb-2">
        <div className="flex flex-col flex-1 space-y-4 mt-4 md:mt-0">
          <h1 className="text-4xl dark:text-white">Stiven Castillo</h1>

          <p className="text-slate-500 dark:text-slate-300 font-thin text-xl">
            Frontend developer at Elenas. Begginer writer, speaker, UI Designer
            and Tatoo entusiast, based in Armenia, Colombia.
          </p>
          <a
            href="#"
            className="text-sm underline text-indigo-500 dark:text-amber-400"
          >
            More in about page
          </a>
        </div>
        <div className="w-24 md:w-36">
          <Image
            src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&h=800&q=60"
            alt="Profile"
            height={800}
            width={800}
            loader={myLoader}
            className="rounded-full"
          />
        </div>
      </figure>

      {/* Social */}
      <SocialList />

      {/* Latest post */}
      <section className="flex flex-col flex-1 space-y-1 mb-8">
        <div className="flex flex-row justify-between items-center mb-4">
          <h2 className="text-3xl font-bold dark:text-slate-50">Latest post</h2>
          <Link href="/blog">
            <a className="text-sm underline text-indigo-500 dark:text-amber-400">
              show more
            </a>
          </Link>
        </div>

        <div className="flex flex-col">
          {pinnedPosts && <PostCard data={pinnedPosts} pinned />}
          {filteredBlogPosts.slice(0, 2).map((frontMatter: FrontMatter) => (
            <PostCard key={frontMatter.slug} data={frontMatter} />
          ))}
        </div>
      </section>

      <section>
        <div className="flex flex-row justify-between items-center mb-4">
          <h2 className="text-3xl font-bold dark:text-slate-100">Featured</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 md:grid-rows-2 gap-6 px-2 md:px-4">
          <a href="#">
            <div className="flex flex-col justify-end bg-slate-800 rounded-xl h-56 p-4 hover:shadow-lg hover:shadow-slate-500/50">
              <div className="">
                <div className="flex flex-row items-center text-white space-x-2 mb-2">
                  <FaLaptopCode size={24} />
                  <h4 className="text-xl font-bold">Development</h4>
                </div>

                <p className="text-slate-400">
                  Useful snnipets, tricks and techniques for web/mobile
                  development
                </p>
              </div>
            </div>
          </a>

          <a href="">
            <div className="flex flex-col justify-end bg-green-200 rounded-xl h-56 p-4 hover:shadow-lg hover:shadow-green-300/50">
              <div className="">
                <div className="flex flex-row items-center text-slate-900 space-x-2 mb-2">
                  <ImPencil size={20} />
                  <h4 className="text-xl font-bold">UI Design</h4>
                </div>

                <p className="text-green-600">
                  Patterns, design systems, bookmarks, related posts... etc.
                </p>
              </div>
            </div>
          </a>

          <div className="bg-slate-100 dark:bg-slate-600 rounded-xl m-h-56 p-4 flex flex-col space-y-4 justify-between">
            <div className="flex flex-row items-end space-x-4">
              <Image
                src="/assets/images/book.jpg"
                alt="Book"
                width={120}
                height={202}
                className="aspect-auto w-24 object-cover rounded-md"
              />
              <div className="">
                <span className="text-slate-400 dark:text-slate-200 font-thin text-sm">
                  recently read
                </span>
                <h4 className="text-xl font-bold text-slate-700 dark:text-white">
                  A Short History of Nearly Everything
                </h4>
                <span className="text-slate-400 dark:text-slate-200 font-thin text-sm">
                  by Bill Bryson
                </span>
              </div>
            </div>

            <a
              href="#"
              className="block py-2 px-4 bg-indigo-500 dark:bg-amber-500 text-white text-center text-sm font-bold rounded-md"
            >
              What I&apos;m reading
            </a>
          </div>
          <a href="">
            <div className="flex flex-col justify-end bg-yellow-100 rounded-xl h-56 p-4 hover:shadow-lg hover:shadow-yellow-300/50">
              <div className="">
                <div className="flex flex-row items-center text-slate-900 space-x-2 mb-2">
                  <ImPencil size={20} />
                  <h4 className="text-xl font-bold">UI Design</h4>
                </div>

                <p className="text-yellow-600">
                  Patterns, design systems, bookmarks, related posts... etc.
                </p>
              </div>
            </div>
          </a>
        </div>
      </section>
    </>
  )
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default Home
