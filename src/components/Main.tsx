import React from 'react';
import Header from './Header';
import Result from './Result';
import Pagination from './Pagination';
import { ContextProvider } from '../Context/context';

const Main = () => {
  return (
    <>
      <ContextProvider>
        <Header />
        <Pagination />
        <Result />
      </ContextProvider>
    </>
  );
};

export default Main;
