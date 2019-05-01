class Dice{

    constructor(){
        this.lado = [];
    }

    throwDice() {
        return Math.floor(Math.random() * (6 - 1)) + 1;
    }
}