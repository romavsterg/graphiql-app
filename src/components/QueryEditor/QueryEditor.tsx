import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import './QueryEditor.css';
import { jsonLanguage } from '@codemirror/lang-json';
import Tools from '../Tools/tools';
import { useGetQuery } from '../../utils/Redux/hooks/useGetQuery';
import { useActions } from '../../utils/Redux/hooks/useActions';

export default function QueryEditor() {
  // const [query, setquery] = React.useState('#Start with something simple');
  const { setApiUrl, setQuery } = useActions();
  const { query, apiUrl } = useGetQuery();
  const handleQueryChange = React.useCallback(
    (val: string) => {
      setQuery(val);
    },
    [setQuery]
  );

  const handleChangeApi = (e: React.FormEvent<HTMLSelectElement>) => {
    setApiUrl(e.currentTarget.value);
  };

  return (
    <div className="Query-editor">
      <h5>Query editor</h5>
      <select value={apiUrl} onChange={handleChangeApi} name="api-url">
        <option value="https://swapi-graphql.netlify.app/.netlify/functions/index">
          https://swapi-graphql.netlify.app/.netlify/functions/index
        </option>
        <option value="https://countries.trevorblades.com/graphql">
          https://countries.trevorblades.com/graphql
        </option>
      </select>
      <CodeMirror
        className="editor"
        theme="dark"
        value={query}
        onChange={handleQueryChange}
        height="430px"
        width="100%"
        extensions={[jsonLanguage]}
      >
        <Tools />
      </CodeMirror>
    </div>
  );
}
