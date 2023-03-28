export default function updateUniqueItems(mapobj) {
  mapobj.forEach((val, key) => {
    if (val === 1) {
      mapobj.set(key, 100);
    }
  });
}
