import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  const [search, setSearch] = useState<string>(
    localStorage.getItem('search') || ''
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    localStorage.setItem('search', e.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(
      `/Components/search/${search ? search.replace('/', '%2F') : '*'}?page=1`
    );
  };

  return (
    <header>
      <nav>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={search}
            onChange={handleChange}
            placeholder="type a name of the book"
            name="search"
          />
          <button type="submit">Search</button>
        </form>
      </nav>
    </header>
  );
}
