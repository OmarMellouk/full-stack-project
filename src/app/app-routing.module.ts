import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { HomePageComponent } from './modules/home-page/home-page.component';
import { PostsComponent } from './modules/posts/posts.component';
import { FulllogComponent } from './layouts/fulllog/fulllog.component';
import { LoginComponent } from './modules/authentification/login/login.component';
import { RechercherComponent } from './modules/rechercher/rechercher.component';
import { ReparerComponent } from './modules/reparer/reparer.component';
import { MarqueComponent } from './modules/reparer/marque/marque.component';
import { ModeleComponent } from './modules/reparer/marque/modele/modele.component';
import { PanneComponent } from './modules/reparer/marque/modele/panne/panne.component';
import { DevisComponent } from './modules/reparer/marque/modele/panne/devis/devis.component';
import { AcheterComponent } from './modules/acheter/acheter.component';
import { MarquetstComponent } from './modules/CRUD/marquetst/marquetst.component';
import { TelephonetstComponent } from './modules/CRUD/marquetst/telephonetst/telephonetst.component';
import { RevendreComponent } from './modules/revendre/revendre.component';
import { BoutiquesComponent } from './modules/boutiques/boutiques.component';
import { PanierComponent } from './modules/panier/panier.component';
import { GeolocalisationComponent } from './modules/boutiques/geolocalisation/geolocalisation.component';
import { RegisterComponent } from './modules/authentification/register/register.component';
import { NotfoundComponent } from './layouts/notfound/notfound.component';
import { PageNotFoundComponent } from './modules/notfound/page-not-found/page-not-found.component';



const routes: Routes = [
   {path:'',component:DefaultComponent, children:[
                                   {path:'', component:HomePageComponent},
                                   {path:'posts',component:PostsComponent},
                                   {path:'rechercher',component:RechercherComponent},
                                   {path:'reparer',component:ReparerComponent},
                                   {path:'reparer/marque/:id',component:MarqueComponent},
                                   {path:'reparer/marque/:id1/:id2',component:ModeleComponent},
                                   {path:'reparer/marque/:id1/:id2/:id3',component:PanneComponent},
                                   {path:'devis',component:DevisComponent},
                                   {path:'acheter',component:AcheterComponent},
                                   {path:'marquetst',component:MarquetstComponent},
                                   {path:'telephonetst',component:TelephonetstComponent},
                                   {path:'revendre',component:RevendreComponent},
                                   {path:'boutiques',component:BoutiquesComponent},
                                   {path:'geolocalisation',component:GeolocalisationComponent},
                                   {path:'panier',component:PanierComponent}
                             ]},
    {path:'',component:FulllogComponent,children:[
                                   {path:'login',component:LoginComponent},
                                   {path:'register',component:RegisterComponent}
                             ]},
    {path:'',component:NotfoundComponent,children:[
                                   {path:'page-not-found',component:PageNotFoundComponent}
                        ]},
    {path:"**", redirectTo:'/page-not-found'}                                            
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
