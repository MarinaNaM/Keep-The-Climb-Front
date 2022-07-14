import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { iSchool } from 'src/app/core/models/school-model';
import { iSector } from 'src/app/core/models/sector-model';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-routes-grade',
  templateUrl: './routes-grade.component.html',
  styleUrls: ['./routes-grade.component.scss'],
})
export class RoutesGradeComponent implements OnInit {
  school!: iSchool | undefined;
  idSchool = this.route.snapshot.paramMap.get('id') as string;
  routesCounter!: number;

  constructor(public route: ActivatedRoute, public store: Store<AppState>) {}

  ngOnInit(): void {
    this.store
      .select((state) => state.schools)
      .subscribe({
        next: (data) => {
          this.school = data.schools.find((item) => item._id === this.idSchool);
          if (this.school)
            this.routesCounter = this.routesCount(this.school?.sectors);
        },
      });
  }

  routesCount(sectors: Array<iSector>) {
    let count = 0;
    sectors.forEach((item) => {
      count += item.routes.length;
    });
    return count;
  }
}
