import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { iSector } from 'src/app/core/models/sector-model';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-routes-list',
  templateUrl: './routes-list.component.html',
  styleUrls: ['./routes-list.component.scss'],
})
export class RoutesListComponent implements OnInit {
  idSector!: string;
  sector!: iSector | undefined;
  constructor(public route: ActivatedRoute, public store: Store<AppState>) {}

  ngOnInit(): void {
    this.idSector = this.route.snapshot.paramMap.get('id') as string;
    this.store
      .select((state) => state.sectors)
      .subscribe({
        next: (data) => {
          this.sector = data.sectors.find((item) => item._id === this.idSector);
        },
      });
  }
}
