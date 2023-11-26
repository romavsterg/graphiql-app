import React, { useEffect, useState } from 'react';
import { useActions } from '../Redux/hooks/useActions';
import { useRouter } from 'next/router';
import styles from '../styles/Header.module.css';

export default function Header() {
  const router = useRouter();
  const [search, setSearch] = useState('loading...');
  const [countItems, setCountItems] = useState(router.query.count || 6);
  const { SetSearch, SetCountItems, SetDetails } = useActions();

  useEffect(() => {
    if (router.isReady) {
      if (typeof router.query.search !== 'string') {
        setSearch('');
        SetSearch('');
      } else {
        setSearch(router.query.search.replace('*', ''));
        SetSearch(router.query.search.replace('*', ''));
      }
      setCountItems(Number(router.query.count));
      SetCountItems(router.query.count);
      if (router.query.details) {
        console.log(router.query.details);
        SetDetails(Number(router.query.details));
      }
    }
  }, [SetCountItems, SetSearch, router, SetDetails]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    localStorage.setItem('search', e.target.value);
  };
  const handleCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCountItems(Number(e.target.value));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    SetCountItems(countItems);
    SetSearch(search);
    const newUrl = `/Components/search/${
      typeof search == 'string' && search.replace('/', '%2F')
    }?page=1&count=${countItems}`;
    if (
      newUrl !==
      router.asPath
        .replace('/search', '/search/')
        .replace(/[\w\/:]*(?=\/Components)/i, '')
    ) {
      router.push(newUrl);
    }
  };

  return (
    <header>
      <nav>
        <form
          className={styles.form}
          onSubmit={handleSubmit}
          data-testid="form"
        >
          <input
            className={styles.input}
            type="text"
            value={search}
            onChange={handleSearchChange}
            placeholder="type a name of the product"
            data-testid="search"
            name="search"
          />
          <input
            min={1}
            className={styles.input}
            placeholder="please enter a count of items to display"
            data-testid="count"
            type="number"
            name="countItems"
            value={countItems}
            onChange={handleCountChange}
          />
          <button className={styles.button} type="submit">
            Search
          </button>
        </form>
      </nav>
    </header>
  );
}
