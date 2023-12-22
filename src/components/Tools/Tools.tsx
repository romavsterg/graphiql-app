import React, { useState } from 'react';
import { prettify } from '../../utils/prettify';
import { useActions } from '../../utils/Redux/hooks/useActions';
import { executeQuery } from '../../utils/executeQuery';
import { useGetQuery } from '../../utils/Redux/hooks/useGetQuery';
import ReactCodeMirror from '@uiw/react-codemirror';

export default function Tools() {
  const [variables, setVariables] = useState({ opened: false, content: '' });
  const [headers, setHeaders] = useState({ opened: false, content: '' });
  const { SetError, setResult, setQuery } = useActions();
  const { query, apiUrl } = useGetQuery();
  const handleExecute = async () => {
    const res = await executeQuery(
      apiUrl,
      query,
      variables.content,
      headers.content
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
    setHeaders({ opened: false, content: headers.content });
  };
  const handleEnableHeaders = () => {
    setHeaders({ opened: !headers.opened, content: headers.content });
    setVariables({ opened: false, content: variables.content });
  };

  const prettifyQuery = () => {
    setQuery(prettify(query));
  };

  const handleVariablesChange = React.useCallback((val: string) => {
    setVariables({ opened: true, content: val });
  }, []);
  const handleHeadersChange = React.useCallback((val: string) => {
    setHeaders({ opened: true, content: val });
  }, []);

  return (
    <div className="tools">
      <div className="tools-btns">
        <button className="btn variables-btn" onClick={handleEnableVariables}>
          Variables
        </button>
        <button className="btn variables-btn" onClick={handleEnableHeaders}>
          Headers
        </button>
      </div>
      {variables.opened && (
        <div className="variables">
          <p>Variables</p>
          <ReactCodeMirror
            value={variables.content}
            onChange={handleVariablesChange}
            className={`variables-editor ${variables.opened ? 'opened' : ''}`}
            height="150px"
            theme="dark"
          />
        </div>
      )}
      {headers.opened && (
        <div className="headers">
          <p>Headers</p>
          <ReactCodeMirror
            value={headers.content}
            onChange={handleHeadersChange}
            className={`headers-editor ${variables.opened ? 'opened' : ''}`}
            height="150px"
            theme="dark"
          />
        </div>
      )}
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
