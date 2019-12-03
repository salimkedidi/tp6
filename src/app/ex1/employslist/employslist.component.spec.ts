import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployslistComponent } from './employslist.component';

describe('EmployslistComponent', () => {
  let component: EmployslistComponent;
  let fixture: ComponentFixture<EmployslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
