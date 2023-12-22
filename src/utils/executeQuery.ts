export const executeQuery = async (
  apiUrl: string,
  value: string,
  variables = '',
  headers = ''
) => {
  try {
    const res = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        ...(headers ? JSON.parse(headers) : null),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `query ${value.startsWith(`{`) ? `Query ${value}` : value}`,
        variables: variables ? variables : null,
      }),
    });
    const json = await res.json();
    if (json.errors) {
      return { isError: true, message: json.errors[0].message };
    } else {
      return json.data;
    }
  } catch (e) {
    if (typeof e === 'string') {
      return { isError: true, message: e };
    } else if (e instanceof Error) {
      return { isError: true, message: e.message };
    }
  }
};
