import React, { useEffect, useState } from 'react';
import '../styles/Result.css';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';

type book = {
  title: string;
  author_name: string;
  key: string;
};

const Result = () => {
  const query = useParams().query;
  const page = Number(useLocation().search.replace(/\?page=/, ''));
  const [isLoading, setIsLoading] = useState(false);
  const [Books, setBooks] = useState<book[]>([]);

  useEffect(() => {
    const searchBooks = async () => {
      setIsLoading(true);
      const res = await axios.get(
        query
          ? `https://openlibrary.org/search.json?q=${query}&limit=6&page=${page}`
          : `https://openlibrary.org/search.json?q=*&limit=6&page=${page}`
      );
      const data = res.data.docs;
      const books: book[] = data.map((book: book) => {
        return {
          title: book.title,
          author_name: book.author_name[0],
          key: book.key,
        };
      });
      setIsLoading(false);
      setBooks(books);
    };
    searchBooks();
  }, [query, page]);

  return (
    <div className="container">
      {isLoading ? (
        <span className="loader"></span>
      ) : (
        <div className="books-cards">
          {Books.map((book) => (
            <div key={book.key} className="book-card">
              <h3 className="book-title">{book.title}</h3>
              <p className="book-author">{book.author_name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Result;
