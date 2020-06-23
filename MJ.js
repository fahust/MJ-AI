var Player = require('./Player.js');
var Creation = require('./Creation.js');

const fs = require('fs');

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

class MJ {
    constructor(){
        this.sector = {};
        this.underAttack = 0;
        this.player = new Player();

        this.keyPrompt = '';
        
        this.creation = new Creation(this);
        this.skill = {};
        this.monster = {};
    }

    createSector(){
        this.sector['village'] = {
            danger : 0,
            possibility : {
                1 : 'Continue',
                2 : 'Talk to citizen'
            }
        }

        this.sector['forest'] = {
            danger : 1,
            possibility : {
                1 : 'Continue',
                2 : 'Attack',
                3 : 'Search',
                4 : 'Observe'
            }
        }
    }

    getDialog(){

    }

    getPossibility(){

    }

    setSector(){

    }

    getMonster(){
        let len = randomIntFromInterval(1,Object.keys(this.monster).length());
        return this.monster[len];
    }

    createAttack(){
        this.player.monsterAttack = this.getMonster();
        this.player.underAttack = 1; 
    }

    deDanger(){
        let de = randomIntFromInterval(0,100);
        let deFinal = de*this.player.sector.danger;
        if(deFinal > 70)
            this.createAttack();
    }

    prompt(key){
        this.keyPrompt = this.keyPrompt + key;
    }

    promptReturn(){
        //console.log('LA ?',this.keyPrompt);
        if(this.keyPrompt.search("Create monster") != -1){
            this.creation.addMonster(this.keyPrompt);
            console.log(this.monster)
        }
        this.keyPrompt = '';
    }
}

var mj = new MJ();

const readline = require('readline');
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
process.stdin.on('keypress', (str, key) => {
  if (key.ctrl && key.name === 'c') {
    process.exit();
  } else {
    if(key.name == 'return'){
        mj.promptReturn()
      }else if(key.name == 'backspace'){
        mj.keyPrompt = ''
      }else{
        mj.prompt(key.sequence);
        console.log(mj.keyPrompt);
      }
  }
});

