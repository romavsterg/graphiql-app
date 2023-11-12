import React, { useState, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Context } from '../Context/context';

export default function Header() {
  const navigate = useNavigate();
  const context = useContext(Context);
  const queryes = useLocation().search.match(/(?<=\w\=)\w*/g);
  const CountItems = queryes ? Number(queryes[1]) : 6;
  const [countItems, setCountItems] = useState<number>(CountItems);
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
    context ? (context.search = search) : search;
    context ? (context.countItems = countItems) : countItems;
    event.preventDefault();
    const newUrl = `/Components/search/${
      search ? search.replace('/', '%2F') : '*'
    }?page=1&count=${countItems}`;
    if (newUrl !== location.href.replace(/[\w\/:]*(?=\/Components)/i, '')) {
      navigate(newUrl);
    }
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
            data-testid="search"
            name="search"
          />
          <input
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
