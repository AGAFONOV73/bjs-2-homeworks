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
		this.a = a;
		this.b = b;
		this.c = c;
	}

	get perimeter() {
		return this.a + this.b + this.c;
	}

	get area() {
		const p = this.perimeter / 2; 
		const areaValue = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
		return areaValue.toFixed(3);
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