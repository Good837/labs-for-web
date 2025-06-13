const openModalBtn = document.getElementById("openModalBtn");
const modal = document.getElementById("modal");
const closeModalBtn = document.getElementById("closeModalBtn");
const registrationForm = document.getElementById("registrationForm");

openModalBtn.onclick = function() {
  modal.style.display = "block";
};

closeModalBtn.onclick = function() {
  modal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

registrationForm.onsubmit = function(event) {
  event.preventDefault(); 

  const title = document.getElementById("title").value;
  const descript = document.getElementById("descript").value;
  const price = document.getElementById("price").value;
  const category = document.getElementById("category").value;

  const product = {
    title: title,
    description: descript,
    price: price,
    category: category
  };

  const products = JSON.parse(localStorage.getItem("products")) || [];
  
  products.push(product);

  localStorage.setItem("products", JSON.stringify(products));

  console.log("Product saved successfully:", product);

  modal.style.display = "none";

  registrationForm.reset();
};


function renderProducts() {
    const productsContainer = document.getElementById("productsContainer");
    productsContainer.innerHTML = "";
  
    const products = JSON.parse(localStorage.getItem("products")) || [];
  
    products.forEach((product, index) => {
      const productCard = document.createElement("div");
      productCard.classList.add("product-card");
  
      productCard.innerHTML = `
        <h3>${product.title}</h3>
        <p><strong>Description:</strong> ${product.description}</p>
        <p><strong>Price:</strong> $${product.price}</p>
        <p><strong>Category:</strong> ${product.category}</p>
        <button onclick="deleteProduct(${index})">Delete</button>
      `;
  
      productsContainer.appendChild(productCard);
    });
  }
  
//   // Функція для видалення продукту
//   function deleteProduct(index) {
//     let products = JSON.parse(localStorage.getItem("products")) || [];
//     products.splice(index, 1); // Видаляємо елемент за індексом
//     localStorage.setItem("products", JSON.stringify(products)); // Оновлюємо LocalStorage
//     renderProducts(); // Перемальовуємо список
//   }
  
  // Викликаємо renderProducts() при завантаженні сторінки
  document.addEventListener("DOMContentLoaded", renderProducts);
  