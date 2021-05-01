import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule } from '@angular/forms'; 



 //modulso
 import { AppRoutingModule } from '../app-routing.module';
 import { SharedModule } from '../shared/shared.module';
 import { ComponentsModule } from '../components/components.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromisesComponent } from './promises/promises.component';
import { RxJsComponent } from './rx-js/rx-js.component';
import { FromEventComponent } from './from-event/from-event.component';
 




@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    AccountSettingsComponent,
    PromisesComponent,
    RxJsComponent,
    FromEventComponent
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    AccountSettingsComponent
  ]
  , imports: [
    FormsModule,
    
    CommonModule,
    SharedModule,
    AppRoutingModule,
    ComponentsModule
  ]
})
export class PagesModule { }
