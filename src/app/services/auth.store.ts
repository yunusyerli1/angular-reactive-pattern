<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { map, shareReplay, tap } from "rxjs/operators";
import { User } from "../model/user";

const AUTH_DATA = 'auth_data';

@Injectable({
  providedIn: 'root'
})

export class AuthStore {

  private subject = new BehaviorSubject<User>(null);

  user$ : Observable<User> = this.subject.asObservable();
  isLoggedIn$ : Observable<boolean>;
  isLoggedOut$: Observable<boolean>;

  constructor(private http: HttpClient) {
    this.isLoggedIn$ = this.user$.pipe(map(user =>!!user));
    this.isLoggedOut$ = this.isLoggedIn$.pipe(map(loggedIn =>!loggedIn));

    const user = localStorage.getItem(AUTH_DATA);
    if(user) this.subject.next(JSON.parse(user));

  }

  login(email:string, password:string): Observable<User> {

    return this.http.post<User>("/api/login", {email, password})
      .pipe(
        tap(user =>{
          this.subject.next(user);
          localStorage.setItem(AUTH_DATA, JSON.stringify(user));
        }),
        shareReplay()
      );
  }

  logout() {
    this.subject.next(null);
    localStorage.removeItem(AUTH_DATA);
  }
=======
=======
>>>>>>> a46e1ede5065993676a1e08de1e9346e57b6b30c
=======
>>>>>>> a46e1ede5065993676a1e08de1e9346e57b6b30c
import {Inject, Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '../model/user';
import {map, shareReplay, tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

const AUTH_DATA = "auth_data";

@Injectable({
    providedIn: 'root'
})
export class AuthStore {

    private subject = new BehaviorSubject<User>(null);

    user$ : Observable<User> = this.subject.asObservable();

    isLoggedIn$ : Observable<boolean>;
    isLoggedOut$ : Observable<boolean>;

    constructor(private http: HttpClient) {

        this.isLoggedIn$ = this.user$.pipe(map(user => !!user));

        this.isLoggedOut$ = this.isLoggedIn$.pipe(map(loggedIn => !loggedIn));

        const user = localStorage.getItem(AUTH_DATA);

        if (user) {
            this.subject.next(JSON.parse(user));
        }

    }

    login(email:string, password:string): Observable<User> {
        return this.http.post<User>("/api/login", {email, password})
            .pipe(
                tap(user => {
                    this.subject.next(user);
                    localStorage.setItem(AUTH_DATA, JSON.stringify(user));
                }),
                shareReplay()
            );
    }

    logout() {
        this.subject.next(null);
        localStorage.removeItem(AUTH_DATA);
    }


<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> a46e1ede5065993676a1e08de1e9346e57b6b30c
=======
>>>>>>> a46e1ede5065993676a1e08de1e9346e57b6b30c
=======
>>>>>>> a46e1ede5065993676a1e08de1e9346e57b6b30c
}
