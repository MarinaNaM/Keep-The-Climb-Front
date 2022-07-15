import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { iSector } from 'src/app/core/models/sector-model';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-sector-page',
  templateUrl: './sector-page.component.html',
  styleUrls: ['./sector-page.component.scss'],
})
export class SectorPageComponent implements OnInit {
  sector!: iSector | undefined;
  idSector!: string;
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
