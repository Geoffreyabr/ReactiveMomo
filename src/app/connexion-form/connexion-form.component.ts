import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-connexion-form',
  templateUrl: './connexion-form.component.html',
  styleUrls: ['./connexion-form.component.css']
})
export class ConnexionFormComponent {
  
  constructor (private fb: FormBuilder){
   
  }
  connexionForm: FormGroup = this.fb.group({
    identifiant : ['', Validators.required],
    password : ['', [Validators.required, Validators.minLength(5)]],
  });    

  onSubmit(){
    console.log(this.connexionForm.value);
  }

  ngOninit(){

  }
}
 

