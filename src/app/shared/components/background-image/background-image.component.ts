import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-background-image',
  templateUrl: './background-image.component.html',
  styleUrls: ['./background-image.component.css']
})
export class BackgroundImageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.getElementById('img1').style.height = (window.innerHeight).toString()+"px";
   
    window.addEventListener("resize",()=>{
      document.getElementById('img1').style.height = (window.innerHeight).toString()+"px";
    });
  }

}
