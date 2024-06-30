import { BrowserModule,provideClientHydration } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { AddglecimieComponent } from "./addglecimie/addglecimie.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {AddglecimieService} from "./addglecimie.service";

@NgModule({
  declarations: [

  ],

  imports: [
    CommonModule,
    HttpClientModule,
    AddglecimieComponent
  ],
  exports: [
    AddglecimieComponent
  ],
  providers: [
    AddglecimieService,
    provideClientHydration()
  ]
})

export class AppModule { }
