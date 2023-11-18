import React from 'react';
import Header from './Header';
import Result from './Result';
import Pagination from './Pagination';
import { ReduxProvider } from '../Redux/ReduxProvider';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate('/aaaa');
  };
  return (
    <ReduxProvider>
      <Header />
      <Pagination />
      <Result />
      <button onClick={clickHandler} style={{ display: 'none' }}>
        go 404
      </button>
    </ReduxProvider>
  );
};

export default Main;
