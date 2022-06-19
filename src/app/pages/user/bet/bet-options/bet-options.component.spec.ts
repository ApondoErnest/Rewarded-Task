import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetOptionsComponent } from './bet-options.component';

describe('BetOptionsComponent', () => {
  let component: BetOptionsComponent;
  let fixture: ComponentFixture<BetOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BetOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BetOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
