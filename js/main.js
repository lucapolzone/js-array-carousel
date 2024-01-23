// Elementi HTML

const wrapperSlides = document.querySelector(".wrapper_slides");
const arrowUp = document.getElementById("arrow-up");
const arrowDown = document.getElementById("arrow-down");

// Creo array delle immagini

const slides = [
  "01.webp",
  "02.webp",
  "03.webp",
  "04.webp",
  "05.webp"
];

//Seleziono l'immagine che mostro
let slideShowed = 0;

//genero le slides
let slidesHtml;

for (let i = 0; i < slides.length; i++) {
  //recupero ogni elemento
  const singleSlide = slides[i];

  let classActive;
  if (i== slideShowed) {
    classActive = "active";
  }

  //inserisco in html
  slidesHtml += `<img src="./img/${singleSlide}" class="slide ${classActive}">`
}


//CAROUSEL TIMER 

let carouselTimer = setInterval(function(){

  // Rimuovo la classe "active" dalla slide corrente
  const currentSlide = document.querySelector(".active");  
  currentSlide.classList.remove("active");  

  if (slideShowed >= slides.length - 1) {
    slideShowed = 0;
  } else {
    slideShowed++;
  }

  //Aggiungo la classe "active" alla nuova slide
  const slideImg = document.getElementsByClassName("slide");
  const newSlide = slideImg[slideShowed];
  newSlide.classList.add("active");
}, 3000)

let stopScroll = clearInterval(function () {

});



//* Bottone DOWN

arrowDown.addEventListener("click", function(){
  // elimino classe active dalla slide attualmente mostrata
  const currentSlide = document.querySelector(".slide.active");
  currentSlide.classList.remove("active");

  // Questo serve per far tornare il carousel alla slide iniziale 
  if (slideShowed >= slides.length - 1) {
    slideShowed = 0;
  } else {
    slideShowed++; //questo fa avanzare il carousel
  }


  // mostro la nuova slide, aggiungendo la classe active
  
  // array/HTML-collection
  const slideImg = document.getElementsByClassName("slide");
  
  const newSlide = slideImg[slideShowed];
  newSlide.classList.add("active");
});


//* Bottone UP

arrowUp.addEventListener ("click", function(){
  const currentSlide = document.querySelector(".slide.active");
  currentSlide.classList.remove("active");

  if (slideShowed <= 0) {
    slideShowed = slides.length - 1;
  } else {
    slideShowed--; 
  }
  
  // array/HTML-collection
  const slideImg = document.getElementsByClassName("slide");

  const newSlide = slideImg[slideShowed];
  newSlide.classList.add("active");

});