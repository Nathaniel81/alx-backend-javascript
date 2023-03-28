export default function getListStudentIds(arr) {
  if (Array.isArray(arr)) {
    const newArr = arr.map((val) => val.id);
    return newArr;
  }
  return [];
}
