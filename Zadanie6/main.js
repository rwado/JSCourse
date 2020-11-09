let color = 100;

window.addEventListener("keydown", (e) => {
    console.log(e.keyCode, e.which);

    if (e.keyCode == 40 && color < 100) {
        color += 2;
    }

    if (e.keyCode == 38 && color > 0) {
        color -= 2;
    }
    document.body.style.backgroundColor = `rgb(${color}%,${color}%,${color}%)`;
})