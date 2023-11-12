import React from 'react';
import Header from './Header';
import Result from './Result';
import Pagination from './Pagination';
import { ContextProvider } from '../Context/context';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate('/aaaa');
  };
  return (
    <>
      <ContextProvider>
        <Header />
        <Pagination />
        <Result />
        <button onClick={clickHandler} style={{ display: 'none' }}>
          go 404
        </button>
      </ContextProvider>
    </>
  );
};

export default Main;
