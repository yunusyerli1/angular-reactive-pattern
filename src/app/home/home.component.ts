import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Course} from '../model/course';
import {Observable} from 'rxjs';
import {CoursesStore} from '../services/courses.store';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  beginnerCourses$: Observable<Course[]>;

  advancedCourses$: Observable<Course[]>;

<<<<<<< HEAD

=======
  constructor(private coursesStore: CoursesStore) {
>>>>>>> a46e1ede5065993676a1e08de1e9346e57b6b30c

  constructor(
    private coursesStore: CoursesStore,
    //private coursesService: CoursesService,
    //private loadingService: LoadingService,
    //private messagesService: MessagesService
    ) {}

  ngOnInit() {
<<<<<<< HEAD
    this.reloadCourses();
  }

  //Loading gösterme advanced yöntem
  reloadCourses() {
    this.beginnerCourses$ = this.coursesStore.filterByCategory("BEGINNER");
    this.advancedCourses$ = this.coursesStore.filterByCategory("ADVANCED");
=======
      this.reloadCourses();
  }

  reloadCourses() {

      this.beginnerCourses$ = this.coursesStore.filterByCategory("BEGINNER");

      this.advancedCourses$ = this.coursesStore.filterByCategory("ADVANCED");
>>>>>>> a46e1ede5065993676a1e08de1e9346e57b6b30c
  }

   //Loading gösterme advanced yöntem
  //  reloadCourses() {
  //   const courses$ = this.coursesService.loadAllCourses()
  //     .pipe(
  //       map(courses => courses.sort(sortCoursesBySeqNo)),
  //       catchError(err => {
  //         const message = "Could not load courses";
  //         this.messagesService.showErrors(message);
  //         console.log(message, err)
  //         return throwError(err);
  //       })
  //     );
  //   const loadCourses$ = this.loadingService.showLoaderUntilCompleted(courses$);

  //   this.beginnerCourses$ = loadCourses$
  //     .pipe(
  //       map(courses => courses.filter(course => course.category == 'BEGINNER'))
  //     );
  //   this.advancedCourses$ = loadCourses$
  //     .pipe(
  //       map(courses => courses.filter(course => course.category == 'ADVANCED'))
  //     );
  // }

  //Loading gösterme basit yöntem
  // reloadCourses() {
  //   this.loadingService.loadingOn();
  //   const courses$ = this.coursesService.loadAllCourses()
  //     .pipe(
  //       map(courses => courses.sort(sortCoursesBySeqNo)),
  //       finalize(()=> this.loadingService.loadingOff())
  //     );
  //   this.beginnerCourses$ = courses$
  //     .pipe(
  //       map(courses => courses.filter(course => course.category == 'BEGINNER'))
  //     );
  //   this.advancedCourses$ = courses$
  //     .pipe(
  //       map(courses => courses.filter(course => course.category == 'ADVANCED'))
  //     );
  // }

<<<<<<< HEAD
}


=======
>>>>>>> a46e1ede5065993676a1e08de1e9346e57b6b30c
