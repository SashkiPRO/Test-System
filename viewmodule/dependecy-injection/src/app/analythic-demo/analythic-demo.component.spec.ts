import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalythicDemoComponent } from './analythic-demo.component';

describe('AnalythicDemoComponent', () => {
  let component: AnalythicDemoComponent;
  let fixture: ComponentFixture<AnalythicDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalythicDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalythicDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
