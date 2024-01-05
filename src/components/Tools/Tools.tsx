import React, { useContext, useState } from 'react';
import { prettify } from '../../utils/prettify';
import { useActions } from '../../utils/Redux/hooks/useActions';
import { executeQuery } from '../../utils/executeQuery';
import { useGetQuery } from '../../utils/Redux/hooks/useGetQuery';
import ReactCodeMirror from '@uiw/react-codemirror';
import { Context } from '../Context/Context';
import { mainDictionary } from '../../dictionaries/mainDictionary';
// import { introspectionQuery } from 'graphql';

export default function Tools() {
  const context = useContext(Context);
  const [variables, setVariables] = useState({ opened: false, content: '' });
  const [headers, setHeaders] = useState({ opened: false, content: '' });
  const [Schema, setSchema] = useState({ opened: false, content: '' });
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

  const getSchema = async () => {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `{
          __schema {
            queryType {
              fields {
                name
                args {
                  name
                  type {
                    name
                  }
                }
              }
            }
          }
        }`,
      }),
    });
    const schema: string[] = [];
    const { data } = await response.json();
    console.log(data.__schema.queryType.fields);
    data.__schema.queryType.fields.forEach(
      (field: {
        name: string;
        args: [{ name: string; type: { name: string } }];
      }) => {
        const args = field.args.map(
          (arg: { name: string; type: { name: string } }) =>
            `${arg.name}: ${arg.type.name}`
        );
        schema.push(field.name + `(${args.toString().replace(/\,/g, ', ')})\n`);
      }
    );
    setSchema({
      opened: true,
      content: schema.toString(),
    });
    setHeaders({ opened: false, content: headers.content });
    setVariables({ opened: false, content: variables.content });
  };

  return (
    <div
      className={`tools ${variables.opened || headers.opened ? 'opened' : ''}`}
    >
      <div className="tools-btns">
        <button className="btn variables-btn" onClick={handleEnableVariables}>
          {
            mainDictionary[context?.language as keyof typeof mainDictionary]
              .variables
          }
        </button>
        <button className="btn variables-btn" onClick={handleEnableHeaders}>
          {
            mainDictionary[context?.language as keyof typeof mainDictionary]
              .headers
          }
        </button>
      </div>
      {variables.opened && (
        <div className="variables">
          <p>
            {
              mainDictionary[context?.language as keyof typeof mainDictionary]
                .variables
            }
          </p>
          <ReactCodeMirror
            value={variables.content}
            onChange={handleVariablesChange}
            className="variables-editor"
            height="150px"
            theme="dark"
          />
        </div>
      )}
      {headers.opened && (
        <div className="headers">
          <p>
            {
              mainDictionary[context?.language as keyof typeof mainDictionary]
                .headers
            }
          </p>
          <ReactCodeMirror
            value={headers.content}
            onChange={handleHeadersChange}
            className="headers-editor"
            height="150px"
            theme="dark"
          />
        </div>
      )}
      {Schema.opened && (
        <div className="headers">
          <p>
            {
              mainDictionary[context?.language as keyof typeof mainDictionary]
                .schema
            }
          </p>
          <ReactCodeMirror
            value={Schema.content.replace(/\,(\w)/g, '$1')}
            editable={false}
            className="headers-editor"
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
        <button className="btn btn-get-schema" onClick={getSchema}>
          <img width="30px" height="30px" src="/src/icons/book.svg" />
        </button>
      </div>
    </div>
  );
}
