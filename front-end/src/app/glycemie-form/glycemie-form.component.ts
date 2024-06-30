import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {LectureGlycemie} from "../lecture-glycemie.model";
import {GlecimieServiceService} from "../glecimie-service.service";
import {MatLabel} from "@angular/material/form-field";

@Component({
  selector: 'app-glycemie-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatLabel
  ],
  templateUrl: './glycemie-form.component.html',
  styleUrl: './glycemie-form.component.css'
})
export class GlycemieFormComponent implements OnInit{
  glycemieForm: FormGroup;
  lectures: LectureGlycemie[] = [];
  constructor(private fb: FormBuilder, private glycemieService: GlecimieServiceService) {
    this.glycemieForm = this.fb.group({
      date_of_Tracking: [''],
      time_of_Tracking: [''],
      valeur: ['']
    });
  }
  ngOnInit(): void {
    this.glycemieForm = this.fb.group({
      date_of_Tracking: [''],
      time_of_Tracking: [''],
      valeur: ['']
    });

    this.loadLectures();
  }


  loadLectures() {
    this.glycemieService.getLectures().subscribe(
      lectures => {
        this.lectures = lectures;
      },
      error => {
        console.error('Error loading glycemic readings:', error);

      }
    );
  }

  saveGlycemie() {
    this.glycemieService.save({
      id: null,
      date_of_Tracking: this.glycemieForm.value.date_of_Tracking,
      time_of_Tracking: this.glycemieForm.value.time_of_Tracking,
      valeur: this.glycemieForm.value.valeur
    }).subscribe(
      () => {
        alert('Glycemic reading saved successfully!');
        this.glycemieForm.reset();
      },
      (error: any) => {
        console.error('Error saving glycemic reading:', error);
        alert('Failed to save glycemic reading.');
      }
    );
  }
}


