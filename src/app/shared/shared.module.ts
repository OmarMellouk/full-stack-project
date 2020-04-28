import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterFixeComponent } from './components/footer-fixe/footer-fixe.component';
import { BackgroundVideoComponent } from './components/background-video/background-video.component';
import { BackgroundImageComponent } from './components/background-image/background-image.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    FooterFixeComponent,
    BackgroundVideoComponent,
    BackgroundImageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    FooterFixeComponent,
    BackgroundVideoComponent,
    BackgroundImageComponent
  ]
})
export class SharedModule { }
