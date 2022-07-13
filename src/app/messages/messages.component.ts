import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Message} from '../model/message';
import {tap} from 'rxjs/operators';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { MessagesService } from './messages.service';
=======
import {MessagesService} from './messages.service';
>>>>>>> a46e1ede5065993676a1e08de1e9346e57b6b30c
=======
import {MessagesService} from './messages.service';
>>>>>>> a46e1ede5065993676a1e08de1e9346e57b6b30c
=======
import {MessagesService} from './messages.service';
>>>>>>> a46e1ede5065993676a1e08de1e9346e57b6b30c

@Component({
  selector: 'messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  showMessages = false;

  errors$: Observable<string[]>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======
>>>>>>> a46e1ede5065993676a1e08de1e9346e57b6b30c


  constructor(public messagesService: MessagesService) {

      console.log("Created messages component");
<<<<<<< HEAD
>>>>>>> a46e1ede5065993676a1e08de1e9346e57b6b30c
=======
>>>>>>> a46e1ede5065993676a1e08de1e9346e57b6b30c


<<<<<<< HEAD
  constructor(public messagesService: MessagesService) {

      console.log("Created messages component");
>>>>>>> a46e1ede5065993676a1e08de1e9346e57b6b30c

  constructor(public messagesService: MessagesService) {
    console.log("Created msg component");
  }
=======
  ngOnInit() {
      this.errors$ = this.messagesService.errors$
          .pipe(
              tap(() => this.showMessages = true)
          );
<<<<<<< HEAD
>>>>>>> a46e1ede5065993676a1e08de1e9346e57b6b30c

  ngOnInit() {
<<<<<<< HEAD
    this.errors$ = this.messagesService.errors$.pipe(
        tap(() => this.showMessages = true)
    );
=======
      this.errors$ = this.messagesService.errors$
          .pipe(
              tap(() => this.showMessages = true)
          );
=======
>>>>>>> a46e1ede5065993676a1e08de1e9346e57b6b30c

>>>>>>> a46e1ede5065993676a1e08de1e9346e57b6b30c
  }


  onClose() {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    this.showMessages = false;
=======
      this.showMessages = false;

>>>>>>> a46e1ede5065993676a1e08de1e9346e57b6b30c
=======
=======
>>>>>>> a46e1ede5065993676a1e08de1e9346e57b6b30c
      this.showMessages = false;

>>>>>>> a46e1ede5065993676a1e08de1e9346e57b6b30c
  }

}
