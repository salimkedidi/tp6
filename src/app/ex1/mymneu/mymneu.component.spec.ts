import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MymneuComponent } from './mymneu.component';

describe('MymneuComponent', () => {
  let component: MymneuComponent;
  let fixture: ComponentFixture<MymneuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MymneuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MymneuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
