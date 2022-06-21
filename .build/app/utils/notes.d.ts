export declare type GroupByType = {
    [key: string]: FrontMatter[];
};
export declare const groupBy: (xs: FrontMatter[], key: string) => GroupByType;
