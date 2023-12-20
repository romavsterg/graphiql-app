import React from 'react';
import { prettify } from '../../utils/prettify';
import { useGetResult } from '../../utils/Redux/hooks/useGetResult';
import { jsonLanguage } from '@codemirror/lang-json';
import ReactCodeMirror from '@uiw/react-codemirror';
import './QueryResult.css';

export default function QueryResult() {
  const { data } = useGetResult();
  return (
    <div className="QueryResult">
      <h4>Query result</h4>
      <ReactCodeMirror
        className="editor"
        theme="dark"
        value={data !== '' ? prettify(JSON.stringify(data)) : undefined}
        height="550px"
        width="100%"
        editable={false}
        extensions={[jsonLanguage]}
      />
    </div>
  );
}
