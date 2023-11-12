import React, { useContext, useEffect, useState, useRef } from 'react';
import '../styles/Result.css';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Context } from '../Context/context';
import { getBooks, getDetails } from '../utils/getBooks';
import BookCard from './BookCard';
import DetailedCard from './DetailedCard';
import { book } from '../@types/types';

const Result = () => {
  const context = useContext(Context);
  const navigate = useNavigate();
  const queryes = useLocation().search.match(/(?<=\w\=)\w*/g);
  const page = queryes ? Number(queryes[0]) : 1;
  const details = queryes ? queryes[2] : '';
  const search = useParams().query;

  const [Books, setBooks] = useState<book[]>([]);

  const lastPage = useRef<number | null>(null);
  const lastSearch = useRef<string | null | undefined>(null);
  const lastCountItems = useRef<number | null | undefined>(null);

  const [areBooksLoading, setAreBooksLoading] = useState(false);
  const [areDetailsLoading, setAreDetailsLoading] = useState(false);

  useEffect(() => {
    if (
      page !== lastPage.current ||
      search !== lastSearch.current ||
      context?.countItems !== lastCountItems.current
    ) {
      const getData = async () => {
        setAreBooksLoading(true);
        const res = await getBooks(
          search || '*',
          page,
          context?.countItems || 6
        );
        context ? (context.books = res) : res;
        setBooks(res);
        setAreBooksLoading(false);
        if (details) {
          setAreDetailsLoading(true);
          const res = await getDetails(details);
          context ? (context.details = res) : res;
          setAreDetailsLoading(false);
        }
      };
      getData();
      console.log(context);
    }
    lastPage.current = page;
    lastSearch.current = search;
    lastCountItems.current = context?.countItems;
    console.log(
      lastPage,
      page,
      lastSearch,
      search,
      lastCountItems,
      context?.countItems
    );
  });

  const handleClick = () => {
    if (details) {
      context ? (context.details = null) : null;
      navigate(
        `/Components/search/${
          context?.search ? context?.search.replace('/', '%2F') : '*'
        }?page=${page}&count=${context?.countItems}`
      );
    }
  };

  return (
    <div className="container">
      {areBooksLoading ? (
        <span className="loader">loading...</span>
      ) : (
        <>
          {Books[0] ? (
            <ul className="books-cards" onClick={handleClick}>
              {Books.map((book) => (
                <BookCard
                  key={book.key}
                  book={book}
                  count={context?.countItems || 6}
                  page={page}
                />
              ))}
            </ul>
          ) : (
            <h4>No books found</h4>
          )}
          {details && context && (
            <DetailedCard
              areDetailsLoading={areDetailsLoading}
              details={context?.details}
              page={page}
              handleClick={handleClick}
              search={context?.search || '*'}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Result;
