import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionRegisterComponent } from './collection-register.component';

describe('CollectionRegisterComponent', () => {
  let component: CollectionRegisterComponent;
  let fixture: ComponentFixture<CollectionRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectionRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectionRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
