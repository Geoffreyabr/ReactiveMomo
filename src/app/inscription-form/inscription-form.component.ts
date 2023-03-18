import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { checkValidator } from '../Validators/checkValidation';

@Component({
  selector: 'app-inscription-form',
  templateUrl: './inscription-form.component.html',
  styleUrls: ['./inscription-form.component.css'],
})
export class InscriptionFormComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  inscriptionForm: FormGroup = this.fb.group({
    identifiant: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(5)]],
    passwordConfirm: [
      '',
      [Validators.required, checkValidator('password', 'passwordConfirm')],
    ],
    email: ['', [Validators.required, Validators.email]],
  });

  ngOnInit(): void {
    this.inscriptionForm.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }

  onSubmit() {
    console.log(this.inscriptionForm.value);
  }
}
