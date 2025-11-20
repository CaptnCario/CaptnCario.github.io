function qs(selector, all = false) {
  return all
    ? document.querySelectorAll(selector)
    : document.querySelector(selector);
}

const sections = qs(".section", true);
const timeline = qs(".timeline");
const line = qs(".line");
line.style.bottom = `calc(100% - 20px)`;
let prevScrollY = window.scrollY;
let up, down;
let full = false;
let set = 0;
const targetY = window.innerHeight * 0.8;

function scrollHandler(e) {
  const { scrollY } = window;
  up = scrollY < prevScrollY;
  down = !up;
  const timelineRect = timeline.getBoundingClientRect();
  const lineRect = line.getBoundingClientRect(); // const lineHeight = lineRect.bottom - lineRect.top;

  const dist = targetY - timelineRect.top;
  console.log(dist);

  if (down && !full) {
    set = Math.max(set, dist);
    line.style.bottom = `calc(100% - ${set}px)`;
  }

  if (dist > timeline.offsetHeight + 50 && !full) {
    full = true;
    line.style.bottom = `-50px`;
  }

  sections.forEach((item) => {
    // console.log(item);
    const rect = item.getBoundingClientRect(); //     console.log(rect);

    if (rect.top + item.offsetHeight / 5 < targetY) {
      item.classList.add("show-me");
    }
  }); // console.log(up, down);

  prevScrollY = window.scrollY;
}

scrollHandler();
line.style.display = "block";
window.addEventListener("scroll", scrollHandler);


document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById('typewriter');

    const typewriter = new Typewriter(app, {
        loop: true,
        delay: 100,
        deleteSpeed: 50,
    });

    typewriter
        .typeString('Junior Developer')
        .pauseFor(2000)
        .deleteAll()
        .typeString('Web Designer')
        .pauseFor(2000)
        .deleteAll()
        .typeString('Video Editor')
        .pauseFor(2000)
        .deleteAll()
        .typeString("Graphics Designer")
        .pauseFor(2000)
        .deleteAll()
        .typeString('Game Designer')
        .pauseFor(2000)
        .deleteAll()
        .typeString('2D/3D Artist')
        .pauseFor(2000)
        .deleteAll()
        .typeString('Modder')
        .pauseFor(2000)
        .deleteAll()
        .typeString('Network Guy')
        .pauseFor(2000)
        .deleteAll()
        .start();
});

const namen = new Array("Programmierer", "Web - Designer", "Video Editor", "Designer", "Game Designer", "3D Artist", "Modder");
setInterval(displayName, 4000);
var iSlides = 0;


var temp;
function displayName() {
    do {
        var i = Math.floor(Math.random() * 7);

    } while (i == temp)

    document.getElementById("name").innerHTML = namen[i];
    temp = i;
}

showSlides();
displayName();

function showSlides() {

    let slides = document.getElementsByClassName("diashow_fade");


    for (let i = 0; i < slides.length; i++) {

        slides[i].style.opacity = 0
    }
    
    iSlides++;

    if(iSlides>slides.length){
        iSlides = 1;
    }

    slides[iSlides - 1].style.opacity = 1;

    setTimeout(showSlides,9000);

}