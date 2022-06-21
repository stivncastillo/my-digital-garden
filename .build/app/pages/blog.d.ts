export default function Blog({ posts }: {
    posts: FrontMatter[];
}): JSX.Element;
export declare function getStaticProps(): Promise<{
    props: {
        posts: any[];
    };
}>;
