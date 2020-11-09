const myHeader = document.querySelector("h1");

const isOdd = (number) => {
    return number % 2
};

document.body.addEventListener("click", function (e) {
    const x = e.clientX;
    const y = e.clientY;
    myHeader.textContent = x + "," + y;

    const width = window.innerWidth;
    const height = window.innerHeight;

    let red = 0;
    let green = 0;
    let blue = 0;

    if (isOdd(x)) {
        isOdd(y) ? blue = 100 : green = 100;
    } else {
        isOdd(y) ? green = 100 : red = 100;
    }

    document.body.style.backgroundColor = `rgb(${red}%,${green}%,${blue}%)`;
    console.log(`${x}, ${y}`);
})