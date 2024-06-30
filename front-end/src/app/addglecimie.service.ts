import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {LectureGlycemie} from "./lecture-glycemie.model";

@Injectable({
  providedIn: 'root'
})
export class AddglecimieService {
  private apiUrl = 'http://localhost:8090/glycimie';
  constructor(private http: HttpClient) {}

 getLectures(): Observable<LectureGlycemie[]> {
    return this.http.get<LectureGlycemie[]>(`${this.apiUrl}/ShowInfo`);
  }

  addLecture(lecture: LectureGlycemie): Observable<LectureGlycemie> {
    return this.http.post<LectureGlycemie>(`${this.apiUrl}/AddLecture`, lecture);
  }
}
