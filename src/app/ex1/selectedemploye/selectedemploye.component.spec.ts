import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedemployeComponent } from './selectedemploye.component';

describe('SelectedemployeComponent', () => {
  let component: SelectedemployeComponent;
  let fixture: ComponentFixture<SelectedemployeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedemployeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedemployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
