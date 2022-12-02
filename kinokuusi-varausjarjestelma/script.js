const container = document.querySelector(".salikartta");
const seats = document.querySelectorAll(".row .seat:not(.sold)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");

populateUI()

let ticketPrice = +movieSelect.nodeValue;

function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem("selectedMovieIndex", movieIndex);
    localStorage.setItem("selectedmoviePrice", moviePrice);
}

function updateSelectedCount(){
    const selectedSeats = document.querySelectorAll(".row .seat.selected");

    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));

    localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));

    const selectedSeatsCount = selectedSeats.length;

    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;

    setMovieData(movieSelect.selectedIndex, movieSelect.value);
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


//varausnappi teksti vaihtaa väriä (testi et script tekee jotain)

function doSomething(){
    const thanks = document.getElementById('btn-varaa');
    thanks.classList.add('color');
}