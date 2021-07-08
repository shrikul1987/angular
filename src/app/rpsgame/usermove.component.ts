export class userMove
{
    userMove: number =1; //R-->0 , P-->1, S-->2
    computerMove: number=1; //R-->0 , P-->1, S-->2
    result:number=1; //0 --> Tie, -1 --> Lose , 1--> Win
    
    constructor(userM:number,compM:number,answer:number)
    {
        this.userMove = userM;
        this.computerMove= compM;
        this.result = answer;
        this.actionTime = new Date();
    }
    actionTime :Date;
}