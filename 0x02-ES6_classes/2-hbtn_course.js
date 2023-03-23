export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  get length() {
    return this._length;
  }

  set length(len) {
    if (typeof len === 'number') {
      this._length = len;
    } else {
      throw new TypeError('Length must be a number');
      }
    }

  get students() {
    return this._students;
  }

  set students(val) {
    if (Array.isArray(val) && val.every(item => typeof item === 'string')) {
      this._students = val;
    } else {
      throw new TypeError("Students must be an array of strings");
      }
    }
}
