import React, { useState } from 'react';
import { contextType } from '../@types/types';

export const Context = React.createContext<contextType | null>(null);

interface Props {
  children: React.ReactNode;
}
export const ContextProvider: React.FC<Props> = ({ children }) => {
  const [language, setLanguage] = useState<string>(
    localStorage.getItem('language') || 'English'
  );
  localStorage.setItem('language', language);

  return (
    <Context.Provider
      value={{
        language: language,
        setLanguage: setLanguage,
      }}
    >
      {children}
    </Context.Provider>
  );
};
