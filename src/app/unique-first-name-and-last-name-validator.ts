import { Injectable } from '@angular/core';
import { AsyncValidator, AbstractControl, ValidationErrors } from '@angular/forms';
import { catchError, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { UserService } from './user.service';

@Injectable({ providedIn: 'root' })

export class UniqueFirstNameAndLastNameValidator implements AsyncValidator{

  constructor(private userService: UserService) {}

  validate(
    control: AbstractControl
  ): Observable<ValidationErrors | null> {
    const firstName = control['firstName'].value;
    const lastName = control['lastName'].value;
    return this.userService.isFirstNameAndLastNameTaken(firstName, lastName).pipe(
      map(isTaken => (isTaken ? { uniqueName: true } : null)),
      catchError(() => of(null))
    );
  }
}
