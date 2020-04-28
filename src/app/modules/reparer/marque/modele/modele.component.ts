import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarqueService } from 'src/app/services/servicesLocal/marque.service';

@Component({
  selector: 'app-modele',
  templateUrl: './modele.component.html',
  styleUrls: ['./modele.component.css']
})
export class ModeleComponent implements OnInit {
  modeles ;
  constructor(private testService:MarqueService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id1=this.route.snapshot.params['id1'];
    const id2=this.route.snapshot.params['id2'];
     this.modeles =this.testService.getmodelebyId(+id1,+id2).modeles;
    
  }

}
