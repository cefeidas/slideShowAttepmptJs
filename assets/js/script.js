/*
let slideIndex = 0;

function showSlides(myArray) {
    
    for (let i=0; i < myArray.length; i++) {
        myArray[i].style.display = 'none';
    }
    slideIndex++;
    if(slideIndex > myArray.length) {
        slideIndex = 1;
    }
    myArray[slideIndex-1].style.display = 'block'
    setTimeout(showSlides, 1000)
}

let slides = document.querySelectorAll('.slides');

window.addEventListener("load", () =>showSlides(slides));

*/

let slideIndex = 0;

function showSlides() {
    let slides = document.querySelectorAll('.slides');
    for (let i=0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if(slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex-1].style.display = 'block'
    setTimeout(showSlides, 1000)
}

function muteOrUnmute(myAudioArray) {
    for (let element = 0; element < myAudioArray.length; element++) {
        if (myAudioArray[element].muted == true) {
            myAudioArray[element].muted = false;
        } else {
            myAudioArray[element].muted = true;
        }}};


let slides = document.getElementsByClassName('slides');
let audioFiles = document.querySelectorAll('audio');
let button = document.getElementById("button");

window.addEventListener("load", () =>showSlides());
button.addEventListener("click", () => muteOrUnmute(audioFiles));
window.addEventListener("load", (event) => {
    alert("For a better experience, please unmute and use a wide screen");
  });