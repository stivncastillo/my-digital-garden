declare const Notes: ({ notes }: {
    notes: FrontMatter[];
}) => JSX.Element;
export declare function getStaticProps(): Promise<{
    props: {
        notes: any[];
    };
}>;
export default Notes;
