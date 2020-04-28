import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-footer-fixe',
  templateUrl: './footer-fixe.component.html',
  styleUrls: ['./footer-fixe.component.css']
})
export class FooterFixeComponent implements OnInit {
  sec=0;
  min=0;
  hr=0;
  constructor() { }

  ngOnInit(): void {


    const cnt=interval(1000);

  
    cnt.subscribe(data=>{this.sec=(data%60);
      setTimeout(() => {
        if(this.sec==0){
                       this.min=((++this.min)%60) ;
                       if(this.min==0){
                                        ++this.hr;
                                       }
                      } 
      }, 1000);
      
    
    });

    var btn1 =document.getElementById("btn1");
    var form1 =document.getElementById("form1");
    var h1 =document.getElementById("h1");
    
    btn1.addEventListener('click',()=>{
        btn1.className="font-weight-bolder bg-dark fixed-bottom animated slideOutDown faster";
        /* btn1.style.visibility="hidden"; */
        setTimeout(()=>{ 
            btn1.style.visibility="hidden";
            form1.className="fixed-bottom  animated slideInUp faster";
            form1.style.visibility="visible";},200);
           
       
        });
        h1.addEventListener('click',()=>{
            form1.style.visibility="hidden";
            form1.className="fixed-bottom  ";
            btn1.className="font-weight-bolder bg-dark fixed-bottom animated slideInUp faster";
             btn1.style.visibility="visible";
        });
  }

}
