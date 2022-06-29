import { GroupByType } from "../types"

export const sortNotes = (posts: FrontMatter[]): FrontMatter[] => {
  return posts.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  )
}

export const filterByCategory = (posts: FrontMatter[], category?: string): FrontMatter[] => {
  return sortNotes(posts).filter((note) => {
    if (category) {
      return note.category === category
    }
    return true
  })
}

export const groupByKey = (xs: FrontMatter[], key: string): GroupByType => {
  return xs.reduce((rv, x) => {
    // @ts-ignore
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
}