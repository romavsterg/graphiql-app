import React, { useEffect, useState } from 'react';
import '../styles/Result.css';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

type book = {
  title: string;
  author_name: string;
  key: string;
};

type details = {
  contributor: string;
  language: string;
  place: string;
};

const Result = () => {
  const navigate = useNavigate();
  const loacation = useLocation();
  const queryes = useLocation().search.match(/(?<=\w\=)\w*/g);
  const page = queryes ? Number(queryes[0]) : 1;
  const details = queryes ? queryes[1] : '';
  const search = useParams().query;

  const [areBooksLoading, setAreBooksLoading] = useState(false);
  const [areDetailsLoading, setAreDetailsLoading] = useState(false);
  const [Books, setBooks] = useState<book[]>([]);
  const [Details, setDetails] = useState<details>();

  const getData = async (search = '*', page = 1) => {
    const res = await axios.get(
      `https://openlibrary.org/search.json?q=${decodeURI(
        search
      )}&limit=6&page=${page || 1}`
    );
    const data = res.data.docs;
    return data;
  };

  useEffect(() => {
    const searchBooksAndDetails = async () => {
      setAreBooksLoading(true);
      const data = await getData(search, page);
      const books: book[] = data.map((book: book) => {
        return {
          title: book.title,
          author_name: book.author_name
            ? book.author_name[0]
            : `the author's name is not specified`,
          key: book.key.replace(/\/works\//, ''),
        };
      });
      setAreBooksLoading(false);
      setBooks(books);
      if (details) {
        setAreDetailsLoading(true);
        const data = await getData(details);
        const filteredDetails = {
          contributor: data[0].contributor
            ? data[0].contributor[0]
            : 'No specified contributors',
          language: data[0].language
            ? data[0].language[0]
            : 'No language specified',
          place: data[0].place ? data[0].place[0] : 'No place specified',
        };

        setDetails(filteredDetails);
        setAreDetailsLoading(false);
      }
    };
    searchBooksAndDetails();
  }, [search, page, loacation, navigate, details]);

  const handleClick = () => {
    navigate(`/Components/search/${search}?page=${page}`);
  };

  return (
    <div className="container">
      {areBooksLoading ? (
        <span className="loader"></span>
      ) : (
        <>
          <div className="books-cards">
            {Books.map((book) => (
              <Link
                to={`/Components/search/${book.title.replace(
                  '/',
                  '%2F'
                )}?page=${page}&details=${book.key}`}
                key={book.key}
                className="book-card"
              >
                <h3 className="book-title">{book.title}</h3>
                <p className="book-author">{book.author_name}</p>
              </Link>
            ))}
          </div>
          {details && (
            <div className="details">
              <button className="close-details" onClick={handleClick}>
                Close details
              </button>
              {areDetailsLoading ? (
                <span className="loader"></span>
              ) : (
                <>
                  <h4>Contributor: {Details?.contributor}</h4>
                  <h5>Language: {Details?.language}</h5>
                  <h5>Place: {Details?.place}</h5>
                </>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Result;
