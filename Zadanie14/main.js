const slideList = [{
        img: 'images/img1.jpg',
        text: 'Pierwszy tekst',
    },
    {
        img: 'images/img2.jpg',
        text: 'Drugi tekst',
    },
    {
        img: 'images/img3.jpg',
        text: 'Trzeci tekst',
    }
];

const image = document.querySelector("img.slider");
const h1 = document.querySelector("h1.slider");
const dots = [...document.querySelectorAll(".dots span")];

const time = 1200;
let active = 0;

const changeDot = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains("active"));
    dots[activeDot].classList.remove("active");
    dots[active].classList.add("active");
}


const changeSlide = () => {
    active = ++active % slideList.length;
    //  active + 1 < slideList.length ? active++ : active = 0;
    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    changeDot();
}

let myInterval = setInterval(changeSlide, time);

window.addEventListener("keydown", (e) => {

    if (e.code == "ArrowLeft") {
        clearInterval(myInterval);
        myInterval = setInterval(changeSlide, time);
        if (active == 0) {
            active = slideList.length - 2;
        } else {
            active -= 2;
        }
        changeSlide();

    }

    if (e.code == "ArrowRight") {
        clearInterval(myInterval);
        myInterval = setInterval(changeSlide, time);
        changeSlide();
    }

})