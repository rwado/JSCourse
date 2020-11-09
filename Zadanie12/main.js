const spanText = document.querySelector(".text");
const spanCursor = document.querySelector(".cursor");

const txt = "lorem Ullamco occaecat tempor nulla tempor.Excepteur cup KONIEC"


let indexText = 0;

const addLetter = () => {

    spanText.textContent += txt[indexText];
    indexText++;
    if (indexText === txt.length) {
        clearInterval(indexTyping);
    }
}

const cursorAnimation = () => {
    spanCursor.classList.toggle("active");
}

const indexTyping = setInterval(addLetter, 10);

const cursor = setInterval(cursorAnimation, 400);