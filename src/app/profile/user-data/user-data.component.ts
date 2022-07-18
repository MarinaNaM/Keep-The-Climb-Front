import { Component, Input, OnInit } from '@angular/core';
import { iUser, iUserState } from 'src/app/core/models/user-model';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss'],
})
export class UserDataComponent implements OnInit {
  @Input() user!: iUserState;

  constructor() {}

  ngOnInit(): void {}
}
