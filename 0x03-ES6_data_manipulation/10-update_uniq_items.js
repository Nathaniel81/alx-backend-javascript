export default function updateUniqueItems(mapobj) {
  if (!(mapobj instanceof Map)) {
    throw new Error('Cannot process');
  }
  mapobj.forEach((val, key) => {
    if (val === 1) {
      mapobj.set(key, 100);
    }
  });
}
