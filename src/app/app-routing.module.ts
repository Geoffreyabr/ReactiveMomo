import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionFormComponent } from './connexion-form/connexion-form.component';


const routes: Routes = [
  // {path: '', component: ConnexionFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
