import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { MarqueService } from 'src/app/services/servicesLocal/marque.service';

@Component({
  selector: 'app-marque',
  templateUrl: './marque.component.html',
  styleUrls: ['./marque.component.css']
})
export class MarqueComponent implements OnInit {

mrqs:any[];
 
  constructor( private testService:MarqueService, private route:ActivatedRoute ) { }

  ngOnInit(): void {
    
   const id=this.route.snapshot.params['id'];
   
    this.mrqs =this.testService.getmarquebyId(+id).mrqs;
    
  }

}
