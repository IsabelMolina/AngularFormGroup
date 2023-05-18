import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UniqueFirstNameAndLastNameValidator } from './unique-first-name-and-last-name-validator';

export interface Profile{
  firstName?: FormControl,   
  lastName: FormControl
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  profileForm = new FormGroup<Profile>({
    firstName: new FormControl(""),    
    lastName: new FormControl("")
  });

  constructor(private uniqueFirstNameAndLastNameValidator: UniqueFirstNameAndLastNameValidator){ }

  controls(){
    console.log(this.profileForm.controls);
  }

  registerFirstNameControl(){
    this.profileForm.registerControl("firstName", new FormControl(""));
  }

  addFirstNameControl(){
    this.profileForm.addControl("firstName", new FormControl(""));
  }
  
  removeFirstNameControl(){
    this.profileForm.removeControl("firstName");
  }

  setFirstNameControl(){
    this.profileForm.setControl("firstName", new FormControl(""));
  }

  containsFirstName(){
    const exists = this.profileForm.contains("firstName");
    console.log(exists);
    return exists;
  }

  value(){
    console.log(this.profileForm.value);
  }

  validator(){
    console.log(this.profileForm.validator);
  }

  asyncValidator(){
    console.log(this.profileForm.asyncValidator);
  }

  parent(){
    console.log(this.profileForm.parent);
  }

  status(){
    console.log(this.profileForm.status);
  }

  valid(){
    console.log(this.profileForm.valid);
  }

  invalid(){
    console.log(this.profileForm.invalid);
  }

  pending(){
    console.log(this.profileForm.pending);
  }

  disabled(){
    console.log(this.profileForm.disable);
  }

  enabled(){
    console.log(this.profileForm.enabled);
  }

  errors(){
    console.log(this.profileForm.errors);
  }

  pristine(){
    console.log(this.profileForm.pristine);
  }

  dirty(){
    console.log(this.profileForm.dirty);
  }

  touched(){
    console.log(this.profileForm.touched);
  }

  valueChanges(){
    this.profileForm.valueChanges.subscribe((values)=>{
      console.log(values);
    })
  }

  statusChanges(){
    this.profileForm.statusChanges.subscribe((status)=>{
      console.log(status);
    })
  }

  updateOn(){
    console.log(this.profileForm.updateOn);
  }

  root(){
    console.log(this.profileForm.root);
  }

  setRequiredValidator(){
    this.profileForm.setValidators(Validators.required);
  }

  setUniqueFirstNameAndLastNameAsyncValidator(){
    this.profileForm.setAsyncValidators(this.uniqueFirstNameAndLastNameValidator.
      validate.bind(this.uniqueFirstNameAndLastNameValidator));
  }

  addRequiredValidator(){
    this.profileForm.addValidators(Validators.required);
  }

  addUniqueFirstNameAndLastNameAsyncValidator(){
    this.profileForm.addAsyncValidators(this.uniqueFirstNameAndLastNameValidator.
      validate.bind(this.uniqueFirstNameAndLastNameValidator));
  }

  removeRequiredValidator(){
    this.profileForm.removeValidators(Validators.required);
  }

  removeUniqueFirstNameAndLastNameAsyncValidator(){
    this.profileForm.removeAsyncValidators(this.uniqueFirstNameAndLastNameValidator.
      validate.bind(this.uniqueFirstNameAndLastNameValidator));
  }

  hasRequiredValidator(){
    console.log(this.profileForm.hasValidator(Validators.required));
  }

  hasUniqueFirstNameAndLastNameAsyncValidator(){
    console.log(this.profileForm.hasAsyncValidator(this.uniqueFirstNameAndLastNameValidator.
      validate.bind(this.uniqueFirstNameAndLastNameValidator)));
  }

  clearValidators(){
    this.profileForm.clearValidators();
  }

  clearAsyncValidators(){
    this.profileForm.clearAsyncValidators();
  }

  markAsTouched(){
    this.profileForm.markAsTouched();
  }

  markAllAsTouched(){
    this.profileForm.markAllAsTouched();
  }

  markAsUntouched(){
    this.profileForm.markAsUntouched();
  }

  markAsDirty(){
    this.profileForm.markAsDirty();
  }

  markAsPristine(){
    this.profileForm.markAsPristine();
  }

  markAsPending(){
    this.profileForm.markAsPending();
  }

  disable(){
    this.profileForm.disable();
  }

  enable(){
    this.profileForm.enable();
  }

  setParent(){
    this.profileForm.setParent(new FormGroup({}));
  }

  patchValueFirstName(){
    this.profileForm.patchValue({
      firstName: "Alberto"
    })
  }

  setValue(){
    this.profileForm.setValue({
      firstName: "Alberto",
      lastName: "Gonzales"
    })
  }

  reset(){
    this.profileForm.reset();
  }

  getRawValue(){
    console.log(this.profileForm.getRawValue());
  }

  updateValueAndValidity(){
    this.profileForm.updateValueAndValidity();    
  }

  setRequiredError(){
    this.profileForm.setErrors({
      required: true 
    })
  }

  getControlFirstName(){
    console.log(this.profileForm.get("firstName"));
  }

  getRequiredError(){
    console.log(this.profileForm.getError('required'));
  }

  hasRequiredError(){
    console.log(this.profileForm.hasError('required'));
  }
  
}
