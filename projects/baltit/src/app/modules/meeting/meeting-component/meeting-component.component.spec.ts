import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingComponentComponent } from './meeting-component.component';

describe('MeetingComponentComponent', () => {
  let component: MeetingComponentComponent;
  let fixture: ComponentFixture<MeetingComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetingComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
