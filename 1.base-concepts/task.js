"use strict"
function solveEquation(a, b, c) {
	const discriminant = b ** 2 - 4 * a * c;
	let arrs = [];

	if (discriminant < 0) {
		return arrs;
	} else if (discriminant === 0) {
		let arr = -b / (2 * a);
		arrs.push(arr);
		return arrs;
	} else {
		const sqrtD = Math.sqrt(discriminant);
		let arr1 = (-b + sqrtD) / (2 * a);
		let arr2 = (-b - sqrtD) / (2 * a);
		arrs.push(arr1, arr2);
		return arrs;
	}
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
}
