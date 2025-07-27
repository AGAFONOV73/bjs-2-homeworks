class Student {
  constructor(name) {
    this.name = name;
    this.marks = {}; 
  }

  addMark(mark, subject) {
    if (typeof mark !== 'number' || mark < 2 || mark > 5) {
      console.log(`Оценка ${mark} не допустима. Она должна быть числом от 2 до 5.`);
      return;
    }
    if (!this.marks.hasOwnProperty(subject)) {
      this.marks[subject] = [];
    }
    this.marks[subject].push(mark);
  }

  getAverageBySubject(subject) {
    if (!this.marks.hasOwnProperty(subject) || this.marks[subject].length === 0) {
      return 0;
    }
    const total = this.marks[subject].reduce((sum, m) => sum + m, 0);
    return total / this.marks[subject].length;
  }
    

  getAverage() {
    const subjects = Object.keys(this.marks);
    if (subjects.length === 0) return 0;

    const totalSum = subjects.reduce((acc, subject) => acc + this.getAverageBySubject(subject), 0);
    return totalSum / subjects.length;
  }
}

const student = new Student("Олег Никифоров");
student.addMark(5, "химия");
student.addMark(5, "химия");
student.addMark(4, "физика");
student.addMark(3, "физика");
student.addMark(2, "физика"); 



const physicsAvg = student.getAverageBySubject("физика");
if (physicsAvg !== 0) {
  console.log(`Средний балл по предмету физика ${physicsAvg}`);

}else {
  console.log("По предмету физика нет оценок");
}

const biologyAvg = student.getAverageBySubject("биология");
if (biologyAvg !== 0) {
  console.log(`Средний балл по предмету биология ${biologyAvg}`);
} else {
  console.log("По предмету биология оценок нет");
}

const overallAvg = student.getAverage();
console.log(`Средний балл по всем предметам ${overallAvg}`);