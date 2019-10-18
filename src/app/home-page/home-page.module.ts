import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Routes, RouterModule, Router } from '@angular/router';
import { HomePageUserComponent } from './home-page-user/home-page-user.component';
import { HomePageComponent } from './home-page.component';

//Angular material
import { MaterialModule } from '../common/material.module';
import { AuthGuard } from '../auth/shared/auth.guard';

const routes: Routes = [
    {
        path: 'home',
        component: HomePageComponent,
        canActivate: [AuthGuard],
        children: [
            { path: '', component: HomePageUserComponent /*validar logueo */ },
            

        ]
    },

];

@NgModule({
    declarations: [
        HomePageComponent,
        HomePageUserComponent,
        
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        //Angular material
        MaterialModule
    ],
    entryComponents: [
        
    ],
    providers: [
        
    ]
})
export class HomePageModule { }