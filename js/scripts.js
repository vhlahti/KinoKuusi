// Navigation toggle animation

const toggleButton = document.querySelector(".toggle-button");
const navbarLinks = document.querySelector(".navbar-links");

toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("active");
  navbarLinks.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  toggleButton.classList.remove("active");
  navbarLinks.classList.remove("active");
}))

//Adding a timer to change the images automatically
//var counter = 1;
//    setInterval(function()  {
//      document.getElementById('radio'+ counter).checked = true;
//      counter++; 
//
//      if(counter>4){  //4 means it slides through all the 4 pictures
//        counter=1
//      }
//
//    }, 5000);

//What week is it
currentDate = new Date();
startDate = new Date(currentDate.getFullYear(), 0, 1);
var days = Math.floor((currentDate - startDate) /
  (24 * 60 * 60 * 1000));
  
var weekNumber = Math.ceil(days / 7);
var weekNro = document.createTextNode(weekNumber);
var week = document.getElementById("thisweek");	
week.appendChild(weekNro);