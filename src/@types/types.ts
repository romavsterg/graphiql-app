export type book = {
  title: string;
  author_name: string;
  key: string;
};

export type details = {
  contributor: string;
  language: string;
  place: string;
} | null;

export type contextType = {
  search: string;
  countItems: number;
  books: book[];
  details: details;
};
