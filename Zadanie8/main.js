const myButton = document.querySelector("button");

const myDiv = document.querySelector("div");
const generatedNumbers = document.querySelector(".array");

const names = ["Asia", "Basia", "Kasia", "Srasia", "Dziunia", "Mela", "Ela", "Aniela", "Pościela"];

const myArray = [];

const nameGemerator = () => {
    number = Math.floor(Math.random() * 9)
    myDiv.textContent = "Wylosowano nr: " + number + "\n" + names[number];
    myArray.push(number);
    myArray.sort();

    generatedNumbers.textContent = "";
    myArray.forEach((number, index) => {
        generatedNumbers.textContent += "\n" + number;
    })
}



myButton.addEventListener("click", nameGemerator);