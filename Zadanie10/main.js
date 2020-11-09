const buttonAdd = document.querySelector(".add");
const buttonReset = document.querySelector(".reset");
const buttonShow = document.querySelector(".show");
const buttonShowAll = document.querySelector(".show-all");
const input = document.querySelector("input");
const div = document.querySelector("div");

const names = ["Basia", "Kasia", "Joasia"];
let newName;
buttonAdd.addEventListener("click", () => {
    newName = input.value;
    if (!newName && !names.includes(newName)) {
        return;
    }
    names.push(newName);
    console.log("dodano imie" + newName);
    input.value = "";
})

buttonReset.addEventListener("click", () => {
    names.length = 0;
    div.textContent = "";
});

buttonShow.addEventListener("click", () => {

    div.textContent = names[Math.floor(Math.random() * names.length)];
})

buttonShowAll.addEventListener("click", () => {
    div.innerHTML = "";
    for (name of names) {
        div.innerHTML += "</br>" + name;
    }
})