const game = new Game(100000);


const start = Date.now();
const index = 10000;
for (let i = 0; i < index; i++) {
    game.startGame();
}
const newDate = Date.now();
const time = newDate - start;
console.log(`Zajelo to ${time/1000} sekund. Czas pojedynczej operacji wynosi ${time/index} milisekund`);