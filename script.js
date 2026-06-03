let submit = document.querySelector(".submit");
let date = document.querySelector("#date");
let riddle = document.querySelector("#riddele");
submit.addEventListener("click", function(e) {
  
  e.preventDefault();
// ...existing code...

    // localStorage here
  localStorage.setItem(date, date.value);
  sessionStorage.setItem(riddle, riddle.value);
  
  // sessionStorage here


});
console.log(sessionStorage.getItem(riddle));