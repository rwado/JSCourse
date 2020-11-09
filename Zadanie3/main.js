const init = function () {

    const myButton = document.createElement("button");
    myButton.textContent = "Click";

    document.body.appendChild(myButton);

    const myUl = document.createElement("ul");
    myUl.style.display = "block";

    document.body.appendChild(myUl);
}

init();

const myButton = document.querySelector("button");
const myUlList = document.querySelector("ul");

let index = 0;


const buttonClick = function () {
    for (let i = 0; i < 5; i++) {
        const myLi = document.createElement("li");
        myLi.style.fontSize = `${15+index}px`;
        myLi.textContent = `NR: ${index++}`;

        myUlList.appendChild(myLi);
    }

}


myButton.addEventListener("click", buttonClick);