import {AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Course} from '../model/course';
import {
  debounceTime,
  distinctUntilChanged,
  startWith,
  tap,
  delay,
  map,
  concatMap,
  switchMap,
  withLatestFrom,
  concatAll, shareReplay
} from 'rxjs/operators';
import {merge, fromEvent, Observable, concat} from 'rxjs';
import {Lesson} from '../model/lesson';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { CoursesService } from '../services/courses.service';
=======
import {CoursesService} from '../services/courses.service';
>>>>>>> a46e1ede5065993676a1e08de1e9346e57b6b30c
=======
import {CoursesService} from '../services/courses.service';
>>>>>>> a46e1ede5065993676a1e08de1e9346e57b6b30c
=======
import {CoursesService} from '../services/courses.service';
>>>>>>> a46e1ede5065993676a1e08de1e9346e57b6b30c


@Component({
  selector: 'course',
  templateUrl: './search-lessons.component.html',
  styleUrls: ['./search-lessons.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchLessonsComponent implements OnInit {

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  searchResults$: Observable<Lesson[]>;

  activeLesson: Lesson;
=======
  searchResults$ : Observable<Lesson[]>;

  activeLesson:Lesson;
>>>>>>> a46e1ede5065993676a1e08de1e9346e57b6b30c
=======
  searchResults$ : Observable<Lesson[]>;

  activeLesson:Lesson;
>>>>>>> a46e1ede5065993676a1e08de1e9346e57b6b30c
=======
  searchResults$ : Observable<Lesson[]>;

  activeLesson:Lesson;
>>>>>>> a46e1ede5065993676a1e08de1e9346e57b6b30c

  constructor(private coursesService: CoursesService) {


  }

  ngOnInit() {


  }

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  onSearch(search: string) {
    this.searchResults$ = this.coursesService.searchLessons(search);
  }

  openLesson(lesson: Lesson) {
    this.activeLesson = lesson;
  }

  onBackToSearch() {
    this.activeLesson = null;
  }
=======
=======
>>>>>>> a46e1ede5065993676a1e08de1e9346e57b6b30c
=======
>>>>>>> a46e1ede5065993676a1e08de1e9346e57b6b30c
    onSearch(search:string) {
        this.searchResults$  = this.coursesService.searchLessons(search);
    }

    openLesson(lesson:Lesson) {
      this.activeLesson = lesson;
    }

    onBackToSearch() {
      this.activeLesson = null;
    }
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> a46e1ede5065993676a1e08de1e9346e57b6b30c
=======
>>>>>>> a46e1ede5065993676a1e08de1e9346e57b6b30c
=======
>>>>>>> a46e1ede5065993676a1e08de1e9346e57b6b30c

}











