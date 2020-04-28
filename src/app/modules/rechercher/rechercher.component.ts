import { Component, OnInit } from '@angular/core';
import { Marquetst } from 'src/app/classes/marquetst';
import { Telephonetst } from 'src/app/classes/telephonetst';
import { MarquetstService } from 'src/app/services/marquetst.service';
import { TelephonetstService } from 'src/app/services/telephonetst.service';


@Component({
  selector: 'app-rechercher',
  templateUrl: './rechercher.component.html',
  styleUrls: ['./rechercher.component.css']
})
export class RechercherComponent implements OnInit {

  name;
  users= new Marquetst() ;
  users2= new Telephonetst() ; 
  constructor(private marquetstService :MarquetstService,
     private telephonetstService :TelephonetstService) { }

  ngOnInit(): void {
  }

  chercher(){
  
    
      if(this.name==''){
        this.users=null;
        this.users2=null;
      }else{
        let resp=this.marquetstService.chercher(this.name);
      resp.subscribe(data=>{this.users=JSON.parse(data);});
      let resp2=this.telephonetstService.searchALLTelephonetst(this.name);
      resp2.subscribe(data=>{this.users2=JSON.parse(data);});
      }
      
    
  }
}
