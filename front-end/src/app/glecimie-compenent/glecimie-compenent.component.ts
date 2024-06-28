// glycemie.component.ts
import { Component, OnInit } from '@angular/core';
import { GlecimieServiceService } from '../glecimie-service.service';
import { LectureGlycemie } from '../lecture-glycemie.model';

@Component({
  selector: 'app-glycemie',
  templateUrl: './glecimie-compenent.component.html',
  standalone: false,
  styleUrls: ['./glecimie-compenent.component.css']
})
export class GlycemieComponent implements OnInit {
  lectures: LectureGlycemie[] = [];

  constructor(private GlecimieServiceService: GlecimieServiceService) {}

  ngOnInit(): void {
    this.GlecimieServiceService.getLectures().subscribe(data => {
      this.lectures = data;
    })
  }



}
