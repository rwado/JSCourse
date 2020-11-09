const myDiv = document.querySelector("div");

let divX = 250;
let divY = 150;

myDiv.style.left = divX + "px";
myDiv.style.top = divY + "px";

let isActive = false;

let insertDivX;
let insertDivY;

myDiv.addEventListener("mousedown", (e) => {
    myDiv.style.backgroundColor = "grey";
    isActive = true;

    insertDivX = e.offsetX;
    insertDivY = e.offsetY;

})

myDiv.addEventListener("mousemove", (e) => {
    if (isActive) {
        divX = e.clientX;
        divY = e.clientY;
        myDiv.style.left = `${divX - insertDivX}px`;
        myDiv.style.top = `${divY - insertDivY}px`;
    }


})

myDiv.addEventListener("mouseup", () => {
    myDiv.style.backgroundColor = "black";
    isActive = false;
})