import { Component, OnInit } from '@angular/core';
import { userMove } from './usermove.component';


@Component({
  selector: 'app-rpsgame',
  templateUrl: './rpsgame.component.html',
  styleUrls: ['./rpsgame.component.css']
})
export class RpsgameComponent implements OnInit 
{
  gameOptions = ['R','P','S'];  //R-->0 , P-->1, S-->2    
  answer =[[0 ,-1, 1],[1,0,-1],[-1,1,0]];  //Game score from user side index 0 --> Tie, -1 --> Lose , 1--> Win
  gameresult :userMove[]=[];
  usrmv : any;
  compmvtemp:number=1;

  onRock()
  {
    console.log("Rock is clicked");    
    this.processAction(0);
  }
  onPaper()
  {
    console.log("Paper is clicked");
    this.processAction(1);
  }
  onScissor()
  {
    console.log("onScissor is clicked");
    this.processAction(2);
  }

  processAction(userRPS:number)
  {
    this.compmvtemp =Math.floor(Math.random()*3+0)
    this.usrmv = new userMove(userRPS,this.compmvtemp,this.answer[userRPS][this.compmvtemp],);
    this.gameresult.push(this.usrmv);
  }

  ngOnInit(): void {
  }
}
