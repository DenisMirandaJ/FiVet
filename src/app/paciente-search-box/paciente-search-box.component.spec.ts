import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteSearchBoxComponent } from './paciente-search-box.component';

describe('PacienteSearchBoxComponent', () => {
  let component: PacienteSearchBoxComponent;
  let fixture: ComponentFixture<PacienteSearchBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacienteSearchBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacienteSearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
