import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnchainPageComponent } from './enchain-page.component';

describe('EnchainPageComponent', () => {
  let component: EnchainPageComponent;
  let fixture: ComponentFixture<EnchainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnchainPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnchainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
