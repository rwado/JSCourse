const endTime = new Date('2021-01-25 22:34:10').getTime();

const spanD = document.querySelector("span.d");
const spanH = document.querySelector("span.h");
const spanM = document.querySelector("span.m");
const spanS = document.querySelector("span.s");


setInterval(() => {
    const nowTime = new Date().getTime();
    const time = endTime - nowTime;

    const days = Math.floor(endTime / (1000 * 60 * 60 * 24) - nowTime / (1000 * 60 * 60 * 24));

    const hours = Math.floor((endTime / (1000 * 60 * 60) - nowTime / (1000 * 60 * 60)) % 24);

    const minutes = Math.floor((endTime / (1000 * 60) - nowTime / (1000 * 60)) % 60);

    const seconds = Math.floor((endTime / (1000) - nowTime / (1000)) % 60);


    spanD.textContent = days;
    spanH.textContent = hours;
    spanM.textContent = minutes;
    spanS.textContent = seconds;

    console.log(days);

}, 1000);