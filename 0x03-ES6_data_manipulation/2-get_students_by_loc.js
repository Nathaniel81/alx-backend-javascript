export default function getStudentsByLocation(listOfStd, city) {
  return listOfStd.filter((o) => o.location === city);
}
