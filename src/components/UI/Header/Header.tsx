import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import { Context } from '../../../Context/Context';
import { headerDictionary } from '../../../dictionaries/headerDictionary';

export default function Header() {
  const context = useContext(Context);
  const handleChange = (e: React.FormEvent<HTMLSelectElement>) => {
    context?.setLanguage(e.currentTarget.value);
    localStorage.setItem('language', e.currentTarget.value);
  };

  return (
    <>
      <header>
        <h1>GraphiQL</h1>
        <nav>
          <Link to="/Components/welcome">
            {context?.language === 'English'
              ? headerDictionary['English'].links[0]
              : headerDictionary['Russian'].links[0]}
          </Link>
        </nav>
        <div className="switch-language">
          <h3>
            {context?.language === 'English'
              ? headerDictionary['English'].lang[0]
              : headerDictionary['Russian'].lang[0]}
          </h3>
          <select
            name="language"
            value={context?.language}
            onChange={handleChange}
          >
            <option key="English" value="English">
              {context?.language === 'English'
                ? headerDictionary['English'].lang[1]
                : headerDictionary['Russian'].lang[1]}
            </option>
            <option key="Russian" value="Russian">
              {context?.language === 'English'
                ? headerDictionary['English'].lang[2]
                : headerDictionary['Russian'].lang[2]}
            </option>
          </select>
        </div>
      </header>
    </>
  );
}
