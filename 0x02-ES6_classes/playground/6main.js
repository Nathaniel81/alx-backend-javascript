const Building = require('./5main');

class SkyHighBuilding extends Building {
	constructor(sqft, floors) {
		super(sqft);
		this.floors = floors;
	}
	set floors(val) {
		if (typeof val === 'number') {
			this._floors = val;
		} else {throw new Error();}
	}
	get floors() {
		return this._floors;
	}
	evacuationWarningMessage() {
		return `Evacuate slowly the NUMBER_OF_FLOORS ${this._floors} floors`;
	}
}


const building = new SkyHighBuilding(140, 60);
console.log(building.sqft);
console.log(building.floors);
console.log(building.evacuationWarningMessage());