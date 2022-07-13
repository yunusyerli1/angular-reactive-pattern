<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Course } from "../model/course";
import { map, share, shareReplay } from "rxjs/operators";
import { Lesson } from "../model/lesson";

@Injectable({
  providedIn: 'root'
})

export class CoursesService {
  constructor(private http: HttpClient) {}

  loadCourseById(courseId:number) {
    return this.http.get<Course>(`/api/courses/${courseId}`)
      .pipe(shareReplay());
  }

  loadAllCourseLessons(courseId:number):Observable<Lesson[]> {
    return this.http.get<Lesson[]>('/api/lessons', {
      params: {
        pageSize:"10000",
        courseId: courseId.toString()
      }
    }).pipe(
      map(res => res['payload']),
      shareReplay()
    );
  }

  loadAllCourses() : Observable<Course[]> {
    return this.http.get<Course[]>("/api/courses")
      .pipe(
        map(res =>res['payload']),
        shareReplay()
      );
  }

  saveCourse(courseId:string, changes:Partial<Course>) : Observable<any> {
    return this.http.put(`/api/courses/${courseId}`, changes)
      .pipe(
        shareReplay()
      );
  }

  searchLessons(search:string) : Observable<Lesson[]> {
    return this.http.get<Lesson[]>('/api/lessons', {
      params: {
        filter: search,
        pageSize:"100"
      }
    }).pipe(
      map(res => res['payload']),
      shareReplay()
    );
  }
}
=======
=======
>>>>>>> a46e1ede5065993676a1e08de1e9346e57b6b30c
=======
>>>>>>> a46e1ede5065993676a1e08de1e9346e57b6b30c
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Course} from '../model/course';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import {Lesson} from '../model/lesson';


@Injectable({
    providedIn:'root'
})
export class CoursesService {

    constructor(private http:HttpClient) {

    }

    loadCourseById(courseId:number) {
       return this.http.get<Course>(`/api/courses/${courseId}`)
            .pipe(
              shareReplay()
            );
    }

    loadAllCourseLessons(courseId:number): Observable<Lesson[]> {
        return this.http.get<Lesson[]>('/api/lessons', {
            params: {
                pageSize: "10000",
                courseId: courseId.toString()
            }
        })
            .pipe(
                map(res => res["payload"]),
                shareReplay()
            );
    }

    loadAllCourses(): Observable<Course[]> {
        return this.http.get<Course[]>("/api/courses")
            .pipe(
                map(res => res["payload"]),
                shareReplay()
            );
    }


    saveCourse(courseId:string, changes: Partial<Course>):Observable<any> {
        return this.http.put(`/api/courses/${courseId}`, changes)
            .pipe(
                shareReplay()
            );
    }


    searchLessons(search:string): Observable<Lesson[]> {
        return this.http.get<Lesson[]>('/api/lessons', {
            params: {
                filter: search,
                pageSize: "100"
            }
        })
            .pipe(
                map(res => res["payload"]),
                shareReplay()
            );
    }


}







<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> a46e1ede5065993676a1e08de1e9346e57b6b30c
=======
>>>>>>> a46e1ede5065993676a1e08de1e9346e57b6b30c
=======
>>>>>>> a46e1ede5065993676a1e08de1e9346e57b6b30c
