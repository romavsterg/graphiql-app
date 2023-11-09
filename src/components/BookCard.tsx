import React from 'react';
import { Link } from 'react-router-dom';
import { book } from '../@types/types';

type Props = { book: book; page: number; count: number };

export default function BookCard(Props: Props) {
  return (
    <Link
      to={`/Components/search/${Props.book.title.replace('/', '%2F')}?page=${
        Props.page
      }&count=${Props.count}&details=${Props.book.key}`}
      className="book-card"
    >
      <h3 className="book-title">{Props.book.title}</h3>
      <p className="book-author">{Props.book.author_name}</p>
    </Link>
  );
}
