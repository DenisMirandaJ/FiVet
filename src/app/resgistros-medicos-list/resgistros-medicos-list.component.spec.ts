import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResgistrosMedicosListComponent } from './resgistros-medicos-list.component';

describe('ResgistrosMedicosListComponent', () => {
  let component: ResgistrosMedicosListComponent;
  let fixture: ComponentFixture<ResgistrosMedicosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResgistrosMedicosListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResgistrosMedicosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
