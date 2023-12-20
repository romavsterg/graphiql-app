import React, { useContext } from 'react';
import './footer.css';
import { Context } from '../../Context/Context';
import { footerDictionary } from '../../../dictionaries/footerDictionary';

export default function Footer() {
  const context = useContext(Context);
  return (
    <footer>
      <a href="https://github.com/romavsterg">
        {context?.language === 'English'
          ? footerDictionary['English'].links[0]
          : footerDictionary['Russian'].links[0]}
      </a>
      <a href="https://rs.school/react/">
        {context?.language === 'English'
          ? footerDictionary['English'].links[1]
          : footerDictionary['Russian'].links[1]}
      </a>
      <img src="/src/icons/rs_school_js.svg" />
    </footer>
  );
}
