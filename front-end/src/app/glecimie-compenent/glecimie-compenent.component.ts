// glycemie.component.ts
import {Component, OnInit, TrackByFunction} from '@angular/core';
import { GlecimieServiceService } from '../glecimie-service.service';
import { LectureGlycemie } from '../lecture-glycemie.model';
import {FormBuilder, FormGroup} from "@angular/forms";
@Component({
  selector: 'app-glycemie',
  templateUrl: './glecimie-compenent.component.html',
  standalone: false,
  styleUrls: ['./glecimie-compenent.component.css']
})
export class GlecimieCompenentComponent implements OnInit {
  lectures: LectureGlycemie[] = [];
  selectedLecture: LectureGlycemie | null = null;
  glycemieForm: FormGroup;


  constructor(private GlecimieServiceService: GlecimieServiceService, private fb: FormBuilder) {
    this.glycemieForm = this.fb.group({
      date_of_Tracking: [''],
      time_of_Tracking: [''],
      valeur: ['']
    });
  }

  ngOnInit(): void {
   this.loadLectures();
  }
  loadLectures(): void{
    this.GlecimieServiceService.getLectures().subscribe(data => {
      this.lectures = data;
    });
  }
  deleteGlycemies(id: number): void
  {
    this.GlecimieServiceService.deleteLecture(id).subscribe(() => {
      this.lectures = this.lectures.filter(lecture => lecture.id !== id);
    },
      (error)=> {
        console.error('Error deleting lecture', error);
      }
    );
    }

  selectLecture(lecture: LectureGlycemie): void {
    this.selectedLecture = { ...lecture };
    this.glycemieForm.patchValue({
      date_of_Tracking: this.selectedLecture.date_of_Tracking,
      time: this.selectedLecture.time_of_Tracking,
      valeur: this.selectedLecture.valeur
    });
  }
  updateGlycemie(): void {
    if (this.selectedLecture) {
      const updatedLecture = {
        ...this.selectedLecture,
        ...this.glycemieForm.value
      };

      this.GlecimieServiceService.updateLecture(this.selectedLecture.id, updatedLecture).subscribe(
        () => {
          this.loadLectures();
          this.selectedLecture = null;
          this.glycemieForm.reset();
        },
        (error) => {
          console.error('Error updating lecture', error);
        }
      );
    }
  }
  trackById(index: number, item: LectureGlycemie): number {
    return item.id;
  }

}
