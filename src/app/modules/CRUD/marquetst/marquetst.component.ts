import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Marquetst } from 'src/app/classes/marquetst';
import { MarquetstService } from 'src/app/services/marquetst.service';
import { EchangeService } from 'src/app/services/servicesLocal/echange.service';


@Component({
  selector: 'app-marquetst',
  templateUrl: './marquetst.component.html',
  styleUrls: ['./marquetst.component.css']
})
export class MarquetstComponent implements OnInit {

  marquetst: Observable<Marquetst[]>;

users = new Marquetst() ;
  id;
  name;
  mrimg;
  idcm;
 
  
  constructor(private marquetstService: MarquetstService , private data : EchangeService) {}

  ngOnInit() {
    this.reloadData();
    this.data.curMessage.subscribe(m=>this.idcm=m);
  }

  reloadData() {
    this.marquetst = this.marquetstService.getMarquetst();
    
   
  }

chercher(){
  
  let resp=this.marquetstService.chercher(this.name);
    resp.subscribe(data=>{this.users=JSON.parse(data); console.log(this.users)});

}

deleteMrq(id1:number,name){
  let cf=window.confirm('WACH VRAI BAGHI TSUPRIMER  '+name+ '  ???');
  if(cf==true){
     let resp=this.marquetstService.deleteMarque(id1);
  resp.subscribe(()=>this.reloadData());
}  
}

addmarq(){
  this.marquetstService.addmarque(this.users).subscribe(()=>this.reloadData());
}
 
putmarq(id,marq){
  this.marquetstService.putmarque(id,marq).subscribe(()=>this.reloadData());
  console.log(typeof( marq));
}

fcp(id:number){
  this.idcm=id;
  
  this.data.changeMessage(this.idcm);
}

}
