/// <reference types="reading-time" />
interface Props {
    mdxSource: any;
    frontMatter: FrontMatter;
}
export default function Blog({ mdxSource, frontMatter }: Props): JSX.Element;
export declare function getStaticPaths(): Promise<{
    paths: any;
    fallback: boolean;
}>;
declare type ParamsType = {
    slug: [string];
};
export declare function getStaticProps({ params }: {
    params: ParamsType;
}): Promise<{
    props: {
        mdxSource: import("next-mdx-remote").MDXRemoteSerializeResult<Record<string, unknown>>;
        frontMatter: {
            toc: any[];
            wordCount: number;
            readingTime: import("reading-time").ReadTimeResults;
            slug: any;
        };
    };
}>;
export {};
