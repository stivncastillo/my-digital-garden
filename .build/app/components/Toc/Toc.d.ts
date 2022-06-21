interface Props {
    toc: TocType[];
    indentDepth: number;
    fromHeading: number;
    toHeading: number;
    asDisclosure: boolean;
    exclude: string;
}
declare const Toc: ({ toc, indentDepth, fromHeading, toHeading, asDisclosure, exclude, }: Props) => JSX.Element | null;
export default Toc;
