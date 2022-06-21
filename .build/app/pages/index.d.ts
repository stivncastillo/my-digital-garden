import type { NextPage } from 'next';
interface Props {
    posts: FrontMatter[];
}
declare const Home: NextPage<Props>;
export declare function getStaticProps(): Promise<{
    props: {
        posts: any[];
    };
}>;
export default Home;
