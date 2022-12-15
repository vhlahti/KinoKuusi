const container = document.querySelector(".salikartta");
const seats = document.querySelectorAll(".row .seat:not(.sold)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");

if(localStorage != null) {
    localStorage.clear();
}

populateUI()

let ticketPrice = +movieSelect.nodeValue;

function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem("selectedMovieIndex", movieIndex);
    localStorage.setItem("selectedmoviePrice", moviePrice);
}

function updateSelectedCount() { 
    if (movieSelect.value != 0) {
    const selectedSeats = document.querySelectorAll(".row .seat.selected");

    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));

    localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));

    const selectedSeatsCount = selectedSeats.length;

    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;

    setMovieData(movieSelect.selectedIndex, movieSelect.value);

    document.getElementById("movie").options[1].disabled = true;

    } else {
        alert("Valitse ensin lippusi");
    }
}

function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));

    if (selectedSeats !== null && selectedSeats.length > -1){
        seats.forEach((seat, index) => {
            if (selectedSeats.indexOf(index) > -1){
                seat.classList.add("selected");
            }
        });
    }

    const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");

    if(selectedMovieIndex !== null){
        movieSelect.selectedIndex = selectedMovieIndex;
    }
}

movieSelect.addEventListener("change", (e) => {
    ticketPrice = +e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCount();
});

container.addEventListener("click", (e) => {
    if(
        e.target.classList.contains("seat") &&
        !e.target.classList.contains("sold")
    ){
        e.target.classList.toggle("selected");

        updateSelectedCount();
    }

})




//peruutusnappi joka poistaa valitut paikat
function peruuta() {
    const selectedSeats = document.querySelectorAll(".row .seat.selected");
    
    let seats = 0;
    for (let i = 0; i < selectedSeats.length; i++) {
        seats++;
    }

    if (seats > 0 && confirm("Haluatko varmasti perua valitut paikat?") === true) {
            for (let i = 0; i < selectedSeats.length; i++) {
                selectedSeats[i].classList.remove('selected');
            }
    }
    updateSelectedCount();
    
}

// estää siirtymästä eteenpäin ilman valittuja paikkoja ja jos valittu paikat niin siirtyy eteenpäin
function varaa() {
    const selectedSeats = document.querySelectorAll(".row .seat.selected");
            const notChosenSeats = document.querySelector('.notChosenSeats');
            notChosenSeats.innerHTML = 'Et ole valinnut yhtään paikkaa!';
        for (let i = 1; i < selectedSeats.length + 1; i++) {
            if (i > 0) {
                window.location.replace("./nextstep/varaus.html");
            } 
    }
}

function osta() {
    const selectedSeats = document.querySelectorAll(".row .seat.selected");
            const notChosenSeats = document.querySelector('.notChosenSeats');
            notChosenSeats.innerHTML = 'Et ole valinnut yhtään paikkaa!';
        for (let i = 1; i < selectedSeats.length + 1; i++) {
            if (i > 0) {
                window.location.replace("./nextstep/osta.html");
            } 
    }
}

