import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunityComponentComponent } from './opportunity-component.component';

describe('OpportunityComponentComponent', () => {
  let component: OpportunityComponentComponent;
  let fixture: ComponentFixture<OpportunityComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpportunityComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunityComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
