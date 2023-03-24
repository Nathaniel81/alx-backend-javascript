class Airport {
	constructor(name, code) {
		this.name = name;
		this.code = code;
	}
	set name(val) {
		if (typeof val === 'string') {
			this._name = val;
		} else {throw new Error()}
	}
	get name() {
		return this._name;
	}
	set code(val) {
		if (typeof val === 'string') {
			this._code = val;
		} else {throw new Error()}
	}
	get code() {
		return this._code;
	}
	get [Symbol.toStringTag]() {
		return this._code;
	}
}

const airportSF = new Airport('San Francisco Airport', 'SFO');
console.log(airportSF);
console.log(airportSF.toString());