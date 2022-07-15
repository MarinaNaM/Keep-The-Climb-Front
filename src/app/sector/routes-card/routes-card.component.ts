import { Component, Input, OnInit } from '@angular/core';
import { iRoute } from 'src/app/core/models/route-model';

@Component({
  selector: 'app-routes-card',
  templateUrl: './routes-card.component.html',
  styleUrls: ['./routes-card.component.scss'],
})
export class RoutesCardComponent implements OnInit {
  @Input() route!: iRoute;
  constructor() {}

  ngOnInit(): void {}
}
