import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Telephonetst } from 'src/app/classes/telephonetst';
import { TelephonetstService } from 'src/app/services/telephonetst.service';
import { EchangeService } from 'src/app/services/servicesLocal/echange.service';


@Component({
  selector: 'app-telephonetst',
  templateUrl: './telephonetst.component.html',
  styleUrls: ['./telephonetst.component.css']
})
export class TelephonetstComponent implements OnInit {
  telephonetst: Observable<Telephonetst[]>;
  idcm:number;
  users = new Telephonetst();
  name;

  constructor(private teltstService: TelephonetstService ,private data :EchangeService) {}

  ngOnInit() { 
    this.data.curMessage.subscribe(m=>this.idcm=m);
    this.reloadData();
    
  }

  reloadData() {
     this.telephonetst = this.teltstService.getTelephonetst(this.idcm); 
  }

  addTel(){
    this.teltstService.addTelephonetst(this.idcm,this.users).subscribe(()=>this.reloadData());
  }

  putTel(idT,Tel){
    this.teltstService.putTelephonetst(this.idcm,idT,Tel).subscribe(()=>this.reloadData());
  }

  deleteTel(idT,name){
    let cf=window.confirm('WACH VRAI BAGHI TSUPRIMER  '+name+ '  ???');
  if(cf==true){
    this.teltstService.deletTelephonetst(this.idcm,idT).subscribe(()=>this.reloadData());
  }
}

chercherTel(){
  
  let resp=this.teltstService.searshTelephonetst(this.idcm,this.name);
    resp.subscribe(data=>{this.users=data });

}

}
