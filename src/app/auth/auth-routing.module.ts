import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Principal Components
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/auth.guard';


const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
