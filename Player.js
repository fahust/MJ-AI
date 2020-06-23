function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

module.exports = class Player {
    constructor(){
        this.underAttack = 0;
        this.sector;
    }

   
}