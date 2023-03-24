import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelRegisterComponent } from './model-register.component';

describe('ModelRegisterComponent', () => {
  let component: ModelRegisterComponent;
  let fixture: ComponentFixture<ModelRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
