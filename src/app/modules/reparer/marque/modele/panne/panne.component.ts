import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarqueService } from 'src/app/services/servicesLocal/marque.service';

@Component({
  selector: 'app-panne',
  templateUrl: './panne.component.html',
  styleUrls: ['./panne.component.css']
})
export class PanneComponent implements OnInit {
  tel;
  c1=-1;
  c2=-1;
  c3=-1;
  c4=-1;
  s=-4;

  constructor(private testService:MarqueService, private route:ActivatedRoute) { }

  ngOnInit(): void {

    const id1=this.route.snapshot.params['id1'];
    const id2=this.route.snapshot.params['id2'];
    const id3=this.route.snapshot.params['id3'];
  
    this.tel =this.testService.gettelbyId(+id1,+id2,+id3).tel;


   
    
  }
  change1(){
    this.c1 =-this.c1;
    this.sum();
  }
  change2(){
    this.c2 =-this.c2;
    this.sum();
  }
  change3(){
    this.c3 =-this.c3;
    this.sum();
  }
  change4(){
    this.c4 =-this.c4;
    this.sum();
  }

  sum(){
     this.s=this.c1+this.c2+this.c3+this.c4;
  }
 

}
