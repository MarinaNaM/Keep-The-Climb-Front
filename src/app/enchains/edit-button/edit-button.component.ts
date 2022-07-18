import { Component, Input, OnInit } from '@angular/core';
import { iRoute } from 'src/app/core/models/route-model';

@Component({
  selector: 'app-edit-button',
  templateUrl: './edit-button.component.html',
  styleUrls: ['./edit-button.component.scss'],
})
export class EditButtonComponent implements OnInit {
  @Input() route!: iRoute;
  constructor() {}

  ngOnInit(): void {}
}
