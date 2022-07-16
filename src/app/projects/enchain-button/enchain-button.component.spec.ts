import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnchainButtonComponent } from './enchain-button.component';

describe('EnchainButtonComponent', () => {
  let component: EnchainButtonComponent;
  let fixture: ComponentFixture<EnchainButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnchainButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnchainButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
