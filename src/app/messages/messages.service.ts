<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { filter } from "rxjs/operators";
=======
=======
>>>>>>> a46e1ede5065993676a1e08de1e9346e57b6b30c
=======
>>>>>>> a46e1ede5065993676a1e08de1e9346e57b6b30c
import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {filter} from 'rxjs/operators';

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> a46e1ede5065993676a1e08de1e9346e57b6b30c
=======
>>>>>>> a46e1ede5065993676a1e08de1e9346e57b6b30c
=======
>>>>>>> a46e1ede5065993676a1e08de1e9346e57b6b30c

@Injectable()
export class MessagesService {

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

  private subject = new BehaviorSubject<string[]>([]);

  errors$: Observable<string[]> = this.subject.asObservable().pipe(
    filter(messages => messages && messages.length > 0)
  );


  showErrors(...errors: string[]) {
    this.subject.next(errors);
  }
=======
=======
>>>>>>> a46e1ede5065993676a1e08de1e9346e57b6b30c
=======
>>>>>>> a46e1ede5065993676a1e08de1e9346e57b6b30c
    private subject = new BehaviorSubject<string[]>([]);

    errors$: Observable<string[]> = this.subject.asObservable()
        .pipe(
            filter(messages => messages && messages.length > 0)
        );

    showErrors(...errors: string[]) {
        this.subject.next(errors);
    }

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> a46e1ede5065993676a1e08de1e9346e57b6b30c
=======
>>>>>>> a46e1ede5065993676a1e08de1e9346e57b6b30c
=======
>>>>>>> a46e1ede5065993676a1e08de1e9346e57b6b30c
}
