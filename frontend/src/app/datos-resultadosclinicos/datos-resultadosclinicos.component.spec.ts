import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosResultadosclinicosComponent } from './datos-resultadosclinicos.component';

describe('DatosResultadosclinicosComponent', () => {
  let component: DatosResultadosclinicosComponent;
  let fixture: ComponentFixture<DatosResultadosclinicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosResultadosclinicosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosResultadosclinicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
