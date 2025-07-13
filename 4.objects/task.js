function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

const student1 = new Student("Василиса", "женский", "19");
const student2 = new Student("Артём", "мужской", "25");
const student3 = new Student("Наталья", "женский", "30");

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    if (this.hasOwnProperty('marks') && Array.isArray(this.marks)) {
        this.marks.push(...marks);
      } else {
        console.log('Добавление оценок невозможно: студент отчислен или свойства marks нет.');
}
}
Student.prototype.getAverage = function () {
    if (!this.hasOwnProperty('marks') || !Array.isArray(this.marks) || this.marks.length === 0) {
        return 0;
}
const sum = this.marks.reduce((acc, mark) => acc + mark, 0);
  return sum / this.marks.length;
}
Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    
    
    this.excluded = reason;
}

student1.setSubject("Математика");
student1.addMarks(4, 5, 4);
console.log(student1);

console.log(student1.getAverage());

student1.exclude('Хорошая успеваемость');
console.log(student1);
