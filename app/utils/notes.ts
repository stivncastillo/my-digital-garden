
export type GroupByType = {
  [key: string]: FrontMatter[];
}

export const groupBy = (xs: FrontMatter[], key: string): GroupByType => {
  return xs.reduce((rv, x) => {
    // @ts-ignore
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
}