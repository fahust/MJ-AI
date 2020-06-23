function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

module.exports = class Creation {
    constructor(MJ){
        this.mj = MJ;
    }

    addSkill(title,desc,dgt){
        let len = Object.keys(this.mj.skill).length;
        this.mj.skill[len+1] = {
            title : title,
            desc : desc,
            dgt : dgt,
        }
    }

    addMonster(keyPrompt){
        keyPrompt = keyPrompt.replace('Create monster ','');
        let splited = keyPrompt.split(" ");
        let len = Object.keys(this.mj.monster).length;
        this.mj.monster[len+1] = {
            title : splited[0],
            desc : splited[1],
            hp : splited[2],
            dgt : splited[3],
        }
    }
   
}