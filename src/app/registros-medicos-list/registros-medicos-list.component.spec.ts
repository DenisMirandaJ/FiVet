import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrosMedicosListComponent } from './registros-medicos-list.component';

describe('RegistrosMedicosListComponent', () => {
  let component: RegistrosMedicosListComponent;
  let fixture: ComponentFixture<RegistrosMedicosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrosMedicosListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrosMedicosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
