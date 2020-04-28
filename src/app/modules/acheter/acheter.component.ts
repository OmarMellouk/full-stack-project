import { Component, OnInit } from '@angular/core';
import { Telephonetst } from 'src/app/classes/telephonetst';
import { TelephonetstService } from 'src/app/services/telephonetst.service';


@Component({
  selector: 'app-acheter',
  templateUrl: './acheter.component.html',
  styleUrls: ['./acheter.component.css']
})
export class AcheterComponent implements OnInit {
users2=new Telephonetst();
i=0;
  constructor(private telephonetstService:TelephonetstService) { }

  ngOnInit(): void {
  }

  fncfltr(){
    
    var idf2=document.getElementById("idf2");
    if(this.i==0){idf2.style.visibility="visible"; this.i=1;
    idf2.className="animated slideInDown faster";}
    else{idf2.style.visibility="hidden"; this.i=0;
    this.users2=null;
    (document.getElementById("inpch")as HTMLInputElement).checked =true;
    }
    
  }

  cherchfiltrNone(){
    this.users2=null;
  }

  cherchfiltr(){
    let resp2=this.telephonetstService.getALLTelephonetst();
      resp2.subscribe(data=>{this.users2=JSON.parse(data);});
  }
  cherchfiltrAPPLE(){
    let resp =this.telephonetstService.getTelephonetst(6);
    resp.subscribe(data=>{this.users2=data;});
  }
  cherchfiltrSAMSUNG(){
    let resp =this.telephonetstService.getTelephonetst(7);
    resp.subscribe(data=>{this.users2=data;});
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
