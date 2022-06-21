import { BookType } from '../data/data';
export declare const getStaticProps: () => Promise<{
    props: {
        bookList: BookType[];
    };
}>;
interface Props {
    bookList: BookType[];
}
declare const Books: ({ bookList }: Props) => JSX.Element;
export default Books;
