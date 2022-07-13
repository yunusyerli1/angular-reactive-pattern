import {AfterViewInit, Component, Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import {Course} from "../model/course";
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import * as moment from 'moment';
import {CoursesService} from '../services/courses.service';
import {LoadingService} from '../loading/loading.service';
import {MessagesService} from '../messages/messages.service';
import {throwError} from 'rxjs';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { CoursesService } from '../services/courses.service';
import { LoadingService } from '../loading/loading.service';
import { MessagesService } from '../messages/messages.service';
import { CoursesStore } from '../services/courses.store';
=======
import {catchError} from 'rxjs/operators';
import {CoursesStore} from '../services/courses.store';
>>>>>>> a46e1ede5065993676a1e08de1e9346e57b6b30c
=======
import {catchError} from 'rxjs/operators';
import {CoursesStore} from '../services/courses.store';
>>>>>>> a46e1ede5065993676a1e08de1e9346e57b6b30c
=======
import {catchError} from 'rxjs/operators';
import {CoursesStore} from '../services/courses.store';
>>>>>>> a46e1ede5065993676a1e08de1e9346e57b6b30c

@Component({
    selector: 'course-dialog',
    templateUrl: './course-dialog.component.html',
    styleUrls: ['./course-dialog.component.css'],
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    providers: [LoadingService, MessagesService]
=======
=======
>>>>>>> a46e1ede5065993676a1e08de1e9346e57b6b30c
=======
>>>>>>> a46e1ede5065993676a1e08de1e9346e57b6b30c
    providers: [
        LoadingService,
        MessagesService
    ]
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> a46e1ede5065993676a1e08de1e9346e57b6b30c
=======
>>>>>>> a46e1ede5065993676a1e08de1e9346e57b6b30c
=======
>>>>>>> a46e1ede5065993676a1e08de1e9346e57b6b30c
})
export class CourseDialogComponent {

    form: FormGroup;

    course:Course;

    constructor(
        private fb: FormBuilder,
        private dialogRef: MatDialogRef<CourseDialogComponent>,
        @Inject(MAT_DIALOG_DATA) course:Course,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        private  coursesStore: CoursesStore,
        //private coursesService: CoursesService,
        //private loadingService: LoadingService,
        private messagesService: MessagesService
        ) {
=======
        private coursesStore: CoursesStore,
        private messagesService: MessagesService) {
>>>>>>> a46e1ede5065993676a1e08de1e9346e57b6b30c
=======
        private coursesStore: CoursesStore,
        private messagesService: MessagesService) {
>>>>>>> a46e1ede5065993676a1e08de1e9346e57b6b30c
=======
        private coursesStore: CoursesStore,
        private messagesService: MessagesService) {
>>>>>>> a46e1ede5065993676a1e08de1e9346e57b6b30c

        this.course = course;

        this.form = fb.group({
            description: [course.description, Validators.required],
            category: [course.category, Validators.required],
            releasedAt: [moment(), Validators.required],
            longDescription: [course.longDescription,Validators.required]
        });

    }

    save() {

      const changes = this.form.value;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      this.coursesStore.saveCourse(this.course.id, changes).subscribe();
      this.dialogRef.close(changes);

      //Storedan önceki yöntem
      // const saveCourse$ = this.coursesService.saveCourse(this.course.id, changes).pipe(
      //   catchError(err => {
      //     const message = "Colud not save course";
      //     console.log(message, err);
      //     this.messagesService.showErrors(message);
      //     return throwError(err);
      //   })
      // );
      // this.loadingService.showLoaderUntilCompleted(saveCourse$)
      //   .subscribe(
      //       val=>{
      //         this.dialogRef.close(val);
      //       }
      //   );
=======
=======
>>>>>>> a46e1ede5065993676a1e08de1e9346e57b6b30c
=======
>>>>>>> a46e1ede5065993676a1e08de1e9346e57b6b30c
      this.coursesStore.saveCourse(this.course.id, changes)
          .subscribe();

      this.dialogRef.close(changes);
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> a46e1ede5065993676a1e08de1e9346e57b6b30c
=======
>>>>>>> a46e1ede5065993676a1e08de1e9346e57b6b30c
=======
>>>>>>> a46e1ede5065993676a1e08de1e9346e57b6b30c

    }

    close() {
        this.dialogRef.close();
    }

}
