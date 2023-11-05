import React, { useState } from 'react';
import { book, contextType, details } from '../@types/types';

export const Context = React.createContext<contextType | null>(null);

interface Props {
  children: React.ReactNode;
}
export const ContextProvider: React.FC<Props> = ({ children }) => {
  const [books, setBooks] = useState<book[]>([]);
  const [details, setDetails] = useState<details>(null);
  const SetBooks = (Books: book[]) => {
    setBooks(Books);
  };
  const SetDetails = (Details: details) => {
    setDetails(Details);
  };
  return (
    <Context.Provider value={{ books, SetBooks, details, SetDetails }}>
      {children}
    </Context.Provider>
  );
};
