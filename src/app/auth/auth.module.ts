import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Componentes principales
import { RegisterComponent } from './register/register.component';


//Modulos de componentes


//services
import { UserService } from '../user/shared/user.service';
import { AuthService } from './shared/auth.service';
import { TokenInterceptor } from './shared/token.interceptor';
//Angular Material
import { MaterialModule } from '../common/material.module';
import { LoginComponent } from './login/login.component';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthGuard } from './shared/auth.guard';


@NgModule({
  declarations: [
      RegisterComponent,
      LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    //Angular Material
    MaterialModule

  ],
  providers: [
    UserService,
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
})
export class AuthModule { }
