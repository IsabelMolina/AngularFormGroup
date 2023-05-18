import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

const USERS = [{
  firstName: "Erick",
  lastName: "Robin"
}]

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  isFirstNameAndLastNameTaken(firstName: string, lastName:string): Observable<boolean> {
    const isTaken = USERS.includes({firstName, lastName});
    return of(isTaken).pipe(delay(400));
  }
}
