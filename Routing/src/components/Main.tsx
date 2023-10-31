import React, { useState } from 'react';
import '../styles/Main.css';
import { redirect, useNavigate, useParams } from 'react-router-dom';
import Header from './Header';
import Result from './Result';

const Main = () => {
  const name = useParams();
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
