const Currency = require('./3main');

class Pricing {
	constructor(amount, currency) {
		this.amount = amount;
		this.currency = currency;
	}
	get amount() {
		return this._amount;
	}
	set amount(val) {
		if (typeof val !== 'number') {
			throw new TypeError('amount must be a number');
		}
		this._amount = val;
	}
	get currency() {
		return this._currency;
	}
	set currency(val) {
		if (!(val instanceof Currency)) {
			throw new TypeError('currency must be an instance of Currency');
		}
		this._currency = val;
	}
	displayFullPrice() {
		return `${this._amount} ${this._currency.displayFullCurrency()}`;
	}
	static convertPrice(amount, conversionRate) {
		if (typeof amount === 'number' && typeof conversionRate === 'number') {
			return amount * conversionRate;
		}
		throw new TypeError();
	}
}

const p = new Pricing(100, new Currency("EUR", "Euro"))
console.log(p);
console.log(p.displayFullPrice());