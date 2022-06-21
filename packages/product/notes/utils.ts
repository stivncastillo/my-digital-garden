import format from 'date-fns/format'
import { ParsedUrlQuery } from 'querystring';
import { GroupByType } from './types';

export const formatDate = (value: string): string => {
  const formattedDate = value.replace(/-/g, '/')
  const date = format(new Date(formattedDate), 'MMM yyyy')

  return date;
}


export const groupBy = (xs: FrontMatter[], key: string): GroupByType => {
  return xs.reduce((rv, x) => {
    // @ts-ignore
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
}

export const filterNotes = (notes: FrontMatter[], query: ParsedUrlQuery): GroupByType => {
  const filteredNotes = notes
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .filter((note) => {
      if (query.category) {
        return note.category === query.category
      }
      return true
    })

  const finalNotes = groupBy(filteredNotes, 'category')

  return finalNotes;
}