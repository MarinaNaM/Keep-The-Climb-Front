import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { iSchool, iSchoolState } from 'src/app/core/models/school-model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  schools!: ReadonlyArray<iSchool>;
  selectedIndex = 0;

  constructor(public store: Store<{ schools: iSchoolState }>) {}

  ngOnInit(): void {
    this.store
      .select((state) => state.schools)
      .subscribe({
        next: (data) => {
          this.schools = data.schools;
        },
      });
  }

  selectImage(index: number): void {
    this.selectedIndex = index;
  }
}
