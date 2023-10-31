import React from 'react';
import '../styles/Main.css';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Result from './Result';

const Main = () => {
  const navigate = useNavigate();

  const SetQuery = (Query: string) => {
    navigate(`/search/${Query}`);
  };
  return (
    <>
      <Header setQuery={SetQuery} />
      <Result />
    </>
  );
};

export default Main;
