import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

//Componentes principales

//Modulos de componentes
import { HomePageModule } from './home-page/home-page.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
//Angular Material
import { MaterialModule } from './common/material.module';

import { from } from 'rxjs';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomePageModule,
    BrowserAnimationsModule,
    UserModule,
    AuthModule,
    MaterialModule,
    ToastrModule.forRoot(),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule

  ],
  providers: [MaterialModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
