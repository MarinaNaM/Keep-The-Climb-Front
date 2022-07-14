import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { iSchool } from 'src/app/core/models/school-model';
import { AppState } from 'src/app/store/app.state';
@Component({
  selector: 'app-sectors',
  templateUrl: './sectors.component.html',
  styleUrls: ['./sectors.component.scss'],
})
export class SectorsComponent implements OnInit {
  idSchool = this.route.snapshot.paramMap.get('id') as string;
  school!: iSchool | undefined;
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
