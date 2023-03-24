class HolbertonClass {
	constructor(size, location) {
		this.size = size;
		this.location = location;
	}
	get size() {
		return this._size;
	}
	set size(val) {
		if (typeof val === 'number') {
			this._size = val;
		} else {throw new Error()}
	}
	get location() {
		return this._location;
	}
	set location(val) {
		if (typeof val === 'string') {
			this._location = val;
		} else {throw new Error()}
	}
	valueOf() {
		return this._size;
	  }
	
	toString() {
		return this._location;
	  }
	// [Symbol.toPrimitive](hint) {
	// 	if (hint === 'number') {
	// 	  return this.size;
	// 	}
	// 	if (hint === 'string') {
	// 	  return this.location;
	// 	}
	// 	return this;
	//   }
}

const hc = new HolbertonClass(12, "Mezzanine")
console.log(Number(hc));
console.log(String(hc));