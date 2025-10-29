export type CombineType<T, K> = {
    [P in keyof T | keyof K]: P extends keyof T
    ? T[P]
    : P extends keyof K
    ? K[P]
    : never;
};
