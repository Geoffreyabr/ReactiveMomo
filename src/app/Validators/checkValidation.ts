import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function checkValidator(passwordOne: string, passwordTwo: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const controlOne = control.get(passwordOne)?.value;
    const controlTwo = control.get(passwordTwo)?.value;
    
    if (controlOne === controlTwo) {
        return null;
    }   

    else {
      return {'notEqual' : {value: controlOne.value}}
    }
  };
}
