export const prettify = (query: string) => {
  let indent = 0;
  let prettified = '';
  let newQuery = query.replace(/[\{\[]]/g, '{\n');
  newQuery = newQuery.replace(/([^\s])[\t\n\s]{2,}([^\s])/g, '$1\n$2');
  const lines = newQuery.split('\n');

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    line = line.replace(/[\s\t\n]*/g, '');
    for (let j = 0; j < line.length; j++) {
      const char = line[j];
      if (char === '{' || char === '[') {
        indent++;
        prettified +=
          (j !== 0 ? ' ' : '') + char + '\n' + ' '.repeat(indent * 2);
      } else if (char === '}' || char === ']') {
        indent--;
        prettified += '\n' + ' '.repeat(indent * 2) + char + ' ';
      } else if (
        j === line.length - 1 &&
        lines[i + 1] &&
        lines[i + 1][0] !== '}'
      ) {
        prettified += char + '\n' + ' '.repeat(indent * 2);
      } else if (char === ',') {
        prettified += char + '\n' + ' '.repeat(indent * 2);
      } else {
        prettified += char;
      }
    }
  }
  prettified = prettified.replace(/(?<![^(]){/g, ' {');
  prettified = prettified.replace(/^\s\{\n/g, '{\n');
  return prettified.replace(/\#[\s a-zA-Z]*/g, '');
};
