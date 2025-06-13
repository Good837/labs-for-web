//Завдання 1
function validateCardNumber(cardNumber) {
    const regex = /^[45]\d{15}$/;
  
    console.log(cardNumber);

    if (regex.test(cardNumber)) {
      console.log('Card number is correct!');
    } else {
      console.log('Card number is not correct!');
    }
  }

  validateCardNumber("4123456789012345"); 
  validateCardNumber("5123456789012345"); 
  validateCardNumber("6123456789012345"); 
  validateCardNumber("41234567890123");
  
// Завдання 2
//   function checkEmail(email) {
//     const regex = /^[a-zA-Z0-9]+([_-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;
  
//     if (regex.test(email)) {
//       console.log('Email is correct!');
//     } else {
//       console.log('Email is not correct!');
//     }
//   }
  
//   const userEmail = prompt("Enter your email address:");
//   checkEmail(userEmail);
  
  