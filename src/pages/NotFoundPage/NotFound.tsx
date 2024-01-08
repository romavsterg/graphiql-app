import React, { useContext } from 'react';
import { Context } from '../../components/Context/Context';
import { NotFoundDictionary } from '../../dictionaries/notFoundDictionary';

export default function NotFound() {
  const context = useContext(Context);
  return (
    <div style={{ width: 'fit-content', margin: '100px auto' }}>
      404 -{' '}
      {
        NotFoundDictionary[context?.language as keyof typeof NotFoundDictionary]
          .notFound
      }
    </div>
  );
}
