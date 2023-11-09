import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  const [countItems, setCountItems] = useState<number>(6);
  const [search, setSearch] = useState<string>(
    localStorage.getItem('search') || ''
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    localStorage.setItem('search', e.target.value);
  };
  const handleCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCountItems(Number(e.target.value));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(
      `/Components/search/${
        search ? search.replace('/', '%2F') : '*'
      }?page=1&count=${countItems}`
    );
  };

  return (
    <header>
      <nav>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={search}
            onChange={handleSearchChange}
            placeholder="type a name of the book"
            name="search"
          />
          <input
            type="number"
            value={countItems}
            onChange={handleCountChange}
          />
          <button type="submit">Search</button>
        </form>
      </nav>
    </header>
  );
}
