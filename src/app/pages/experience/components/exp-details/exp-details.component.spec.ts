import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpDetailsComponent } from './exp-details.component';

describe('ExpDetailsComponent', () => {
  let component: ExpDetailsComponent;
  let fixture: ComponentFixture<ExpDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
