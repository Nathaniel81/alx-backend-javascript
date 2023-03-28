export default function cleanSet(set, startString) {
  if (
    !set
    || !startString
    || !(set instanceof Set)
    || typeof startString !== 'string'
  ) {
    return '';
  }
  const subString = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const elem of set.values()) {
    if (typeof elem === 'string' && elem.startsWith(startString)) {
      const sub = elem.substring(startString.length);
      if (sub) {
        subString.push(sub);
      }
    }
  }
  return subString.join('-');
}
