import React, { useContext, useState } from 'react';
import { prettify } from '../../utils/prettify';
import { useActions } from '../../utils/Redux/hooks/useActions';
import { executeQuery } from '../../utils/executeQuery';
import { useGetQuery } from '../../utils/Redux/hooks/useGetQuery';
import ReactCodeMirror from '@uiw/react-codemirror';
import { Context } from '../Context/Context';
import { mainDictionary } from '../../dictionaries/mainDictionary';
import { getFieldTypeByName, getFields } from '../../utils/getFields';
import { jsonLanguage } from '@codemirror/lang-json';

export default function Tools() {
  const context = useContext(Context);
  const [variables, setVariables] = useState({ opened: false, content: '' });
  const [headers, setHeaders] = useState({ opened: false, content: '' });
  const [Schema, setSchema] = useState({ opened: false, content: [''] });
  const [FieldType, setFieldType] = useState({
    opened: false,
    content: { fields: [''], name: '', path: '', end: false },
  });
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
    setSchema({
      opened: false,
      content: Schema.content,
    });
  };
  const handleEnableHeaders = () => {
    setHeaders({ opened: !headers.opened, content: headers.content });
    setVariables({ opened: false, content: variables.content });
    setSchema({
      opened: false,
      content: Schema.content,
    });
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
    const fields = await getFields(apiUrl);
    if (
      fields.__schema.types.filter(
        (type: { name: string }) => type.name === 'Root'
      )[0]
    ) {
      const schema = fields.__schema.types
        .filter((type: { name: string }) => type.name === 'Root')[0]
        .fields.map((field: { name: string }) => field.name);
      setSchema({
        opened: !Schema.opened,
        content: schema,
      });
    } else {
      const schema = fields.__schema.types.map(
        (field: { name: string }) => field.name
      );
      setSchema({
        opened: !Schema.opened,
        content: schema,
      });
    }
    setFieldType({
      opened: false,
      content: { fields: [''], path: '', name: '', end: false },
    });
    setHeaders({ opened: false, content: headers.content });
    setVariables({ opened: false, content: variables.content });
  };

  const getFieldSchema = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const fieldName =
      e.currentTarget.textContent
        ?.replace(/(\w)\(.*\)\n/, '$1')
        .replace(/\n/, '') || '';
    const { fields, name, path, end } = await getFieldTypeByName(
      apiUrl,
      fieldName,
      FieldType.content.path.split('/')
    );
    setFieldType({ opened: true, content: { fields, name, path, end } });
    setSchema({ opened: false, content: Schema.content });
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
            id="vars"
            value={variables.content}
            onChange={handleVariablesChange}
            className="variables-editor"
            extensions={[jsonLanguage]}
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
            id="headers"
            value={headers.content}
            onChange={handleHeadersChange}
            className="headers-editor"
            height="150px"
            extensions={[jsonLanguage]}
            theme="dark"
          />
        </div>
      )}
      {Schema.opened && (
        <div className="schema">
          <p>
            {
              mainDictionary[context?.language as keyof typeof mainDictionary]
                .schema
            }
          </p>
          <div className="fields">
            {Schema.content.map((field) => (
              <button
                className="btn field-btn"
                key={field}
                onClick={getFieldSchema}
              >
                {field.toString()}
              </button>
            ))}
          </div>
        </div>
      )}
      {FieldType.opened && (
        <div className="schema">
          <p>{FieldType.content.name}</p>
          <div className="fields">
            {FieldType.content.fields.map((field) => (
              <button
                className="btn field-btn"
                key={field}
                onClick={getFieldSchema}
                disabled={FieldType.content.end}
              >
                {field.toString()}
              </button>
            ))}
          </div>
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
