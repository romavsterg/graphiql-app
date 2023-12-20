import { Context } from '../../Context/Context';
import React, { useContext } from 'react';

export default function Error(Props: { error: string; dictionary: string }) {
  const context = useContext(Context);
  const currentDictionary = JSON.parse(Props.dictionary);
  return (
    <span className="error">
      {
        currentDictionary[context?.language as keyof typeof currentDictionary][
          Props.error as keyof (typeof currentDictionary)[keyof typeof currentDictionary]
        ]
      }
    </span>
  );
}
