const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const slideContainer = $(".slides");
const slideImages = [...$$(".slide")];

slideContainer.style.width = `${slideImages.length * 330}px`;

$("#next").addEventListener("click", () => {
  next();
});
$("#prev").addEventListener("click", () => {
  prev();
});

let index = 0;

function next() {
  if (index < 4) index++;
  else index = 0;
  slideContainer.style.transform = `translateX(-${330 * index}px)`;
}

function prev() {
  if (index == 0) index = slideImages.length - 1;
  else index--;
  slideContainer.style.transform = `translateX(-${330 * index}px) `;
}

setInterval(() => {
  next();
}, 3 * 1000);
