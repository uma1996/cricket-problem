import { Batsman } from "./batsman";
export class Scorer{
    playerOnStrike: Batsman | null;
    listOfBatsman: Array<Batsman>;
    totalScore : number;
    constructor(){
        this.totalScore=0;
        this.playerOnStrike=null;
        this.listOfBatsman = [];
    }
    addBatsman(batsman : Batsman){
        this.listOfBatsman.push(batsman);
    }
    changeStrike(){
        if(this.playerOnStrike === this.listOfBatsman[0]){
            this.playerOnStrike = this.listOfBatsman[1];
        }else{
            this.playerOnStrike = this.listOfBatsman[0];
        }
    }
    calculateScore(arr: Array<number> ){
    this.playerOnStrike= this.listOfBatsman[0];
    arr.forEach((runScored, ballNumber) => {
        if(runScored % 2 === 1){
            if(this.playerOnStrike){
                this.playerOnStrike.addRuns(runScored);
                this.playerOnStrike = this.listOfBatsman[1];
            } 
        }else{
            if(this.playerOnStrike){
                this.playerOnStrike.addRuns(runScored);
        }
    }
    this.totalScore += runScored;
    if((ballNumber + 1) % 6 === 0){
        this.changeStrike();
    }
    })
}
printScore(){
    console.log(`Total Score: ${this.totalScore}`);
    this.listOfBatsman.forEach(batsman => {
        console.log(`${batsman.playerName} scored ${batsman.numberOfRuns}`);
    })
}
}