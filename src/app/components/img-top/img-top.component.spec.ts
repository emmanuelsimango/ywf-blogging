import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgTopComponent } from './img-top.component';

describe('ImgTopComponent', () => {
  let component: ImgTopComponent;
  let fixture: ComponentFixture<ImgTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
