class HolbertonCourse {
	constructor(name, length, students) {
		this.name = name;
		this.length = length;
		this.students = students;
	}

	get name() {
		return this._name;
	}

	set name(val) {
		if (typeof val === 'string') {
			this._name = val;
		} else {
			throw new TypeError('name must be a string');
		}
	}

	get length() {
		return this._length;
	}

	set length(val) {
		if (typeof val === 'number') {
			this._length = val;
		} else {
			throw new TypeError('length must be a number');
		}
	}

	get students(){
		return this._students;
	}

	set students(val) {
		if (val instanceof Array && val.every(item => typeof item === 'string')) {
			this._students = val;
		} else {
			throw new TypeError('students must be an array of strings');
		}
	}

}

const c1 = new HolbertonCourse("ES6", 1, ["Bob", "Jane"])
console.log(c1.name);
c1.name = "Python 101";
console.log(c1);

try {
    c1.name = 12;
} 
catch(err) {
    console.log(err);
}

try {
    const c2 = new HolbertonCourse("ES6", "1", ["Bob", "Jane"]);
}
catch(err) {
    console.log(err);
}