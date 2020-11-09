const body = document.querySelector("div");



const fun = () => {
    let time = 0;
    const getTime = setInterval(() => {
        time++;
        body.textContent = time;
    }, 1000)
    return getTime;

}

const myVar = fun;
myVar();