import React from 'react';
import Header from './Header';
import Result from './Result';
import Pagination from './Pagination';
import { useRouter } from 'next/router';
import { ReduxProvider } from '@/Redux/ReduxProvider';

const Main = () => {
  const router = useRouter();
  const clickHandler = () => {
    router.push('/aaaa');
  };
  return (
    <>
      <ReduxProvider>
        <Header />
        <Pagination />
        <Result />
        <button onClick={clickHandler} style={{ display: 'none' }}>
          go 404
        </button>
      </ReduxProvider>
    </>
  );
};

export default Main;
