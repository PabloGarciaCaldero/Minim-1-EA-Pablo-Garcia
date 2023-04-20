import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormgeoComponent } from './formgeo.component';

describe('FormgeoComponent', () => {
  let component: FormgeoComponent;
  let fixture: ComponentFixture<FormgeoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormgeoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormgeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
