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

