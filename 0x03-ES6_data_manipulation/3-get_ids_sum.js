export default function getStudentIdsSum(o) {
  return o.reduce((accumulator, currentValue) => accumulator + currentValue.id, 0);
}
