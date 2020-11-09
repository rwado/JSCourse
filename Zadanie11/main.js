const gameSummary = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0
}

const game = {
    playerHand: "",
    aiHand: ""
}

const hands = document.querySelectorAll(".mydiv");

const handSelection = (e) => {

    game.playerHand = e.target.dataset.option;
    hands.forEach(hand => hand.style.backgroundColor = "indigo");
    e.target.style.backgroundColor = "fuchsia";
    console.log(game);
}


document.querySelector(".start").addEventListener("click", () => {
    if (!game.playerHand) {
        return alert("Wybierz dłoń!!!");
    }

    game.aiHand = computerChoice();
    const gameResult = checkResult(game.playerHand, game.aiHand);
    console.log(gameResult);
    publishResult(game.playerHand, game.aiHand, gameResult);
})

hands.forEach(hand => hand.addEventListener("click", handSelection));

function computerChoice() {
    return hands[Math.floor(Math.random() * 3)].dataset.option;
}

function publishResult(player, ai, result) {
    document.querySelector('[data-summary="your-choice"]')
        .textContent = player;

    document.querySelector('[data-summary="ai-choice"]')
        .textContent = ai;

    document.querySelector('[data-summary="who-win"]')
        .textContent = result;

    document.querySelector('p.numbers span').textContent = ++gameSummary.numbers;


}

function checkResult(player, ai) {
    if (player === ai) {
        return "DRAW"
    } else if ((player === "papier" && ai === "kamien") ||
        (player === "kamien" && ai === "nozyce") ||
        (player === "nozyce" && ai === "papier")) {
        return "WIN"
    } else {
        return "LOSE"
    }
}