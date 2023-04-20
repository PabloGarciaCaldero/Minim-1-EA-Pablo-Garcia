import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifygeoComponent } from './modifygeo.component';

describe('ModifygeoComponent', () => {
  let component: ModifygeoComponent;
  let fixture: ComponentFixture<ModifygeoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifygeoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifygeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
