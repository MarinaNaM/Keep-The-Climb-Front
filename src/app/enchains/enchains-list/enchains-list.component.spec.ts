import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnchainsListComponent } from './enchains-list.component';

describe('EnchainsListComponent', () => {
  let component: EnchainsListComponent;
  let fixture: ComponentFixture<EnchainsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnchainsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnchainsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
