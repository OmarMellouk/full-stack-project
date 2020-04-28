import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotfoundComponent } from './notfound.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';
import { PageNotFoundComponent } from 'src/app/modules/notfound/page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    NotfoundComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule,
  ]
})
export class NotfoundModule { }
