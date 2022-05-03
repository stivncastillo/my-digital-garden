type TocType = {
  value: string;
  url: string;
  depth: number;
}

type FrontMatter = {
  wordCount: number
  readingTime: ReadTimeResults
  slug: string
  summary: string
  title: string
  publishedAt: string
  updatedAt: string
  image: string
  pinned: boolean
  category: string
  author: string
  toc: TocType[]
}
type FrontMatterNotes = {
  wordCount: number
  readingTime: ReadTimeResults
  slug: string
  summary: string
  title: string
  publishedAt: string
}