import {Component, OnInit} from '@angular/core';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { LoadingService } from './loading/loading.service';
import { MessagesService } from './messages/messages.service';
import { AuthStore } from './services/auth.store';
=======
import {LoadingService} from './loading/loading.service';
import {MessagesService} from './messages/messages.service';
import {AuthStore} from './services/auth.store';
>>>>>>> a46e1ede5065993676a1e08de1e9346e57b6b30c
=======
import {LoadingService} from './loading/loading.service';
import {MessagesService} from './messages/messages.service';
import {AuthStore} from './services/auth.store';
>>>>>>> a46e1ede5065993676a1e08de1e9346e57b6b30c
=======
import {LoadingService} from './loading/loading.service';
import {MessagesService} from './messages/messages.service';
import {AuthStore} from './services/auth.store';
>>>>>>> a46e1ede5065993676a1e08de1e9346e57b6b30c



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements  OnInit {

    constructor(public auth: AuthStore) {

    }

    ngOnInit() {


    }

  logout() {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    this.auth.logout();
=======
=======
>>>>>>> a46e1ede5065993676a1e08de1e9346e57b6b30c
        this.auth.logout();

>>>>>>> a46e1ede5065993676a1e08de1e9346e57b6b30c
=======
        this.auth.logout();

>>>>>>> a46e1ede5065993676a1e08de1e9346e57b6b30c
  }

}
