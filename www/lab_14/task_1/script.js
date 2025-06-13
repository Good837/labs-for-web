//Завдання 1
// let result = cities.join("*"); 
// console.log(result); 


//Завдання 2
//через for
// let numbers = [2, 3, 4, 5];
// let product = 1; // Початкове значення добутку

// for (let i = 0; i < numbers.length; i++) {
//     product *= numbers[i];
// }

// console.log(product); 

//через while
// let numbers = [2, 3, 4, 5];
// let product = 1;
// let i = 0;

// while (i < numbers.length) {
//     product *= numbers[i];
//     i++;
// }

// console.log(product); 

//Завдання 3
// function findMin() {
//     if (arguments.length === 0) {
//         throw new Error("At least one argument is required");
//     }
//     let min = arguments[0];
//     for (let i = 1; i < arguments.length; i++) {
//         if (arguments[i] < min) {
//             min = arguments[i];
//         }
//     }
//     return min;
// }

// console.log(findMin(12, 14, 4, -4, 0.2)); 

//Завдання 4
// function findUnique(arr) {
//     let uniqueSet = new Set(arr);
//     return uniqueSet.size === arr.length;
// }

// console.log(findUnique([1, 2, 3, 5, 3])); 
// console.log(findUnique([1, 2, 3, 5, 11])); 

//Завдання 5
let shoppingList = [
    { name: "Milk", quantity: 2, bought: false },
    { name: "Bread", quantity: 1, bought: true },
    { name: "Eggs", quantity: 10, bought: false },
    { name: "Butter", quantity: 1, bought: true }
];

function showShoppingList() {
    shoppingList.sort((a, b) => a.bought - b.bought);
    console.log("Shopping List:");
    shoppingList.forEach(item => {
        console.log(`${item.name} - ${item.quantity} pcs - ${item.bought ? "Bought" : "Not bought"}`);
    });
}

function addToShoppingList(productName, quantity) {
    let product = shoppingList.find(item => item.name.toLowerCase() === productName.toLowerCase());

    if (product) {
        product.quantity += quantity;
    } else {
        shoppingList.push({ name: productName, quantity: quantity, bought: false });
    }
}

function buyProduct(productName) {
    let product = shoppingList.find(item => item.name.toLowerCase() === productName.toLowerCase());

    if (product) {
        product.bought = true;
    } else {
        console.log(`Product "${productName}" not found in the shopping list.`);
    }
}

console.log("Before:");
showShoppingList();

console.log("\nAdding 3 Apples:");
addToShoppingList("Apples", 3);
showShoppingList();

console.log("\nBuying Eggs:");
buyProduct("Eggs");
showShoppingList();


