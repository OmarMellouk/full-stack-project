import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { HomePageComponent } from 'src/app/modules/home-page/home-page.component';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { RouterModule } from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';
import { RechercherComponent } from 'src/app/modules/rechercher/rechercher.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReparerComponent } from 'src/app/modules/reparer/reparer.component';
import { MarqueService } from 'src/app/services/servicesLocal/marque.service';
import { MarqueComponent } from 'src/app/modules/reparer/marque/marque.component';
import { ModeleComponent } from 'src/app/modules/reparer/marque/modele/modele.component';
import { PanneComponent } from 'src/app/modules/reparer/marque/modele/panne/panne.component';
import { DevisComponent } from 'src/app/modules/reparer/marque/modele/panne/devis/devis.component';
import { AcheterComponent } from 'src/app/modules/acheter/acheter.component';
import { MarquetstComponent } from 'src/app/modules/CRUD/marquetst/marquetst.component';
import { TelephonetstComponent } from 'src/app/modules/CRUD/marquetst/telephonetst/telephonetst.component';
import { RevendreComponent } from 'src/app/modules/revendre/revendre.component';
import { BoutiquesComponent } from 'src/app/modules/boutiques/boutiques.component';
import { PanierComponent } from 'src/app/modules/panier/panier.component';
import { GeolocalisationComponent } from 'src/app/modules/boutiques/geolocalisation/geolocalisation.component';


@NgModule({
  declarations: [
    DefaultComponent,
    HomePageComponent,
    PostsComponent,
    RechercherComponent,
    ReparerComponent,
    MarqueComponent,
    ModeleComponent,
    PanneComponent,
    DevisComponent,
    AcheterComponent,
    MarquetstComponent,
    TelephonetstComponent,
    RevendreComponent,
    BoutiquesComponent,
    PanierComponent,
    GeolocalisationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule ,
    HttpClientModule
  ],
  providers:[
    MarqueService
  ]
})
export class DefaultModule { }
