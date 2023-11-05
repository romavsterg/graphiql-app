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
  books: book[];
  SetBooks: (Books: book[]) => void;
  details: details;
  SetDetails: (Details: details) => void;
};
