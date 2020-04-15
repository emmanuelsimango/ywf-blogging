import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PathFindersComponent } from './path-finders.component';

describe('PathFindersComponent', () => {
  let component: PathFindersComponent;
  let fixture: ComponentFixture<PathFindersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PathFindersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PathFindersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
