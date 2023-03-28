export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  let result = '';
  let foundValues = false;
  // eslint-disable-next-line no-restricted-syntax
  for (const value of set) {
    if (value.startsWith(startString)) {
      result += `${value.slice(startString.length)}-`;
      foundValues = true;
    }
  }
  return foundValues ? result.slice(0, -1) : '';
}
