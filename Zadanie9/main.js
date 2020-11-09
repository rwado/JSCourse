const myButton = document.querySelector("button");

const myDiv = document.querySelector("div");

const chars = "ABCDEFGHIJKLMNOPQRSTWXYZ0123456789!@#$%^&*()_{}:";

const generatedCodesQuantity = 10;
const generatedCodesLength = 200;

const generate = () => {
    for (let i = 0; i < generatedCodesQuantity; i++) {
        myDiv.textContent += `
        [${i+1}]:${generateSingleCode()}`;
    }

}

const generateSingleCode = () => {

    let code = "";
    for (let i = 0; i < generatedCodesLength; i++) {
        code += generateSingleLetter();
    }
    return code;
}

const generateSingleLetter = () => {
    return chars[Math.floor(Math.random() * chars.length)];
}

myButton.addEventListener("click", generate);