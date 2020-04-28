import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/modules/authentification/login/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

 
  isLoggedIn = false;


  constructor(private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService) { }


    handleLogout() {
     
       this.router.navigate(['/login']);
      this.authenticationService.logout();
    }
  ngOnInit() {
  
    this.chcolor();
    this.isLoggedIn = this.authenticationService.isUserLoggedIn();

    


    var a1 =document.getElementById("a1");
    var a2 =document.getElementById("a2");
    var a3 =document.getElementById("a3");
    var a4 =document.getElementById("a4");
    var a5 =document.getElementById("a5");
    var a6 =document.getElementById("a6");
    var a7 =document.getElementById("a7");
    var logo1 =document.getElementById("logo1");
    
    a1.addEventListener('click',()=>{
        a1.style.color="orangered";
        a2.style.color="black";
        a3.style.color="black";
        a4.style.color="black";
        a5.style.color="black";
        a6.style.color="black";
        a7.style.color="black";
        });

        a2.addEventListener('click',()=>{
          a2.style.color="orangered";
          a1.style.color="black";
          a3.style.color="black";
          a4.style.color="black";
          a5.style.color="black";
          a6.style.color="black";
          a7.style.color="black";
          });
          a3.addEventListener('click',()=>{
            a3.style.color="orangered";
            a2.style.color="black";
            a1.style.color="black";
            a4.style.color="black";
            a5.style.color="black";
            a6.style.color="black";
            a7.style.color="black";
            });
            a4.addEventListener('click',()=>{
              a4.style.color="orangered";
              a2.style.color="black";
              a3.style.color="black";
              a1.style.color="black";
              a5.style.color="black";
              a6.style.color="black";
              a7.style.color="black";
              });
              a5.addEventListener('click',()=>{
                a5.style.color="orangered";
                a2.style.color="black";
                a3.style.color="black";
                a4.style.color="black";
                a1.style.color="black";
                a6.style.color="black";
                a7.style.color="black";
                });
                a6.addEventListener('click',()=>{
                  a6.style.color="orangered";
                  a2.style.color="black";
                  a3.style.color="black";
                  a4.style.color="black";
                  a5.style.color="black";
                  a1.style.color="black";
                  a7.style.color="black";
                  });
                  a7.addEventListener('click',()=>{
                    a7.style.color="orangered";
                    a2.style.color="black";
                    a3.style.color="black";
                    a4.style.color="black";
                    a5.style.color="black";
                    a6.style.color="black";
                    a1.style.color="black";
                    });
                    logo1.addEventListener('click',()=>{
                      a1.style.color="black";
                      a2.style.color="black";
                      a3.style.color="black";
                      a4.style.color="black";
                      a5.style.color="black";
                      a6.style.color="black";
                      a7.style.color="black";
                      });

                     
                     
                      var div1 =document.getElementById("div1");
                      div1.style.width=a1.style.width;
                      a1.addEventListener("mouseover",()=>{
                          div1.style.visibility="visible";
                          div1.className="animated zoomIn faster";
                         
                      });
                      a1.addEventListener("mouseout",()=>{
                          
                          div1.className="animated zoomOut";
                        
                      });
                      
                  
                      var div2 =document.getElementById("div2");
                      div2.style.width=a2.style.width;
                      a2.addEventListener("mouseover",()=>{
                          div2.style.visibility="visible";
                          div2.className="animated zoomIn faster";
                      });
                      a2.addEventListener("mouseout",()=>{
                          
                          div2.className="animated zoomOut";
                      });
                      
                     
                      var div3 =document.getElementById("div3");
                      div3.style.width=a3.style.width;
                      a3.addEventListener("mouseover",()=>{
                          div3.style.visibility="visible";
                          div3.className="animated zoomIn faster";
                      });
                      a3.addEventListener("mouseout",()=>{
                          
                          div3.className="animated zoomOut";
                      });
                      
                 
                      var div4 =document.getElementById("div4");
                      div4.style.width=a4.style.width;
                      a4.addEventListener("mouseover",()=>{
                          div4.style.visibility="visible";
                          div4.className="animated zoomIn faster";
                      });
                      a4.addEventListener("mouseout",()=>{
                          
                          div4.className="animated zoomOut";
                      });
                      
                    
                      var div5 =document.getElementById("div5");
                      div5.style.width=a5.style.width;
                      a5.addEventListener("mouseover",()=>{
                          div5.style.visibility="visible";
                          div5.className="animated zoomIn faster";
                      });
                      a5.addEventListener("mouseout",()=>{
                          
                          div5.className="animated zoomOut";
                      });
                      
                   
                      var div6 =document.getElementById("div6");
                      div6.style.width=a6.style.width;
                      a6.addEventListener("mouseover",()=>{
                          div6.style.visibility="visible";
                          div6.className="animated zoomIn faster";
                      });
                      a6.addEventListener("mouseout",()=>{
                          
                          div6.className="animated zoomOut";
                      });
                      
               
                      var div7 =document.getElementById("div7");
                      div7.style.width=a7.style.width;
                      a7.addEventListener("mouseover",()=>{
                          div7.style.visibility="visible";
                          div7.className="animated zoomIn faster";
                      });
                      a7.addEventListener("mouseout",()=>{
                          
                          div7.className="animated zoomOut";
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
    
        a5.style.color="black";
        a2.style.color="black";
        a3.style.color="black";
        a4.style.color="black";
        a1.style.color="black";
        a6.style.color="black";
        a7.style.color="black";
  }

}
