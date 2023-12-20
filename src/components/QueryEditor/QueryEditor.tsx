import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import './QueryEditor.css';
import { jsonLanguage } from '@codemirror/lang-json';
import { prettify } from '../../utils/prettify';
import { useActions } from '../../utils/Redux/hooks/useActions';

export default function QueryEditor() {
  // const [value, setValue] = React.useState('#Start with something simple');
  const [value, setValue] = React.useState(`{  allFilms(first:10){
    edges{   node {

        title
        id    releaseDate
      }   } 
} 
} `);
  const { SetError, setResult } = useActions();
  const onChange = React.useCallback((val: string) => {
    setValue(val);
  }, []);
  const [apiUrl, setApitUrl] = useState(
    'https://swapi-graphql.netlify.app/.netlify/functions/index'
  );

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setApitUrl(e.currentTarget.value);
  };

  const executeQuery = async () => {
    try {
      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `query Query ${value}`,
        }),
      });
      const json = await res.json();
      console.log(json);
      if (json.errors) {
        SetError({ isError: true, message: json.errors[0].message });
      } else {
        setResult(json.data);
        SetError({ isError: false, message: '' });
      }
    } catch (e) {
      if (typeof e === 'string') {
        SetError({ isError: true, message: e });
      } else if (e instanceof Error) {
        SetError({ isError: true, message: e.message });
      }
    }
  };

  const prettifyQuery = () => {
    setValue(prettify(value));
  };

  return (
    <div className="QueryEditor">
      <h5>Query editor</h5>
      <input type="text" value={apiUrl} onChange={handleChange} />
      <button onClick={prettifyQuery}>Prettify the query</button>
      <CodeMirror
        className="editor"
        theme="dark"
        value={value}
        onChange={onChange}
        height="550px"
        width="100%"
        extensions={[jsonLanguage]}
      />
      <button onClick={executeQuery}>Query</button>
    </div>
  );
}
