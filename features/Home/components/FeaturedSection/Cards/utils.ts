import { ColorCard } from "./types";

type ColorClassSchema = {
  background: string,
  title: string,
  body: string,
}

export const getClassesByColor = (color?: ColorCard): ColorClassSchema => {
  switch (color) {
    case 'green':
      return {
        background: 'bg-green-200 hover:shadow-green-300/50',
        title: 'text-slate-900',
        body: 'text-green-600 dark:text-green-600',
      }
    case 'yellow':
      return {
        background: 'bg-yellow-100 hover:shadow-yellow-300/50',
        title: 'text-slate-900',
        body: 'text-yellow-600 dark:text-yellow-600',
      }
    default:
      return {
        background: 'bg-slate-800 hover:shadow-slate-500/50',
        title: 'text-white',
        body: 'text-slate-400',
      }
  }
}