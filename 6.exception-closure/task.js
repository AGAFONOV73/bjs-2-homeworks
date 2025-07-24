function parceCount(value) {
    const result = Number.parseFloat(value);
    if (Number.isNaN(result)) {
    throw new Error ("Невалидное значение")
}
return result;
}

function validateCount(value) {
    try {
        return parceCount(value);
    }
    catch (error) {
        return error;
    }
}

console.log(validateCount("3.14"));
console.log(validateCount("api")); 


class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c
    
    if (a + b < c || a + c < b || b + c < a) {
        throw new Error("Треугольник с такими сторонами не существует");
    }
}
get perimeter () {
return this.a + this.b + this.c;
}
get area () {
    const p = this.perimeter / 2;
    const areaValue = Math.sqrt(p *(p - this.a) * (p - this.b) * (p - this.c));
    return areaValue.toFixed(3);
}
}

try {
    const tri = new Triangle(5, 5, 5);
    console.log("Периметр:", tri.perimeter); 
    console.log("Площадь:", tri.area);       
  } catch (e) {
    console.error(e.message);
  }