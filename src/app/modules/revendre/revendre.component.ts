import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-revendre',
  templateUrl: './revendre.component.html',
  styleUrls: ['./revendre.component.css']
})
export class RevendreComponent implements OnInit {
  

  constructor() { }

  ngOnInit(): void {
    
    window.addEventListener('scroll', function() {
     function tol(x:HTMLElement , s:number){
        while (x.offsetTop!=0) {
          s += x.offsetTop;
          x=x.offsetParent as HTMLElement;
        }
        return s;
      }
      
      
      var x=window.scrollY;
      var w=window.innerHeight;
      
     // var y=document.documentElement.scrollHeight; 
      
      
      var dan1  = document.getElementById("dan1");
      var dan11 = tol( dan1,0);
      var dan111= dan11+(dan1.clientHeight);

      var dan2  = document.getElementById("dan2");
      var dan22 = tol( dan2,0);
      var dan222= dan22+(dan2.clientHeight);

      var dan3  = document.getElementById("dan3");
      var dan33 = tol( dan3,0);
      var dan333= dan33+(dan3.clientHeight);

      var dan4  = document.getElementById("dan4");
      var dan44 = tol( dan4,0);
      var dan444= dan44+(dan4.clientHeight);

      var dan5  = document.getElementById("dan5");
      var dan55 = tol( dan5,0);
      var dan555= dan55+(dan5.clientHeight);

      
       if(x+w >dan11 &&  x<dan111)
        { 
          
           dan1.className= "row animated slideInLeft ";
           dan1.style.visibility="visible";
             }
        else
        {  
           dan1.className="row";
      }

      if(x+w >dan22 && x< dan222)
        { 
          
           dan2.className= "row animated slideInRight ";
           dan2.style.visibility="visible";
             }
        else
        {  
           dan2.className="row";
      }

      if(x+w >dan33 && x< dan333)
        { 
          
           dan3.className= "row animated slideInLeft ";
           dan3.style.visibility="visible";
             }
       else
        {  
           dan3.className="row";
      }

      if(x+w >dan44 && x< dan444)
        { 
          
           dan4.className= "row animated slideInRight ";
           dan4.style.visibility="visible";
             }
        else
        {  
           dan4.className="row";
      }
      
      if(x+w >dan55 && x< dan555)
        { 
          
           dan5.className= "col-sm-4 animated slideInLeft ";
           dan5.style.visibility="visible";
             }
        else
        {  
           dan5.className="col-sm-4";
      }
        
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
