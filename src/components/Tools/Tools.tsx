import React, { useState } from 'react';
import { prettify } from '../../utils/prettify';
import { useActions } from '../../utils/Redux/hooks/useActions';
import { executeQuery } from '../../utils/executeQuery';
import { useGetQuery } from '../../utils/Redux/hooks/useGetQuery';
import ReactCodeMirror from '@uiw/react-codemirror';

export default function Tools() {
  const [variables, setVariables] = useState({ opened: false, content: '' });
  const { SetError, setResult, setQuery } = useActions();
  const { query, apiUrl } = useGetQuery();
  const handleExecute = async () => {
    const res = await executeQuery(
      apiUrl,
      query,
      variables.content ? variables.content : undefined
    );
    if (res.isError) {
      SetError(res);
    } else {
      setResult(res);
      SetError({ isError: false, message: '' });
    }
  };
  const handleEnableVariables = () => {
    setVariables({ opened: !variables.opened, content: variables.content });
  };

  const prettifyQuery = () => {
    setQuery(prettify(query));
  };

  const handleVariablesChange = React.useCallback((val: string) => {
    setVariables({ opened: true, content: JSON.parse(val) });
  }, []);

  return (
    <div className={`tools ${variables.opened ? 'opened' : ''}`}>
      <div className="tools-btns">
        <button className="btn variables-btn" onClick={handleEnableVariables}>
          Variables
        </button>
        <button className="btn variables-btn">Headers</button>
      </div>
      <div className="variables">
        <ReactCodeMirror
          onChange={handleVariablesChange}
          className="variables-editor"
          height="150px"
          theme="dark"
        />
      </div>
      <div className="btns">
        <button className="btn btn-query" onClick={handleExecute}>
          &#9658;
        </button>
        <button className="btn btn-prettify" onClick={prettifyQuery}>
          <img width="30px" height="30px" src="/src/icons/broomstick.svg" />
        </button>
      </div>
    </div>
  );
}
