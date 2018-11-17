import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroMedicoFormsComponent } from './registro-medico-forms.component';

describe('RegistroMedicoFormsComponent', () => {
  let component: RegistroMedicoFormsComponent;
  let fixture: ComponentFixture<RegistroMedicoFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroMedicoFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroMedicoFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
