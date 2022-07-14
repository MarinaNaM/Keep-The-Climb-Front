import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { iSchool, iSchoolState } from 'src/app/core/models/school-model';

@Component({
  selector: 'app-schools-card',
  templateUrl: './schools-card.component.html',
  styleUrls: ['./schools-card.component.scss'],
})
export class SchoolsCardComponent implements OnInit {
  schools!: ReadonlyArray<iSchool>;
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
}
