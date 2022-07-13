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
  concatAll, shareReplay, catchError
} from 'rxjs/operators';
import {merge, fromEvent, Observable, concat, throwError, combineLatest} from 'rxjs';
import {Lesson} from '../model/lesson';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { CoursesService } from '../services/courses.service';
=======
import {CoursesService} from '../services/courses.service';
=======
=======
>>>>>>> a46e1ede5065993676a1e08de1e9346e57b6b30c
import {CoursesService} from '../services/courses.service';


interface CourseData {
    course: Course;
    lessons: Lesson[];
}
<<<<<<< HEAD
>>>>>>> a46e1ede5065993676a1e08de1e9346e57b6b30c

=======
>>>>>>> a46e1ede5065993676a1e08de1e9346e57b6b30c

interface CourseData {
    course: Course;
    lessons: Lesson[];
}
>>>>>>> a46e1ede5065993676a1e08de1e9346e57b6b30c

//Sinle Data Observable Pattern
interface CourseData {
  course: Course;
  lessons: Lesson[]
}

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseComponent implements OnInit {

  data$: Observable<CourseData>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======

=======


  constructor(private route: ActivatedRoute,
              private coursesService: CoursesService) {
>>>>>>> a46e1ede5065993676a1e08de1e9346e57b6b30c

  constructor(private route: ActivatedRoute,
              private coursesService: CoursesService) {
>>>>>>> a46e1ede5065993676a1e08de1e9346e57b6b30c

<<<<<<< HEAD
  constructor(private route: ActivatedRoute,
              private coursesService: CoursesService) {
>>>>>>> a46e1ede5065993676a1e08de1e9346e57b6b30c
=======
  }

  ngOnInit() {

        const courseId = parseInt(this.route.snapshot.paramMap.get("courseId"));

        const course$ = this.coursesService.loadCourseById(courseId)
            .pipe(
                startWith(null)
            );

        const lessons$ = this.coursesService.loadAllCourseLessons(courseId)
            .pipe(
                startWith([])
            );

        this.data$ = combineLatest([course$, lessons$])
            .pipe(
                map(([course, lessons]) => {
                    return {
                        course,
                        lessons
                    }
                }),
                tap(console.log)
            );
>>>>>>> a46e1ede5065993676a1e08de1e9346e57b6b30c

  constructor(private route: ActivatedRoute, private courseService: CoursesService) {}

  ngOnInit() {
<<<<<<< HEAD
<<<<<<< HEAD
    const courseId = parseInt(this.route.snapshot.paramMap.get("courseId"));
    const course$ = this.courseService.loadCourseById(courseId).pipe(
      startWith(null)
    );
    const lessons$ = this.courseService.loadAllCourseLessons(courseId).pipe(
      startWith([])
    );
    this.data$ = combineLatest([course$, lessons$]).pipe(
      map(([course, lessons]) => {
        return { course, lessons}
      }),

    );
=======
=======
>>>>>>> a46e1ede5065993676a1e08de1e9346e57b6b30c

        const courseId = parseInt(this.route.snapshot.paramMap.get("courseId"));

        const course$ = this.coursesService.loadCourseById(courseId)
            .pipe(
                startWith(null)
            );

        const lessons$ = this.coursesService.loadAllCourseLessons(courseId)
            .pipe(
                startWith([])
            );

        this.data$ = combineLatest([course$, lessons$])
            .pipe(
                map(([course, lessons]) => {
                    return {
                        course,
                        lessons
                    }
                }),
                tap(console.log)
            );


<<<<<<< HEAD
>>>>>>> a46e1ede5065993676a1e08de1e9346e57b6b30c
=======
>>>>>>> a46e1ede5065993676a1e08de1e9346e57b6b30c
  }

}











