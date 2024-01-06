import { executeQuery } from './executeQuery';

export const getFields = async (apiUrl: string) => {
  const schema = await executeQuery(
    apiUrl,
    `{
      __schema {
        types {
          name
          fields {
            name
            type {
              name
              ofType {
                name
                fields {
                  name
                }
              }
            }
          }
        }
      }
    }`
  );
  return schema;
};

export const getFieldTypeByName = async (
  apiUrl: string,
  fieldName: string,
  path: string[]
): Promise<{ name: string; fields: string[]; path: string; end: boolean }> => {
  const typesSchema = await getFields(apiUrl);
  if (path[1] && path[1] !== '') {
    const type = typesSchema.__schema.types.filter(
      (type: { name: string }) => type.name === path[path.length - 1]
    )[0];
    const fieldType = type.fields.filter(
      (field: { name: string; type: { name: string } }) =>
        !path[2] ? field.name === fieldName : field.name === fieldName
    )[0].type;
    const fields =
      fieldType.ofType && fieldType.ofType.fields
        ? fieldType.ofType.fields.map((field: { name: string }) => field.name)
        : [
            `type: ${
              fieldType.name !== null ? fieldType.name : fieldType.ofType.name
            }`,
          ];
    return {
      fields,
      name: fieldType.ofType !== null ? fieldType.ofType.name : fieldName,
      path:
        path +
        '/' +
        (fieldType.ofType !== null ? fieldType.ofType.name : fieldType.name),
      end: fieldType.ofType === null || fieldType.ofType.fields === null,
    };
  } else {
    let typeName: string;
    let fields = [''];
    let fieldType = { name: '', fields: [{ name: '' }] };
    if (
      typesSchema.__schema.types.filter(
        (type: { name: string }) => type.name === 'Root'
      )[0]
    ) {
      typeName = typesSchema.__schema.types
        .filter((type: { name: string }) => type.name === 'Root')[0]
        .fields.filter((field: { name: string }) => field.name === fieldName)[0]
        .type.name;
      fieldType = typesSchema.__schema.types.filter(
        (type: { name: string }) => type.name === typeName
      )[0];
      fields = fieldType.fields.map((field: { name: string }) => field.name);
    } else {
      console.log(typesSchema.__schema.types);
      fieldType = typesSchema.__schema.types.filter(
        (type: { name: string }) => type.name === fieldName
      )[0];
      fields =
        fieldType.fields !== null
          ? fieldType.fields.map((field: { name: string }) => field.name)
          : ['No fields found'];
    }
    return {
      name: fieldType.name,
      fields,
      path: path + '/' + fieldType.name,
      end: false,
    };
  }
};
