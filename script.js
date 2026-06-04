let submit = document.querySelector(".submit");
let date = document.querySelector("#date");
let riddle = document.querySelector("#riddle");

submit.addEventListener("click", function (e) {
  
  e.preventDefault();

  
  localStorage.setItem("local storage", date.value);

  
  sessionStorage.setItem("riddle", riddle.value);

  
  console.log(sessionStorage.getItem("riddle"));
});