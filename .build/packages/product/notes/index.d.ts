/// <reference types="node" />
import { ParsedUrlQuery } from 'querystring';
declare type Props = {
    notes: FrontMatter[];
    query: ParsedUrlQuery;
};
export declare const Notes: ({ notes, query }: Props) => JSX.Element;
export {};
