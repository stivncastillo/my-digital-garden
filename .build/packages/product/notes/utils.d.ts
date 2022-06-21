import { ParsedUrlQuery } from 'querystring';
import { GroupByType } from './types';
export declare const formatDate: (value: string) => string;
export declare const groupBy: (xs: FrontMatter[], key: string) => GroupByType;
export declare const filterNotes: (notes: FrontMatter[], query: ParsedUrlQuery) => GroupByType;
