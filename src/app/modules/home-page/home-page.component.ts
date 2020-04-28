import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }
  
  
  ngOnInit(): void {
   

var s1 =document.getElementById("section");
var img1 =document.getElementById("img1");
img1.style.width=s1.style.width;

var divf0 =document.getElementById("divf0");
var divf1 =document.getElementById("divf1");

divf0.addEventListener('mouseover',()=>{
    divf1.style.visibility="visible";
    });
    divf0.addEventListener('mouseout',()=>{
        divf1.style.visibility="hidden";
    });

    var divf00 =document.getElementById("divf00");
var divf11 =document.getElementById("divf11");

divf00.addEventListener('mouseover',()=>{
    divf11.style.visibility="visible";
    });
    divf00.addEventListener('mouseout',()=>{
        divf11.style.visibility="hidden";
    });

    var divf000 =document.getElementById("divf000");
    var divf111 =document.getElementById("divf111");
    
    divf000.addEventListener('mouseover',()=>{
        divf111.style.visibility="visible";
        });
        divf000.addEventListener('mouseout',()=>{
            divf111.style.visibility="hidden";
        });
    
        var divf0000 =document.getElementById("divf0000");
        var divf1111 =document.getElementById("divf1111");
        
        divf0000.addEventListener('mouseover',()=>{
            divf1111.style.visibility="visible";
            });
            divf0000.addEventListener('mouseout',()=>{
                divf1111.style.visibility="hidden";
            });
     

  }

  chcolor(){
    var a1 =document.getElementById("a1");
    var a2 =document.getElementById("a2");
    var a3 =document.getElementById("a3");
    var a4 =document.getElementById("a4");
    var a5 =document.getElementById("a5");
    var a6 =document.getElementById("a6");
    var a7 =document.getElementById("a7");
    
        a5.style.color="orangered";
        a2.style.color="black";
        a3.style.color="black";
        a4.style.color="black";
        a1.style.color="black";
        a6.style.color="black";
        a7.style.color="black";

  }
}
