import React, { useContext } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import './QueryEditor.css';
import { jsonLanguage } from '@codemirror/lang-json';
import Tools from '../Tools/Tools';
import { useGetQuery } from '../../utils/Redux/hooks/useGetQuery';
import { useActions } from '../../utils/Redux/hooks/useActions';
import { Context } from '../Context/Context';
import { mainDictionary } from '../../dictionaries/mainDictionary';

export default function QueryEditor() {
  const context = useContext(Context);
  const { setApiUrl, setQuery } = useActions();
  const { query, apiUrl } = useGetQuery();
  const handleQueryChange = React.useCallback(
    (val: string) => {
      setQuery(val);
    },
    [setQuery]
  );

  const handleChangeApi = (e: React.FormEvent<HTMLInputElement>) => {
    setApiUrl(e.currentTarget.value);
  };

  return (
    <div className="Query-editor">
      <h5>
        {
          mainDictionary[context?.language as keyof typeof mainDictionary]
            .QueryEditor
        }
      </h5>
      <div className="apiUrl-change">
        <p>
          {
            mainDictionary[context?.language as keyof typeof mainDictionary]
              .ApiUrl
          }
        </p>
        <input
          type="text"
          value={apiUrl}
          onChange={handleChangeApi}
          className="apiUrl-change"
          placeholder="API URL"
        />
      </div>
      <CodeMirror
        id="editor"
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
