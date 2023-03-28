export default function hasValuesFromArray(set, array) {
  // eslint-disable-next-line no-restricted-syntax
  for (const elt of array) {
    if (!set.has(elt)) {
      return false;
    }
  }
  return true;
}
