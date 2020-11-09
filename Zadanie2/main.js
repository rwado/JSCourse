const myLi = document.querySelectorAll("li");

const myBtn = document.querySelector(".btn");

let size = 15;

const buttonClick = function () {

    size += 5;
    for (let i = 0; i < myLi.length; i++) {
        myLi[i].style.display = "block";
        myLi[i].style.fontSize = size + "px";
    }
    //  myLi.forEach((item) => item.style.display = "block");
}

document.querySelector(".reset").addEventListener("click", function () {
    myLi.forEach((item) => item.style.fontSize = `${size = 15}px`);
});

myBtn.addEventListener("click", buttonClick);