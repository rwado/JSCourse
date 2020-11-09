class Statistics {
    constructor() {
        this.gameResults = [];
    }

    addGameToStatistics(win, bid) {
        let gameResults = {
            win,
            bid,
        };
        this.gameResults.push(gameResults);
    }

    showGameStatistics() {
        let gamesQuantity = this.gameResults.length;
        let winsQuantity = this.gameResults.filter(game => game.win).length;
        let losesQuentity = gamesQuantity - winsQuantity;
        return [gamesQuantity, winsQuantity, losesQuentity];
    }

}

const stats = new Statistics();