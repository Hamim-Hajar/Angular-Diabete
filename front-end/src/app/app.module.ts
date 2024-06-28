import { BrowserModule,provideClientHydration } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { GlycemieComponent } from "./glecimie-compenent/glecimie-compenent.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {GlecimieServiceService} from "./glecimie-service.service";

@NgModule({
  declarations: [
    GlycemieComponent
  ],

  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    GlycemieComponent
  ],
  providers: [
    GlecimieServiceService,
    provideClientHydration()
  ]
})

export class AppModule { }
