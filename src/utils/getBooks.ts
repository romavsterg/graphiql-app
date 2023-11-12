import { book, details } from './../@types/types';
import axios from 'axios';

const getData = async (search: string, page: number, count = 1) => {
  const res = await axios.get(
    `https://openlibrary.org/search.json?q=${decodeURI(
      search
    )}&limit=${count}&page=${page}`
  );
  const data = res.data.docs;
  return data;
};

export const getBooks = async (search: string, page: number, count: number) => {
  const data = await getData(search, page, count);
  const books: book[] = data.map((book: book) => {
    return {
      title: book.title,
      author_name: book.author_name
        ? book.author_name[0]
        : `the author's name is not specified`,
      key: book.key.replace(/\/works\//, ''),
    };
  });

  return books;
};
export const getDetails = async (search: string) => {
  const data = await getData(search, 1);

  const filteredDetails: details = {
    contributor: data[0].contributor
      ? data[0].contributor[0]
      : 'No contributors specified',
    language: data[0].language ? data[0].language[0] : 'No language specified',
    place: data[0].place ? data[0].place[0] : 'No place specified',
  };

  return filteredDetails;
};
