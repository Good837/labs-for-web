class Student {
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }

    study() {
        console.log(`${this.name}, вік: ${this.age}, навчається на оцінку ${this.grade}.`);
    }
}

const student1 = new Student('Петро', 16, '4');
const student2 = new Student('Іван', 18, '3');
const student3 = new Student('Поліна', 18, '5');

student1.study();
student2.study();
student3.study();
