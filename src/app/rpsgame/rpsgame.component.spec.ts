import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RpsgameComponent } from './rpsgame.component';

describe('RpsgameComponent', () => {
  let component: RpsgameComponent;
  let fixture: ComponentFixture<RpsgameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RpsgameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RpsgameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
