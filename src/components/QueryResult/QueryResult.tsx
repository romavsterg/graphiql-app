import React, { useContext } from 'react';
import { prettify } from '../../utils/prettify';
import { useGetResult } from '../../utils/Redux/hooks/useGetResult';
import { jsonLanguage } from '@codemirror/lang-json';
import ReactCodeMirror from '@uiw/react-codemirror';
import './QueryResult.css';
import { Context } from '../Context/Context';
import { mainDictionary } from '../../dictionaries/mainDictionary';

export default function QueryResult() {
  const context = useContext(Context);
  const { data } = useGetResult();
  return (
    <div className="Query-result">
      <h4>
        {
          mainDictionary[context?.language as keyof typeof mainDictionary]
            .QueryResult
        }
      </h4>
      <ReactCodeMirror
        className="result"
        theme="dark"
        value={data !== '' ? prettify(JSON.stringify(data)) : undefined}
        height="650px"
        width="100%"
        editable={false}
        extensions={[jsonLanguage]}
      />
    </div>
  );
}
