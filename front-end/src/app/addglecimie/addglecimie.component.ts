/*import {Component, OnInit} from '@angular/core';
import {LectureGlycemie} from "../lecture-glycemie.model";
import {AddglecimieService} from "../addglecimie.service";
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-addglecimie',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './addglecimie.component.html',
  styleUrl: './addglecimie.component.css'
})
export class AddglecimieComponent implements OnInit {
  lectures: LectureGlycemie[] = [];
  newLecture: LectureGlycemie = {
    id: 0,
    date_of_Tracking: '',
    time_of_Tracking: '',
    valeur: 0
  };
  constructor(private AddglecimieService: AddglecimieService) {}

  ngOnInit(): void {
    this.AddglecimieService.getLectures().subscribe(data => {
      this.lectures = data;
    });
  }

  addLecture(): void {
    this.AddglecimieService.addLecture(this.newLecture).subscribe(response => {
      this.lectures.push(response);
      this.newLecture = { id: 0, date_of_Tracking: '', time_of_Tracking: '', valeur: 0 };
    });
  }

  trackByLectureId(index: number, lecture: LectureGlycemie): number {
    return lecture.id;
  }

  /*ngOnInit(): void {
    this.AddglecimieService.getLectures().subscribe((data: LectureGlycemie[]) => {
      this.lectures = data;
    })
}
}*/
