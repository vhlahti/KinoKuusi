const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", popMenu);

function popMenu() {
    navbarLinks.classList.toggle("active");
}

//Adding a timer to change the images automatically
var counter = 1;
    setInterval(function()  {
      document.getElementById('radio'+ counter).checked = true;
      counter++; 

      if(counter>4){  //4 means it slides through all the 4 pictures
        counter=1
      }

    }, 5000);

//What week is it
currentDate = new Date();
startDate = new Date(currentDate.getFullYear(), 0, 1);
var days = Math.floor((currentDate - startDate) /
  (24 * 60 * 60 * 1000));
  
var weekNumber = Math.ceil(days / 7);
var weekNro = document.createTextNode(weekNumber);
var week = document.getElementById("thisweek");	
week.appendChild(weekNro);