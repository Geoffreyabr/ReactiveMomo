import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { ConnexionFormComponent } from './connexion-form/connexion-form.component';
import { InscriptionFormComponent } from './inscription-form/inscription-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnexionFormComponent,
    InscriptionFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
