/// <reference types="react" />
interface Props {
    href: string;
    children: React.ReactNode;
}
declare const CustomLink: ({ href, ...rest }: Props) => JSX.Element;
export default CustomLink;
