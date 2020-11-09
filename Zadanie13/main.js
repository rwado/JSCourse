const spanText = document.querySelector(".text");

const texts = ["Najpierw zrób to", "Potem zrób to", "A na koniec to"];

const myText = "ABCDEFGHI";



const addSingleLetter = function (textIndex, number) {
    console.log("text: " + textIndex + " nr: " + number);
    spanText.textContent += texts[textIndex][number];
    number++;
    if (number < texts[textIndex].length) {
        setTimeout(function () {
            addSingleLetter(textIndex, number);
        }, 50);
    } else {
        if (textIndex < texts.length - 1) {
            textIndex++;
            number = 0;
            setTimeout(function () {
                spanText.textContent = "";
                addSingleLetter(textIndex, number);

            }, 1000);
        } else {
            setTimeout(function () {
                spanText.textContent += "\nUDAŁO SIĘ!";
            }, 1500)
        }
    }
}

const init = () => {
    spanText.textContent = "";
    setTimeout(function () {
        addSingleLetter(0, 0);
    }, 1000);

}


init();

// texts.forEach( text => {
//     setTimeout(showLetter, 50);
// })