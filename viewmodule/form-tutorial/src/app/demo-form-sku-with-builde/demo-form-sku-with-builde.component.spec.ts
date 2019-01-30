import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFormSkuWithBuildeComponent } from './demo-form-sku-with-builde.component';

describe('DemoFormSkuWithBuildeComponent', () => {
  let component: DemoFormSkuWithBuildeComponent;
  let fixture: ComponentFixture<DemoFormSkuWithBuildeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoFormSkuWithBuildeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoFormSkuWithBuildeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
