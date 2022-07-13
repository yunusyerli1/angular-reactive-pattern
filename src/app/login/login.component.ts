import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


import {Router} from '@angular/router';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { AuthStore } from '../services/auth.store';
=======
import {AuthStore} from '../services/auth.store';
>>>>>>> a46e1ede5065993676a1e08de1e9346e57b6b30c
=======
import {AuthStore} from '../services/auth.store';
>>>>>>> a46e1ede5065993676a1e08de1e9346e57b6b30c
=======
import {AuthStore} from '../services/auth.store';
>>>>>>> a46e1ede5065993676a1e08de1e9346e57b6b30c

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthStore) {

    this.form = fb.group({
      email: ['test@angular-university.io', [Validators.required]],
      password: ['test', [Validators.required]]
    });

  }

  ngOnInit() {

  }

  login() {

    const val = this.form.value;
<<<<<<< HEAD
    this.auth.login(val.email, val.password).subscribe(
      () => { this.router.navigateByUrl("/courses")},
      err => {
        alert("Login failed")
      }
    );
=======

    this.auth.login(val.email, val.password)
        .subscribe(
            () => {
                this.router.navigateByUrl("/courses")
            },
            err => {
                alert("Login failed!");
            }
        );

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> a46e1ede5065993676a1e08de1e9346e57b6b30c
=======
>>>>>>> a46e1ede5065993676a1e08de1e9346e57b6b30c
=======
>>>>>>> a46e1ede5065993676a1e08de1e9346e57b6b30c


  }

}
