import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { gradeToValue, valueToGrade } from 'src/app/core/helpers/gradeValues';
import { iRoute } from 'src/app/core/models/route-model';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-media-grades',
  templateUrl: './media-grades.component.html',
  styleUrls: ['./media-grades.component.scss'],
})
export class MediaGradesComponent implements OnInit {
  enchainedRoutes!: Array<{
    route: iRoute;
    isProject: boolean;
    isEnchain: boolean;
  }>;

  constructor(public store: Store<AppState>) {}

  ngOnInit(): void {
    this.store
      .select((state) => state.user)
      .subscribe({
        next: (data) => {
          this.enchainedRoutes = data.user.routes.filter(
            (item) => item.isEnchain === true
          );
        },
      });
  }

  mediaRoutes() {
    const mediaValue = Math.round(
      this.enchainedRoutes
        .map((item) => gradeToValue(item.route.grade))
        .reduce((a, b) => a + b) / this.enchainedRoutes.length
    );
    const mediaGrade = valueToGrade(mediaValue);
    return mediaGrade;
  }
}
