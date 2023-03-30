import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetHelpRegisterComponent } from './get-help-register.component';

describe('GetHelpRegisterComponent', () => {
  let component: GetHelpRegisterComponent;
  let fixture: ComponentFixture<GetHelpRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetHelpRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetHelpRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
