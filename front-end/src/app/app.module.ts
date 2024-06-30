import { BrowserModule,provideClientHydration } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { GlecimieCompenentComponent } from "./glecimie-compenent/glecimie-compenent.component";
import {HttpClient, HttpClientModule, provideHttpClient, withFetch} from "@angular/common/http";
import {GlecimieServiceService} from "./glecimie-service.service";
import {GlycemieFormComponent} from "./glycemie-form/glycemie-form.component";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { MatInputModule } from '@angular/material/input';

import { MatButtonModule } from "@angular/material/button";

import { MatFormFieldModule } from '@angular/material/form-field';
// @ts-ignore
import { MatDatepickerModule } from '@angular/material/datepicker';
// @ts-ignore
import { MatNativeDateModule } from '@angular/material/core';
// @ts-ignore
import {MatIcon} from "@angular/material/icon";
// @ts-ignore
import {MatToolbar, MatToolbarRow} from "@angular/material/toolbar";


@NgModule({
  declarations: [
    GlecimieCompenentComponent
  ],

  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIcon,
    MatToolbarRow,
    MatToolbar,
    GlycemieFormComponent

  ],
  exports: [
    GlycemieFormComponent,
    GlecimieCompenentComponent
  ],
  providers: [
    GlecimieServiceService,
    provideClientHydration(),
    provideHttpClient(withFetch())
  ]
})

export class AppModule { }
