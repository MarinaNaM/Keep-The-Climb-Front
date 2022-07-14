import { Component, Input, OnInit } from '@angular/core';

import { iSector } from 'src/app/core/models/sector-model';

@Component({
  selector: 'app-sector-card',
  templateUrl: './sector-card.component.html',
  styleUrls: ['./sector-card.component.scss'],
})
export class SectorCardComponent implements OnInit {
  @Input() sector!: iSector;

  constructor() {}

  ngOnInit(): void {}
}
