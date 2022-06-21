/// <reference types="reading-time" />
export function getFiles(type: any): any;
export function formatSlug(slug: any): any;
export function getFileBySlug(type: any, slug: any): Promise<{
    mdxSource: import("next-mdx-remote").MDXRemoteSerializeResult<Record<string, unknown>>;
    frontMatter: {
        toc: any[];
        wordCount: number;
        readingTime: import("reading-time").ReadTimeResults;
        slug: any;
    };
}>;
export function getAllFilesFrontMatter(folder: any): Promise<any[]>;
export function dateSortDesc(a: any, b: any): 1 | -1 | 0;
