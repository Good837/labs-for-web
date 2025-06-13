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

  console.log("Created Successful");
  console.log("Title:", title);
  console.log("Description:", descript);
  console.log("Price:", price);
  console.log("Category:", category);

  modal.style.display = "none";
};
