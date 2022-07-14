import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { iSchool } from 'src/app/core/models/school-model';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-period',
  templateUrl: './period.component.html',
  styleUrls: ['./period.component.scss'],
})
export class PeriodComponent implements OnInit {
  school!: iSchool | undefined;
  idSchool = this.route.snapshot.paramMap.get('id') as string;

  constructor(public route: ActivatedRoute, public store: Store<AppState>) {}

  ngOnInit(): void {
    this.store
      .select((state) => state.schools)
      .subscribe({
        next: (data) => {
          this.school = data.schools.find((item) => item._id === this.idSchool);
        },
      });
  }
}
