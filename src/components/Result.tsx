import React, { useContext, useEffect, useState, useRef } from 'react';
import '../styles/Result.css';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Context } from '../Context/context';
import { getBooks, getDetails } from '../utils/getBooks';
import BookCard from './BookCard';
import DetailedCard from './DetailedCard';

const Result = () => {
  const context = useContext(Context);
  const navigate = useNavigate();
  const queryes = useLocation().search.match(/(?<=\w\=)\w*/g);
  const page = queryes ? Number(queryes[0]) : 1;
  const count = queryes ? Number(queryes[1]) : 6;
  const details = queryes ? queryes[2] : '';
  const search = useParams().query;

  const lastPage = useRef<number | null>(null);
  const lastDetails = useRef<string | null>(null);
  const lastSearch = useRef<string | null | undefined>(null);

  const [areBooksLoading, setAreBooksLoading] = useState(false);
  const [areDetailsLoading, setAreDetailsLoading] = useState(false);

  useEffect(() => {
    if (
      page !== lastPage.current ||
      details !== lastDetails.current ||
      search !== lastSearch.current
    ) {
      const getData = async () => {
        setAreBooksLoading(true);
        const res = await getBooks(search, page, count);
        context?.SetBooks(res);
        setAreBooksLoading(false);
        if (details) {
          setAreDetailsLoading(true);
          const res = await getDetails(details);
          context?.SetDetails(res);
          setAreDetailsLoading(false);
        }
      };
      lastPage.current = page;
      lastDetails.current = details;
      lastSearch.current = search;
      getData();
    }
  });

  const handleClick = () => {
    if (details) {
      context?.SetDetails(null);
      navigate(
        `/Components/search/${
          search ? search.replace('/', '%2F') : '*'
        }?page=${page}&count=${count}`
      );
    }
  };

  return (
    <div className="container">
      {areBooksLoading ? (
        <span className="loader"></span>
      ) : (
        <>
          <div className="books-cards" onClick={handleClick}>
            {context?.books.map((book) => (
              <BookCard key={book.key} book={book} count={count} page={page} />
            ))}
          </div>
          {context?.details && (
            <DetailedCard
              areDetailsLoading={areDetailsLoading}
              details={context.details}
              page={page}
              handleClick={handleClick}
              search={search ? search : '*'}
              count={count}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Result;
