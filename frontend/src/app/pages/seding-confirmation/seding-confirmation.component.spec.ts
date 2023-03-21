import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SedingConfirmationComponent } from './seding-confirmation.component';

describe('SedingConfirmationComponent', () => {
  let component: SedingConfirmationComponent;
  let fixture: ComponentFixture<SedingConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SedingConfirmationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SedingConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
