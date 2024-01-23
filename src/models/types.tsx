export interface IBook {
    id: string | number;
    title: string;
    author: string;
    genre: string;
    description: string;
}

export type DatatableActionOptionType<T> = {
    key: string;
    text: string;
    onClick: (key: string, row: T) => void;
  };