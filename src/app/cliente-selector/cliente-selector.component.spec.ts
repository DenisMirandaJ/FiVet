import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteSelectorComponent } from './cliente-selector.component';

describe('ClienteSelectorComponent', () => {
  let component: ClienteSelectorComponent;
  let fixture: ComponentFixture<ClienteSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
