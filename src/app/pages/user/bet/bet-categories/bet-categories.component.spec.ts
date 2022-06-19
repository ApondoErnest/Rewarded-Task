import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetCategoriesComponent } from './bet-categories.component';

describe('BetCategoriesComponent', () => {
  let component: BetCategoriesComponent;
  let fixture: ComponentFixture<BetCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BetCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BetCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
