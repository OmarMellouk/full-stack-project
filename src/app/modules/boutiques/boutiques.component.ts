import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boutiques',
  templateUrl: './boutiques.component.html',
  styleUrls: ['./boutiques.component.css']
})
export class BoutiquesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



  chcolor(){
    var a1 =document.getElementById("a1");
    var a2 =document.getElementById("a2");
    var a3 =document.getElementById("a3");
    var a4 =document.getElementById("a4");
    var a5 =document.getElementById("a5");
    var a6 =document.getElementById("a6");
    var a7 =document.getElementById("a7");
    
        a2.style.color="orangered";
        a5.style.color="black";
        a3.style.color="black";
        a4.style.color="black";
        a1.style.color="black";
        a6.style.color="black";
        a7.style.color="black";

  }
}
