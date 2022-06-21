declare type Props = {
    pinned?: boolean;
    slim?: boolean;
    data: FrontMatter;
};
declare const PostCard: ({ pinned, slim, data }: Props) => JSX.Element;
export default PostCard;
