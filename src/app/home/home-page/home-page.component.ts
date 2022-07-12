import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { iSchool, iSchoolState } from 'src/app/core/models/school-model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  schools!: ReadonlyArray<iSchool>;
  constructor(public store: Store<{ schools: iSchoolState }>) {}

  ngOnInit(): void {
    this.store
      .select((state) => state.schools)
      .subscribe({
        next: (data) => {
          console.log(data);
          this.schools = data.schools;
        },
      });
  }
}
