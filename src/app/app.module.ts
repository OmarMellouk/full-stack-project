import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultModule } from './layouts/default/default.module';

import { FulllogModule } from './layouts/fulllog/fulllog.module';
import { NotfoundModule } from './layouts/notfound/notfound.module';

@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DefaultModule,
    FulllogModule,
    NotfoundModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
