function parseCount(value) {
	const result = Number.parseFloat(value);
	if (isNaN(result)) {
		throw new Error("Невалидное значение");
	}
	return result;
}

function validateCount(value) {
	try {
		return parseCount(value);
	} catch (error) {
		return error;
	}
}

console.log(validateCount("3.14")); 
console.log(validateCount("api"));  



class Triangle {
	constructor(a, b, c) {
		if (a + b <= c || a + c <= b || b + c <= a) {
			throw new Error("Треугольник с такими сторонами не существует");
		}
		this._perimeter = a + b + c;
        const p = this._perimeter / 2;
		const areaValue = Math.sqrt(p * (p - a) * (p - b) * (p - c));
		this._area = parseFloat(areaValue.toFixed(3));
	}

	get perimeter() {
		return +this._perimeter;
	}

	get area() {
		return +this._area;
	}
}

function getTriangle(a, b, c) {
	try {
		const triangle = new Triangle(a, b, c);
		return triangle;
	} catch (e) {
		return {
			get perimeter() {
				return "Ошибка! Треугольник не существует";
			},
			get area() {
				return "Ошибка! Треугольник не существует";
			}
		};
	}
}


const t1 = getTriangle(5, 5, 5);
console.log(t1.perimeter); 
console.log(t1.area);      

const t2 = getTriangle(1, 2, 10);
console.log(t2.perimeter); 
console.log(t2.area);      