import { async, ComponentFixture, TestBed } from '@angular/core/testing';


import { ClienteSmallFormComponent } from './cliente-small-form.component';

describe('ClienteSmallFormComponent', () => {
  let component: ClienteSmallFormComponent;
  let fixture: ComponentFixture<ClienteSmallFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteSmallFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteSmallFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
