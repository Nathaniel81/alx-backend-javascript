function divideFunction(numerator, denominator) {
	if (denominator) {
	  return numerator / denominator;
	}
	throw new Error('cannot divide by 0');
  }

function guardrail(mathFunction) {
	const queue = [];

	try { queue.push(mathFunction()); }
	catch(error) { queue.push(String(error)); }
	finally { queue.push('Guardrail was processed'); }

	return queue;
}


console.log(guardrail(() => { return divideFunction(10, 2)}));
console.log(guardrail(() => { return divideFunction(10, 0)}));
