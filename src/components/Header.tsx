import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useActions } from '../Redux/hooks/useActions';

export default function Header() {
  const navigate = useNavigate();
  const [search, setSearch] = useState(localStorage.getItem('search') || '');
  const [countItems, setCountItems] = useState(6);
  const { SetSearch, SetCountItems } = useActions();

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
    const newUrl = `/Components/search/${search.replace(
      '/',
      '%2F'
    )}?page=1&count=${countItems}`;
    if (newUrl !== location.href.replace(/[\w\/:]*(?=\/Components)/i, '')) {
      navigate(newUrl);
    }
  };

  return (
    <header>
      <nav>
        <form onSubmit={handleSubmit} data-testid="form">
          <input
            type="text"
            value={search}
            onChange={handleSearchChange}
            placeholder="type a name of the product"
            data-testid="search"
            name="search"
          />
          <input
            data-testid="count"
            type="number"
            name="countItems"
            value={countItems}
            onChange={handleCountChange}
          />
          <button type="submit">Search</button>
        </form>
      </nav>
    </header>
  );
}
