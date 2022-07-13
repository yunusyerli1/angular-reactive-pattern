import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { LoadingService } from './loading.service';
=======
import {LoadingService} from './loading.service';
>>>>>>> a46e1ede5065993676a1e08de1e9346e57b6b30c
=======
import {LoadingService} from './loading.service';
>>>>>>> a46e1ede5065993676a1e08de1e9346e57b6b30c
=======
import {LoadingService} from './loading.service';
>>>>>>> a46e1ede5065993676a1e08de1e9346e57b6b30c

@Component({
  selector: 'loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {


  constructor(public loadingService: LoadingService) {

  }

  ngOnInit() {

  }


}
