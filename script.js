let slides = document.querySelectorAll(".slide");
const next = document.getElementById("next")
const back = document.getElementById("back")

slidesLoop = Array.from(slides);
function focusSlide(){
    console.log(slidesLoop);
    let displaySlides = slidesLoop.slice(0,5);
    slidesLoop.forEach(slide => {
                slide.classList.remove("slide0");
                slide.classList.remove("slide1");
                slide.classList.remove("slide2");
                slide.classList.remove("slide3");
                slide.classList.remove("slide4");
               });
    displaySlides.forEach((slide, i) =>{
        slide.classList.add(`slide${i}`);
    })
    console.log(displaySlides);
}
function slideNext(){
        slidesLoop.push(slidesLoop.shift());
        focusSlide();
        console.log(slidesLoop);
    }

function slidePrev(){
    slidesLoop.unshift(slidesLoop.pop());
    focusSlide();
    console.log(slidesLoop);
}
next.onclick = slideNext;
back.onclick = slidePrev;    