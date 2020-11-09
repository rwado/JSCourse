const myDiv = document.querySelector(".my_div");

let size = 20;
let increaseSize = true;

const step = 5;

const resizeDiv = function () {

    if (size > window.innerHeight * 0.5) {
        increaseSize = false;
        myDiv.style.backgroundColor = "red";
    } else if (size < 20) {
        increaseSize = true;
        myDiv.style.backgroundColor = "green";
    }

    increaseSize ? size += step : size -= step;

    myDiv.style.height = `${size}px`;
}

window.addEventListener("click", resizeDiv);