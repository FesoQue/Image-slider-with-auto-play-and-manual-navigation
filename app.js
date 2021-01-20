const slides = document.querySelector(".slides");
const contents = document.querySelectorAll(".content");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const slideWrapper = document.querySelector(".slides-wrapper");
const navDots = document.querySelector(".navigation-dots");

let counter = 0;
let slideLength = contents.length;

contents.forEach((content, index) => {
  content.style.left = `${index * 100}%`;
  contents[0].classList.add("active");
});


const nextClickHandler = () => {
  counter++;
  if (counter >= slideLength) {
    counter = 0;
  }
  slideImage(counter);
};

const prevClickHandler = () => {
    counter--;
  if (counter < 0) {
    counter = slideLength - 1;
  }
  slideImage(counter);
}

function slideImage(args) {
    slides.style.transform = `translateX(-${args * 100}%)`;
    
    setActiveClass();
}

//set active class
function setActiveClass() {
    // set active class for the slides images
    let currentActive = document.querySelector(".content.active");
    currentActive.classList.remove("active");
    contents[counter].classList.add("active");
  
    // set active dot for the slides
    const activeDot = document.querySelector(".nav-dot.active");
    activeDot.classList.remove("active");
    navDots.children[counter].classList.add("active");
  }
//event listeners
nextBtn.addEventListener("click", nextClickHandler)
prevBtn.addEventListener("click", prevClickHandler)

// dynamically create the nav dots
function slidesDot() {
  for (var i = 0; i < slideLength; i++) {
    const dot = document.createElement("div");
    dot.classList.add("nav-dot");
    navDots.appendChild(dot);
  }
  const allDots = navDots.querySelectorAll(".nav-dot");
  allDots.forEach((dot, index) => {
    dot.addEventListener("click", (e) => {
      counter = index
      slideImage(index);
    });
  });
  navDots.children[0].classList.add("active");
}
slidesDot();


setInterval(nextClickHandler, 4000)