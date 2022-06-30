import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetCheckoutComponent } from './bet-checkout.component';

describe('BetCheckoutComponent', () => {
  let component: BetCheckoutComponent;
  let fixture: ComponentFixture<BetCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BetCheckoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BetCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
