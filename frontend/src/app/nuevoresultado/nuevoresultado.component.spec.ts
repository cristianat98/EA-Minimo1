import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoresultadoComponent } from './nuevoresultado.component';

describe('NuevoresultadoComponent', () => {
  let component: NuevoresultadoComponent;
  let fixture: ComponentFixture<NuevoresultadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoresultadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoresultadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
