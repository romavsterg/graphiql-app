import React, { useState } from 'react';

type Props = {
  setQuery: (query: string) => void;
};

export default function Header(props: Props) {
  const [search, setSearch] = useState<string>(
    localStorage.getItem('search') || ''
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    localStorage.setItem('search', e.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.setQuery(search);
  };

  return (
    <header>
      header
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
