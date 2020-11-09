class Draw {
    constructor() {
        this.options = ['red', 'green', 'blue'];
        let _result = this.drawResults();
        this.getDrawResult = () => _result;
    }

    drawResults() {
        let colors = [];
        const optionsQuantity = this.options.length;
        for (let i = 0; i < optionsQuantity; i++) {
            const index = Math.floor(Math.random() * optionsQuantity);
            const color = this.options[index];
            colors.push(color);
        }
        return colors;
    }

}