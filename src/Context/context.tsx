import React, { useRef } from 'react';
import { book, contextType, details } from '../@types/types';
import { useLocation, useParams } from 'react-router-dom';

export const Context = React.createContext<contextType | null>(null);

interface Props {
  children: React.ReactNode;
}
export const ContextProvider: React.FC<Props> = ({ children }) => {
  const queryes = useLocation().search.match(/(?<=\w\=)\w*/g);
  const CountItems = queryes ? Number(queryes[1]) : 6;
  const search = useRef<string>(
    useParams().query || localStorage.getItem('search') || ''
  );
  const countItems = useRef<number>(CountItems);
  const books = useRef<book[]>([]);
  const details = useRef<details>(null);

  return (
    <Context.Provider
      value={{
        search: search.current,
        countItems: countItems.current,
        books: books.current,
        details: details.current,
      }}
    >
      {children}
    </Context.Provider>
  );
};
