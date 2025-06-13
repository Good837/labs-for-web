//Завдання 1.1
const student = { name: "Sofiya", age: 18, gender: "female" };
const { name: studentName, age: studentAge, gender: studentGender } = student;

console.log("Task 1.1");
console.log(studentName);
console.log(studentAge);
console.log(studentGender);

//Завдання 1.2
const car = { engine: { cylinders: 4, horsepower: 150 } };
const { engine: { cylinders: engineCylinders, horsepower: engineHorsepower } } = car;

console.log("Task 1.2");
console.log(engineCylinders);
console.log(engineHorsepower);

//Завдання 1.3
const book = { title: "1984", author: "George Orwell" };
const { title: bookTitle, author: bookAuthor } = book;

console.log("Task 1.3");
console.log(bookTitle);
console.log(bookAuthor);

//Завдання 2.1
const numbers = [1, 2, 3];
const [firstNumber, secondNumber, thirdNumber] = numbers;

console.log("Task 2.1");
console.log(firstNumber);
console.log(secondNumber);
console.log(thirdNumber);

//Завдання 2.2
const fruits = ['apple', 'orange', 'banana'];
const [firstFruit, ...restFruits] = fruits;

console.log("Task 2.2");
console.log(firstFruit);
console.log(restFruits);

//Завдання 2.3
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArray = [...arr1, ...arr2];

console.log("Task 2.3");
console.log(combinedArray);

//Завдання 3
function capitalizeWords(str) {
    return str
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}
console.log("Task 3");
console.log(capitalizeWords('i like java script'));

//Завдання 4
function toCamelCase(cssProperty) {
    return cssProperty.split('-').map((word, index) => 
        index === 0 ? word : word[0].toUpperCase() + word.slice(1)
    ).join('');
}
console.log("Task 4");
console.log(toCamelCase('font-size'));
console.log(toCamelCase('background-color'));
console.log(toCamelCase('text-align'));

