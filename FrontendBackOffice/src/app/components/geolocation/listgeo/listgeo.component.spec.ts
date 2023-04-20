import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListgeoComponent } from './listgeo.component';

describe('ListgeoComponent', () => {
  let component: ListgeoComponent;
  let fixture: ComponentFixture<ListgeoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListgeoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListgeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
