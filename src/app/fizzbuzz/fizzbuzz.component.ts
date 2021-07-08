import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fizzbuzz',
  templateUrl: './fizzbuzz.component.html',
  styleUrls: ['./fizzbuzz.component.css']
})
export class FizzbuzzComponent implements OnInit {

  title ="Fizz Buzz";

  records = 100;
  //Client side processing
  noofrecords :number[]=[];
  
  constructor() { 
    this.noofrecords =Array.from({length:this.records},(_,i)=>i+1);
  }

  onChangeNoOfRecords()
  {
    console.log(this.records);
    if(!Number.isInteger(this.records)) //Validation for e raise to character
    {      
      alert("Please enter valid Number");
      this.records=100;      
    }
    else if(this.records > 1000)
    {
      alert("Please enter number less than or equal to 1000");
      this.records =100;
    } 

    this.noofrecords =[];
    this.noofrecords =Array.from({length:this.records},(_,i)=>i+1);
  }
  ngOnInit(): void {
  }

}
