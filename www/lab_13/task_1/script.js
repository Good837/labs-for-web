// Завдання 1
// let x = 1;
// let y = 2;

// let res1 = x + "" + y; 
// console.log(res1); 
// console.log(typeof res1); 

// let res2 = String(x < y) + y; 
// console.log(res2); 
// console.log(typeof res2); 

// let res3 = x < y; 
// console.log(res3); 
// console.log(typeof res3); 

// let res4 = "text" / y; 
// console.log(res4); 
// console.log(typeof res4); 


//Завдання 2
// let number = prompt("Введіть число:");
// number = Number(number); 

// if (!isNaN(number)) { 
//     let isEvenPositive = number > 0 && number % 2 === 0;
//     let isMultipleOf7 = number % 7 === 0;

//     console.log(`Число ${number} є парним додатним: ${isEvenPositive}`);
//     console.log(`Число ${number} є кратним 7: ${isMultipleOf7}`);
// } else {
//     console.log("Ви ввели некоректні дані");
// }


// Завдання 3
// let age = prompt("Введіть ваш вік:");
// let isAdult = Number(age); 

// if (!isNaN(isAdult) && isAdult > 0) { 
//     if (isAdult >= 18) {
//         console.log("Ви досягли повнолітнього віку.");
//     } else {
//         console.log("Ви ще надто молоді.");
//     }
// } else {
//     console.log("Будь ласка, введіть коректний вік.");
// }


// Завдання 4
// let a = prompt("Введіть довжину першої сторони трикутника:");
// let b = prompt("Введіть довжину другої сторони трикутника:");
// let c = prompt("Введіть довжину третьої сторони трикутника:");

// a = Number(a);
// b = Number(b);
// c = Number(c);

// function isValidTriangle(a, b, c) {
//     return !isNaN(a) && !isNaN(b) && !isNaN(c) && a > 0 && b > 0 && c > 0 &&
//            (a + b > c) && (a + c > b) && (b + c > a);
// }

// if (isValidTriangle(a, b, c)) {
//     let s = (a + b + c) / 2;
//     let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    
//     console.log(`Площа трикутника: ${area.toFixed(3)}`);

//     let sides = [a, b, c].sort((x, y) => x - y); 
//     let isRightTriangle = Math.abs(sides[0] ** 2 + sides[1] ** 2 - sides[2] ** 2) < 1e-10;

//     console.log(`Чи є трикутник прямокутним: ${isRightTriangle}`);
// } else {
//     console.log("Incorrect data");
// }

//Завдання 5
let currentHour = new Date().getHours(); 
let greeting;

switch (true) {
    case (currentHour >= 23 || currentHour < 5):
        greeting = "Доброї ночі";
        break;
    case (currentHour >= 5 && currentHour < 11):
        greeting = "Доброго ранку";
        break;
    case (currentHour >= 11 && currentHour < 17):
        greeting = "Добрий день";
        break;
    default:
        greeting = "Добрий вечір";
}

console.log(greeting);

