import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FulllogComponent } from './fulllog.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginComponent } from 'src/app/modules/authentification/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorService } from 'src/app/modules/authentification/login/http-interceptor.service';
import { RegisterComponent } from 'src/app/modules/authentification/register/register.component';



@NgModule({
  declarations: [
    FulllogComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule,
    FormsModule,
    HttpClientModule 
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true}
  ]
})
export class FulllogModule { }
