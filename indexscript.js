
document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById('typewriter');

    const typewriter = new Typewriter(app, {
        loop: true,
        delay: 100,
        deleteSpeed: 50,
    });

    typewriter
        .typeString('Programmierer')
        .pauseFor(2000)
        .deleteAll()
        .typeString('Web Designer')
        .pauseFor(2000)
        .deleteAll()
        .typeString('Video Editor')
        .pauseFor(2000)
        .deleteAll()
        .typeString('Designer')
        .pauseFor(2000)
        .deleteAll()
        .typeString('Game Designer')
        .pauseFor(2000)
        .deleteAll()
        .typeString('3D Artist')
        .pauseFor(2000)
        .deleteAll()
        .typeString('Modder')
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

